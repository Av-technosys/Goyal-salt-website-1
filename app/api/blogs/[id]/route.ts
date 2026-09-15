import { NextRequest } from "next/server";
import { ZodError } from "zod";

import { getAuthenticatedAdmin } from "@/src/lib/auth/admin-auth";
import {
  deleteBlog,
  getBlogById,
  updateBlog,
} from "@/src/lib/blogs/queries";
import {
  apiError,
  isDuplicateKeyError,
  ok,
  validationError,
} from "@/src/lib/blogs/http";
import { blogIdSchema, updateBlogSchema } from "@/src/lib/blogs/validation";

interface RouteContext {
  params: Promise<{ id: string }>;
}

async function getValidatedId(context: RouteContext) {
  const { id } = await context.params;
  return blogIdSchema.parse(id);
}

export async function GET(_request: NextRequest, context: RouteContext) {
  try {
    const admin = await getAuthenticatedAdmin();

    if (!admin) {
      return apiError("Unauthorized", 401);
    }

    const id = await getValidatedId(context);
    const blog = await getBlogById(id);

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

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const admin = await getAuthenticatedAdmin();

    if (!admin) {
      return apiError("Unauthorized", 401);
    }

    const id = await getValidatedId(context);
    const body = updateBlogSchema.parse(await request.json());
    const blog = await updateBlog(id, body);

    if (!blog) {
      return apiError("Blog not found", 404);
    }

    return ok({ data: blog });
  } catch (error) {
    if (error instanceof ZodError) {
      return validationError(error);
    }

    if (
      error instanceof Error &&
      (error.name === "DUPLICATE_SLUG" || isDuplicateKeyError(error))
    ) {
      return apiError("A blog with this slug already exists", 409);
    }

    return apiError("Unable to update blog", 500);
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  try {
    const admin = await getAuthenticatedAdmin();

    if (!admin) {
      return apiError("Unauthorized", 401);
    }

    const id = await getValidatedId(context);
    const deleted = await deleteBlog(id);

    if (!deleted) {
      return apiError("Blog not found", 404);
    }

    return ok({ data: deleted });
  } catch (error) {
    if (error instanceof ZodError) {
      return validationError(error);
    }

    return apiError("Unable to delete blog", 500);
  }
}
