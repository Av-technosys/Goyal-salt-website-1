import { z } from "zod";

import { BLOG_IMAGE_PREFIX } from "./image-upload";
import { generateSlug } from "./slug";

export const blogStatuses = ["draft", "published"] as const;

const emptyToNull = (value: unknown) =>
  typeof value === "string" && value.trim() === "" ? null : value;

const optionalText = (max: number) =>
  z.preprocess(
    emptyToNull,
    z.string().trim().max(max).nullable().optional(),
  );

const optionalImageKey = z.preprocess(
  emptyToNull,
  z
    .string()
    .trim()
    .regex(
      new RegExp(`^${BLOG_IMAGE_PREFIX}[a-f0-9-]+\\.(jpg|jpeg|png|webp)$`),
      "Invalid cover image key",
    )
    .nullable()
    .optional(),
);

export const blogIdSchema = z.uuid();

export const blogSlugSchema = z
  .string()
  .trim()
  .min(1)
  .max(180)
  .transform(generateSlug)
  .pipe(z.string().min(1, "Slug is required"));

export const blogListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
  search: z.string().trim().max(120).optional().default(""),
  status: z.enum(["all", ...blogStatuses]).optional().default("all"),
});

const blogFields = {
  title: z.string().trim().min(3).max(180),
  slug: z
    .string()
    .trim()
    .max(180)
    .optional()
    .transform((value) => (value ? generateSlug(value) : undefined)),
  excerpt: z.string().trim().min(10).max(500),
  content: z.string().trim().min(20),
  authorName: optionalText(120),
  coverImageKey: optionalImageKey,
  seoTitle: optionalText(180),
  seoDescription: optionalText(300),
  status: z.enum(blogStatuses),
  publishedAt: z
    .string()
    .datetime()
    .nullable()
    .optional(),
};

export const createBlogSchema = z.object({
  ...blogFields,
  status: z.enum(blogStatuses).default("draft"),
});

export const updateBlogSchema = z.object(blogFields).partial();

export type BlogListQuery = z.infer<typeof blogListQuerySchema>;
export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;
