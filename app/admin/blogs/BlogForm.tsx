"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ImagePlus, Save } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RichTextEditor from "./RichTextEditor";
import type { Blog } from "@/src/db/schema";
import { generateSlug } from "@/src/lib/blogs/slug";
import {
  createBlogSchema,
  updateBlogSchema,
  type CreateBlogInput,
} from "@/src/lib/blogs/validation";
import {
  BLOG_IMAGE_MAX_SIZE,
  isBlogImageContentType,
} from "@/src/lib/blogs/image-upload";
import { getImageUrl } from "@/src/lib/blogs/images";

interface BlogFormProps {
  blog?: Blog;
  mode: "create" | "edit";
}

interface FormState {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageKey: string;
  seoTitle: string;
  seoDescription: string;
  status: "draft" | "published";
  publishedAt: string;
}

interface UploadResponse {
  data: {
    uploadUrl: string;
    fields: Record<string, string>;
    key: string;
  };
}

function toDateTimeLocal(value: Date | string | null) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return date.toISOString().slice(0, 16);
}

function toPayload(state: FormState): CreateBlogInput {
  return {
    title: state.title,
    slug: state.slug,
    excerpt: state.excerpt,
    content: state.content,
    coverImageKey: state.coverImageKey || null,
    seoTitle: state.seoTitle || null,
    seoDescription: state.seoDescription || null,
    status: state.status,
    publishedAt: state.publishedAt
      ? new Date(state.publishedAt).toISOString()
      : null,
  };
}

