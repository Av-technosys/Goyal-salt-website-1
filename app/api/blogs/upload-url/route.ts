import { NextRequest } from "next/server";
import { z, ZodError } from "zod";

import { getAuthenticatedAdmin } from "@/src/lib/auth/admin-auth";
import { apiError, ok, validationError } from "@/src/lib/blogs/http";
import {
  BLOG_IMAGE_MAX_SIZE,
  blogImageContentTypes,
} from "@/src/lib/blogs/image-upload";
import { createBlogImageUpload } from "@/src/lib/blogs/s3";

export const runtime = "nodejs";

const uploadRequestSchema = z.object({
  fileName: z.string().trim().min(1).max(255),
  contentType: z.enum(blogImageContentTypes),
  size: z.coerce.number().int().min(1).max(BLOG_IMAGE_MAX_SIZE),
});

export async function POST(request: NextRequest) {
  try {
    const admin = await getAuthenticatedAdmin();

    if (!admin) {
      return apiError("Unauthorized", 401);
    }

    const body = uploadRequestSchema.parse(await request.json());
    const upload = await createBlogImageUpload(body.contentType);

    return ok({ data: upload });
  } catch (error) {
    if (error instanceof ZodError) {
      return validationError(error);
    }

    if (
      error instanceof Error &&
      error.message === "CLOUDFRONT_URL is not configured"
    ) {
      return apiError("Image CDN is not configured", 500);
    }

    return apiError("Unable to create upload URL", 500);
  }
}
