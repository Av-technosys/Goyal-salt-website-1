import { NextRequest } from "next/server";
import { ZodError } from "zod";

import { getAuthenticatedAdmin } from "@/src/lib/auth/admin-auth";
import { createBlog, listBlogs } from "@/src/lib/blogs/queries";
import {
  apiError,
  isDuplicateKeyError,
  ok,
  validationError,
} from "@/src/lib/blogs/http";
import {
  blogListQuerySchema,
  createBlogSchema,
} from "@/src/lib/blogs/validation";

export async function GET(request: NextRequest) {
  try {
    const query = blogListQuerySchema.parse(
      Object.fromEntries(request.nextUrl.searchParams),
    );
    const admin = await getAuthenticatedAdmin();
    const result = await listBlogs(
      admin || query.status === "published"
        ? query
        : { ...query, status: "published" },
    );

    return ok(result);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationError(error);
    }

    return apiError("Unable to fetch blogs", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await getAuthenticatedAdmin();

    if (!admin) {
      return apiError("Unauthorized", 401);
    }

    const body = createBlogSchema.parse(await request.json());
    const blog = await createBlog(body);

    return ok({ data: blog }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return validationError(error);
    }

    if (isDuplicateKeyError(error)) {
      return apiError("A blog with this slug already exists", 409);
    }

    return apiError("Unable to create blog", 500);
  }
}
