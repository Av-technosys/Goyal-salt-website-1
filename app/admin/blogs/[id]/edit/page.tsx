import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

import BlogForm from "../../BlogForm";
import { getAuthenticatedAdmin } from "@/src/lib/auth/admin-auth";
import { getBlogById } from "@/src/lib/blogs/queries";
import { blogIdSchema } from "@/src/lib/blogs/validation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Edit Blog | Goyal Salt Admin",
};

export default async function EditBlogPage({ params }: PageProps) {
  const admin = await getAuthenticatedAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  const { id } = await params;
  const validatedId = blogIdSchema.safeParse(id);

  if (!validatedId.success) {
    notFound();
  }

  const blog = await getBlogById(validatedId.data);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff_0%,#f8fafc_42%,#f3f4f6_100%)] py-6 sm:py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm shadow-gray-200/60">
          <div className="h-1 bg-red-600" />
          <div className="px-4 py-4 sm:px-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-lg border border-red-100 bg-white p-1.5 shadow-sm">
              <Image
                src="/logo.png"
                alt="Goyal Salt"
                width={40}
                height={30}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-red-700">
                Goyal Salt
              </p>
              <p className="text-xl font-bold leading-tight text-gray-950">
                Admin Panel
              </p>
            </div>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
            Edit Blog
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Update article content, publishing details, and SEO metadata.
          </p>
          </div>
        </div>
        <BlogForm blog={blog} mode="edit" />
      </div>
    </main>
  );
}
