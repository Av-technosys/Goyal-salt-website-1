import { BLOG_IMAGE_PREFIX } from "./image-upload";

const DEFAULT_CLOUDFRONT_URL = "https://d2co0ksrpuk490.cloudfront.net";

export function getCloudFrontUrl() {
  const value =
    process.env.NEXT_PUBLIC_CLOUDFRONT_URL ??
    process.env.CLOUDFRONT_URL ??
    DEFAULT_CLOUDFRONT_URL;

  const normalizedValue = value.startsWith("http") ? value : `https://${value}`;

  return normalizedValue.replace(/\/+$/, "");
}

export function getImageUrl(key: string | null | undefined) {
  if (!key) return null;

  const normalizedKey = key.replace(/^\/+/, "");

  if (!normalizedKey.startsWith(BLOG_IMAGE_PREFIX)) {
    return null;
  }

  return `${getCloudFrontUrl()}/${normalizedKey}`;
}
