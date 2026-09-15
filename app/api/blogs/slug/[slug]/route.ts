import { NextRequest } from "next/server";
import { ZodError } from "zod";

import { getPublishedBlogBySlug } from "@/src/lib/blogs/queries";
import { apiError, ok, validationError } from "@/src/lib/blogs/http";
import { blogSlugSchema } from "@/src/lib/blogs/validation";

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params;
    const validatedSlug = blogSlugSchema.parse(slug);
    const blog = await getPublishedBlogBySlug(validatedSlug);

    if (!blog) {
      return apiError("Blog not found", 404);
    }

    return ok({ data: blog });
  } catch (error) {
    if (error instanceof ZodError) {
      return validationError(error);
    }

    return apiError("Unable to fetch blog", 500);
  }
}