export default function BlogForm({ blog, mode }: BlogFormProps) {
  const router = useRouter();
  const [isSlugDirty, setIsSlugDirty] = useState(Boolean(blog?.slug));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(
    getImageUrl(blog?.coverImageKey) ?? "",
  );
  const [error, setError] = useState("");
  const [state, setState] = useState<FormState>({
    title: blog?.title ?? "",
    slug: blog?.slug ?? "",
    excerpt: blog?.excerpt ?? "",
    content: blog?.content ?? "",
    coverImageKey: blog?.coverImageKey ?? "",
    seoTitle: blog?.seoTitle ?? "",
    seoDescription: blog?.seoDescription ?? "",
    status: blog?.status ?? "draft",
    publishedAt: toDateTimeLocal(blog?.publishedAt ?? null),
  });

  useEffect(() => {
    if (!selectedImage) return;

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((current) => {
      if (key === "title" && !isSlugDirty) {
        return {
          ...current,
          title: value,
          slug: generateSlug(String(value)),
        };
      }

      return { ...current, [key]: value };
    });
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setError("");
    setUploadProgress(0);

    if (!file) {
      setSelectedImage(null);
      setPreviewUrl(getImageUrl(state.coverImageKey) ?? "");
      return;
    }

    if (!isBlogImageContentType(file.type)) {
      setError("Only JPG, PNG, and WebP images are allowed");
      event.target.value = "";
      return;
    }

    if (file.size > BLOG_IMAGE_MAX_SIZE) {
      setError("Image must be 5MB or smaller");
      event.target.value = "";
      return;
    }

    setSelectedImage(file);
  }

  async function uploadSelectedImage() {
    if (!selectedImage) {
      return state.coverImageKey || null;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const presignResponse = await fetch("/api/blogs/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: selectedImage.name,
          contentType: selectedImage.type,
          size: selectedImage.size,
        }),
      });
      const uploadDetails = (await presignResponse.json()) as Partial<UploadResponse> & {
        error?: string;
      };

      if (!presignResponse.ok || !uploadDetails.data) {
        throw new Error(uploadDetails.error ?? "Unable to prepare upload");
      }

      const uploadData = uploadDetails.data;

      await new Promise<void>((resolve, reject) => {
        const formData = new FormData();
        Object.entries(uploadData.fields).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append("file", selectedImage);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", uploadData.uploadUrl);
        xhr.upload.onprogress = (event) => {
          if (!event.lengthComputable) return;
          setUploadProgress(Math.round((event.loaded / event.total) * 100));
        };
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve();
            return;
          }

          const s3Code = xhr.responseText.match(/<Code>([^<]+)/)?.[1];
          const s3Message = xhr.responseText.match(/<Message>([^<]+)/)?.[1];
          reject(
            new Error(
              s3Code && s3Message
                ? `Image upload failed: ${s3Code} - ${s3Message}`
                : `Image upload failed with status ${xhr.status}`,
            ),
          );
        };
        xhr.onerror = () =>
          reject(
            new Error(
              "Image upload failed. Check S3 CORS and AWS credentials.",
            ),
          );
        xhr.send(formData);
      });

      updateField("coverImageKey", uploadData.key);
      setSelectedImage(null);
      setPreviewUrl(getImageUrl(uploadData.key) ?? "");
      setUploadProgress(100);

      return uploadData.key;
    } finally {
      setIsUploading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    setIsSubmitting(true);

    try {
      const coverImageKey = await uploadSelectedImage();
      const payload = toPayload({ ...state, coverImageKey: coverImageKey ?? "" });
      const schema = mode === "create" ? createBlogSchema : updateBlogSchema;
      const parsedPayload = schema.safeParse(payload);

      if (!parsedPayload.success) {
        setError(
          parsedPayload.error.issues[0]?.message ?? "Please check the form",
        );
        return;
      }

      const response = await fetch(
        mode === "create" ? "/api/blogs" : `/api/blogs/${blog?.id}`,
        {
          method: mode === "create" ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsedPayload.data),
        },
      );
      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Unable to save blog");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Unable to save blog",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white/90 p-3 shadow-sm shadow-gray-200/60 sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-red-600"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>
        <Button
          type="submit"
          disabled={isSubmitting || isUploading}
          className="w-full bg-red-600 text-white shadow-sm hover:bg-red-700 sm:w-auto"
        >
          <Save className="size-4" />
          {isUploading ? "Uploading..." : isSubmitting ? "Saving..." : "Save"}
        </Button>
      </div>

      {error ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-5">
          <Card className="gap-0 rounded-lg border-gray-200 shadow-sm shadow-gray-200/70">
            <CardHeader className="border-b border-gray-100 px-4 py-4 sm:px-5">
              <CardTitle className="text-base font-bold text-gray-950">
                Article Content
              </CardTitle>
              <CardDescription>
                Main title, URL slug, summary, and body copy.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-4 py-5 sm:px-5">
              <label className="block space-y-2">
                <span className="text-sm font-semibold text-gray-700">
                  Title
                </span>
                <Input
                  value={state.title}
                  onChange={(event) => updateField("title", event.target.value)}
                  className="h-10 bg-white"
                  required
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-semibold text-gray-700">Slug</span>
                <Input
                  value={state.slug}
                  onChange={(event) => {
                    setIsSlugDirty(true);
                    updateField("slug", generateSlug(event.target.value));
                  }}
                  className="h-10 bg-white font-mono text-sm"
                  required
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-semibold text-gray-700">
                  Excerpt
                </span>
                <Textarea
                  value={state.excerpt}
                  onChange={(event) => updateField("excerpt", event.target.value)}
                  rows={4}
                  className="min-h-28 resize-y bg-white leading-6"
                  required
                />
              </label>

              <div className="block space-y-2">
                <span className="text-sm font-semibold text-gray-700">
                  Content
                </span>
                <RichTextEditor
                  value={state.content}
                  onChange={(html) => updateField("content", html)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <Card className="gap-0 rounded-lg border-gray-200 shadow-sm shadow-gray-200/70">
            <CardHeader className="border-b border-gray-100 px-4 py-4">
              <CardTitle className="text-base font-bold text-gray-950">
                Publishing
              </CardTitle>
              <CardDescription>Status and publish date.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-4 py-5">
              <label className="block space-y-2">
                <span className="text-sm font-semibold text-gray-700">
                  Status
                </span>
                <select
                  value={state.status}
                  onChange={(event) =>
                    updateField(
                      "status",
                      event.target.value as FormState["status"],
                    )
                  }
                  className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm shadow-xs outline-none transition focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-semibold text-gray-700">
                  Published At
                </span>
                <Input
                  type="datetime-local"
                  value={state.publishedAt}
                  onChange={(event) =>
                    updateField("publishedAt", event.target.value)
                  }
                  className="h-10 bg-white"
                />
              </label>
            </CardContent>
          </Card>

          <Card className="gap-0 rounded-lg border-gray-200 shadow-sm shadow-gray-200/70">
            <CardHeader className="border-b border-gray-100 px-4 py-4">
              <CardTitle className="text-base font-bold text-gray-950">
                Cover Image
              </CardTitle>
              <CardDescription>JPG, PNG, or WebP up to 5MB.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-4 py-5">
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-7 text-center transition hover:border-red-300 hover:bg-red-50/40">
                <ImagePlus className="mb-2 size-6 text-red-600" />
                <span className="text-sm font-semibold text-gray-800">
                  Select image
                </span>
                <span className="mt-1 text-xs text-gray-500">
                  Upload a blog cover image
                </span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageChange}
                  className="sr-only"
                />
              </label>

              {previewUrl ? (
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xs">
                  <img
                    src={previewUrl}
                    alt="Blog cover preview"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/9] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-sm font-medium text-gray-400">
                  No image selected
                </div>
              )}

              {isUploading ? (
                <div className="space-y-2">
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full bg-red-600 transition-all"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-500">
                    Uploading {uploadProgress}%
                  </p>
                </div>
              ) : null}
            </CardContent>
          </Card>

          <Card className="gap-0 rounded-lg border-gray-200 shadow-sm shadow-gray-200/70">
            <CardHeader className="border-b border-gray-100 px-4 py-4">
              <CardTitle className="text-base font-bold text-gray-950">
                SEO
              </CardTitle>
              <CardDescription>Search title and description.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-4 py-5">
              <label className="block space-y-2">
                <span className="text-sm font-semibold text-gray-700">
                  SEO Title
                </span>
                <Input
                  value={state.seoTitle}
                  onChange={(event) => updateField("seoTitle", event.target.value)}
                  className="h-10 bg-white"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-semibold text-gray-700">
                  SEO Description
                </span>
                <Textarea
                  value={state.seoDescription}
                  onChange={(event) =>
                    updateField("seoDescription", event.target.value)
                  }
                  rows={4}
                  className="min-h-28 resize-y bg-white leading-6"
                />
              </label>
            </CardContent>
          </Card>
        </aside>
      </div>
    </form>
  );
}
