"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Edit,
  LogOut,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PaginatedBlogs } from "@/src/lib/blogs/queries";

interface AdminBlogsClientProps {
  adminEmail: string;
  initialBlogs: PaginatedBlogs;
}

function formatDate(value: Date | string | null) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function getStatusClass(status: string) {
  return status === "published"
    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
    : "border-amber-200 bg-amber-50 text-amber-700";
}

export default function AdminBlogsClient({
  adminEmail,
  initialBlogs,
}: AdminBlogsClientProps) {
  const router = useRouter();
  const [blogs, setBlogs] = useState(initialBlogs);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function loadBlogs(nextPage = page) {
    setIsLoading(true);
    setError("");

    try {
      const params = new URLSearchParams({
        page: String(nextPage),
        limit: String(blogs.pagination.limit),
        search,
        status,
      });
      const response = await fetch(`/api/blogs?${params.toString()}`);
      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Unable to load blogs");
        return;
      }

      setBlogs(result);
      setPage(nextPage);
    } catch {
      setError("Unable to load blogs");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await loadBlogs(1);
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm("Delete this blog?");
    if (!confirmed) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Unable to delete blog");
        return;
      }

      await loadBlogs(page);
    } catch {
      setError("Unable to delete blog");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    setIsLoading(true);
    setError("");

    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      router.replace("/admin/login");
      router.refresh();
    }
  }

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm shadow-gray-200/60">
        <div className="h-1 bg-red-600" />
        <div className="px-4 py-4 sm:px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
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
            <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
              Blogs
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {blogs.pagination.total} total - {adminEmail}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button type="button" variant="outline" onClick={handleLogout}>
              <LogOut className="size-4" />
              Logout
            </Button>
            <Button asChild className="bg-red-600 text-white shadow-sm hover:bg-red-700">
              <Link href="/admin/blogs/new">
                <Plus className="size-4" />
                Add Blog
              </Link>
            </Button>
          </div>
        </div>
        </div>
      </div>

      <form
        onSubmit={handleSearch}
        className="grid gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm shadow-gray-200/60 sm:p-4 md:grid-cols-[minmax(0,1fr)_180px_auto]"
      >
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search title, excerpt, content"
            className="h-10 bg-white pl-9"
          />
        </div>
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className="h-10 rounded-md border border-input bg-white px-3 text-sm shadow-xs outline-none transition focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <option value="all">All statuses</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <Button type="submit" variant="outline" disabled={isLoading}>
          Apply
        </Button>
      </form>

      {error ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      ) : null}

      <Card className="gap-0 overflow-hidden rounded-lg border-gray-200 shadow-sm shadow-gray-200/70">
        <CardHeader className="border-b border-gray-100 px-4 py-4 sm:px-5">
          <div>
            <CardTitle className="text-base font-bold text-gray-950">
              Blog Library
            </CardTitle>
            <CardDescription>
              Review, update, and publish blog content.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="px-0">
          <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-gray-50/80 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-5 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Published</th>
                <th className="px-4 py-3 font-semibold">Updated</th>
                <th className="px-5 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {blogs.data.length > 0 ? (
                blogs.data.map((blog) => (
                  <tr
                    key={blog.id}
                    className="align-top transition-colors hover:bg-gray-50/70"
                  >
                    <td className="px-5 py-4">
                      <div className="max-w-xl font-semibold text-gray-950">
                        {blog.title}
                      </div>
                      <div className="mt-1 max-w-xl truncate text-xs text-gray-500">
                        {blog.slug}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={cn(
                          "inline-flex rounded-md border px-2.5 py-1 text-xs font-semibold capitalize",
                          getStatusClass(blog.status),
                        )}
                      >
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-600">
                      {formatDate(blog.publishedAt)}
                    </td>
                    <td className="px-4 py-4 text-gray-600">
                      {formatDate(blog.updatedAt)}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="icon-sm" asChild>
                          <Link
                            href={`/admin/blogs/${blog.id}/edit`}
                            aria-label={`Edit ${blog.title}`}
                          >
                            <Edit className="size-4" />
                          </Link>
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon-sm"
                          onClick={() => void handleDelete(blog.id)}
                          disabled={isLoading}
                          aria-label={`Delete ${blog.title}`}
                        >
                          <Trash2 className="size-4 text-red-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-14 text-center">
                    <div className="mx-auto flex max-w-sm flex-col items-center">
                      <div className="mb-3 flex size-11 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-500">
                        <Search className="size-5" />
                      </div>
                      <p className="font-semibold text-gray-900">No blogs found</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Try adjusting the search or status filter.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

          <div className="divide-y divide-gray-100 md:hidden">
            {blogs.data.length > 0 ? (
              blogs.data.map((blog) => (
                <article key={blog.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="font-semibold leading-6 text-gray-950">
                        {blog.title}
                      </h2>
                      <p className="mt-1 truncate text-xs text-gray-500">
                        {blog.slug}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-md border px-2.5 py-1 text-xs font-semibold capitalize",
                        getStatusClass(blog.status),
                      )}
                    >
                      {blog.status}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-3.5" />
                      <span>Published {formatDate(blog.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="size-3.5" />
                      <span>Updated {formatDate(blog.updatedAt)}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/blogs/${blog.id}/edit`}>
                        <Edit className="size-4" />
                        Edit
                      </Link>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => void handleDelete(blog.id)}
                      disabled={isLoading}
                    >
                      <Trash2 className="size-4 text-red-600" />
                      Delete
                    </Button>
                  </div>
                </article>
              ))
            ) : (
              <div className="px-4 py-14 text-center">
                <div className="mx-auto flex max-w-sm flex-col items-center">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-500">
                    <Search className="size-5" />
                  </div>
                  <p className="font-semibold text-gray-900">No blogs found</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting the search or status filter.
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm shadow-gray-200/60 sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <Button
          type="button"
          variant="outline"
          disabled={isLoading || page <= 1}
          onClick={() => void loadBlogs(page - 1)}
          className="w-full sm:w-auto"
        >
          Previous
        </Button>
        <span className="text-center text-sm font-medium text-gray-600">
          Page {blogs.pagination.page} of {blogs.pagination.totalPages || 1}
        </span>
        <Button
          type="button"
          variant="outline"
          disabled={isLoading || page >= blogs.pagination.totalPages}
          onClick={() => void loadBlogs(page + 1)}
          className="w-full sm:w-auto"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
