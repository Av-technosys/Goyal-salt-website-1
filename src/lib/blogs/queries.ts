import "server-only";

import { and, count, desc, eq, ilike, ne, or, type SQL } from "drizzle-orm";

import { db, blogs, type Blog, type BlogStatus, type NewBlog } from "@/src/db";
import { getBlogSlug } from "./slug";
import type { BlogListQuery, CreateBlogInput, UpdateBlogInput } from "./validation";

export interface PaginatedBlogs {
  data: Blog[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

function buildBlogFilters(query: BlogListQuery) {
  const filters: SQL[] = [];

  if (query.status !== "all") {
    filters.push(eq(blogs.status, query.status));
  }

  if (query.search) {
    const search = `%${query.search}%`;
    const searchFilter = or(
      ilike(blogs.title, search),
      ilike(blogs.excerpt, search),
      ilike(blogs.content, search),
    );

    if (searchFilter) {
      filters.push(searchFilter);
    }
  }

  return filters.length > 0 ? and(...filters) : undefined;
}

function toPublishedAt(status: BlogStatus, value?: string | null) {
  if (value) {
    return new Date(value);
  }

  return status === "published" ? new Date() : null;
}

export async function listBlogs(query: BlogListQuery): Promise<PaginatedBlogs> {
  const where = buildBlogFilters(query);
  const offset = (query.page - 1) * query.limit;

  const [rows, totalRows] = await Promise.all([
    db
      .select()
      .from(blogs)
      .where(where)
      .orderBy(desc(blogs.publishedAt), desc(blogs.createdAt))
      .limit(query.limit)
      .offset(offset),
    db.select({ value: count() }).from(blogs).where(where),
  ]);

  const total = totalRows[0]?.value ?? 0;

  return {
    data: rows,
    pagination: {
      page: query.page,
      limit: query.limit,
      total,
      totalPages: Math.ceil(total / query.limit),
    },
  };
}

export async function getBlogById(id: string) {
  const [blog] = await db.select().from(blogs).where(eq(blogs.id, id)).limit(1);
  return blog ?? null;
}

export async function getPublishedBlogBySlug(slug: string) {
  const [blog] = await db
    .select()
    .from(blogs)
    .where(and(eq(blogs.slug, slug), eq(blogs.status, "published")))
    .limit(1);

  return blog ?? null;
}

export async function createBlog(input: CreateBlogInput) {
  const status = input.status ?? "draft";
  const values: NewBlog = {
    title: input.title,
    slug: getBlogSlug(input.title, input.slug),
    excerpt: input.excerpt,
    content: input.content,
    coverImageKey: input.coverImageKey ?? null,
    seoTitle: input.seoTitle ?? null,
    seoDescription: input.seoDescription ?? null,
    status,
    publishedAt: toPublishedAt(status, input.publishedAt),
    updatedAt: new Date(),
  };

  const [blog] = await db.insert(blogs).values(values).returning();
  return blog;
}

export async function updateBlog(id: string, input: UpdateBlogInput) {
  const existing = await getBlogById(id);

  if (!existing) {
    return null;
  }

  if (input.slug) {
    const [matchingSlug] = await db
      .select({ id: blogs.id })
      .from(blogs)
      .where(and(eq(blogs.slug, input.slug), ne(blogs.id, id)))
      .limit(1);

    if (matchingSlug) {
      const duplicateSlugError = new Error("Duplicate slug");
      duplicateSlugError.name = "DUPLICATE_SLUG";
      throw duplicateSlugError;
    }
  }

  const nextStatus = input.status ?? existing.status;
  const values: Partial<NewBlog> = {
    updatedAt: new Date(),
  };

  if (input.title !== undefined) values.title = input.title;
  if (input.slug !== undefined) values.slug = getBlogSlug(input.title ?? existing.title, input.slug);
  if (input.excerpt !== undefined) values.excerpt = input.excerpt;
  if (input.content !== undefined) values.content = input.content;
  if (input.coverImageKey !== undefined) values.coverImageKey = input.coverImageKey ?? null;
  if (input.seoTitle !== undefined) values.seoTitle = input.seoTitle ?? null;
  if (input.seoDescription !== undefined) {
    values.seoDescription = input.seoDescription ?? null;
  }
  if (input.status !== undefined) values.status = nextStatus;
  if (input.publishedAt !== undefined) {
    values.publishedAt = input.publishedAt ? new Date(input.publishedAt) : null;
  } else if (input.status === "published" && !existing.publishedAt) {
    values.publishedAt = new Date();
  } else if (input.status === "draft") {
    values.publishedAt = null;
  }

  const [blog] = await db
    .update(blogs)
    .set(values)
    .where(eq(blogs.id, id))
    .returning();

  return blog;
}

export async function deleteBlog(id: string) {
  const [deleted] = await db
    .delete(blogs)
    .where(eq(blogs.id, id))
    .returning({ id: blogs.id });

  return deleted ?? null;
}
