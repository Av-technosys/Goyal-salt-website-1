import "server-only";

import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { randomUUID } from "crypto";

import {
  BLOG_IMAGE_MAX_SIZE,
  BLOG_IMAGE_PREFIX,
  getBlogImageExtension,
  type BlogImageContentType,
} from "./image-upload";

function getRequiredEnv(name: string, fallbackName?: string) {
  const value = process.env[name] ?? (fallbackName ? process.env[fallbackName] : undefined);

  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
}

const s3Client = new S3Client({
  region: getRequiredEnv("AWS_REGION"),
  credentials: {
    accessKeyId: getRequiredEnv("AWS_ACCESS_KEY_ID", "ACCESS_KEY"),
    secretAccessKey: getRequiredEnv("AWS_SECRET_ACCESS_KEY", "SECRET_KEY"),
  },
});

export async function createBlogImageUpload(contentType: BlogImageContentType) {
  const bucket = getRequiredEnv("AWS_S3_BUCKET", "AWS_BUCKET");
  const extension = getBlogImageExtension(contentType);
  const fileName = `${randomUUID()}.${extension}`;
  const key = `${BLOG_IMAGE_PREFIX}${fileName}`;

  const presignedPost = await createPresignedPost(s3Client, {
    Bucket: bucket,
    Key: key,
    Expires: 60,
    Fields: {
      "Content-Type": contentType,
    },
    Conditions: [
      ["content-length-range", 1, BLOG_IMAGE_MAX_SIZE],
      ["eq", "$Content-Type", contentType],
      ["starts-with", "$key", BLOG_IMAGE_PREFIX],
    ],
  });

  return {
    key,
    uploadUrl: presignedPost.url,
    fields: presignedPost.fields,
    maxSize: BLOG_IMAGE_MAX_SIZE,
  };
}
