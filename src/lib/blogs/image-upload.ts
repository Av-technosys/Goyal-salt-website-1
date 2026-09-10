export const BLOG_IMAGE_PREFIX = "goyalsalt/blogs/";
export const BLOG_IMAGE_MAX_SIZE = 5 * 1024 * 1024;

export const blogImageContentTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

export type BlogImageContentType = (typeof blogImageContentTypes)[number];

export function isBlogImageContentType(
  contentType: string,
): contentType is BlogImageContentType {
  return blogImageContentTypes.includes(contentType as BlogImageContentType);
}

export function getBlogImageExtension(contentType: BlogImageContentType) {
  if (contentType === "image/png") return "png";
  if (contentType === "image/webp") return "webp";
  return "jpg";
}
