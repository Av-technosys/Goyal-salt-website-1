import type { Metadata } from "next";
import { redirect } from "next/navigation";

import AdminBlogsClient from "./AdminBlogsClient";
import { getAuthenticatedAdmin } from "@/src/lib/auth/admin-auth";
import { listBlogs } from "@/src/lib/blogs/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog Admin | Goyal Salt",
};

export default async function AdminPage() {
  const admin = await getAuthenticatedAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  const initialBlogs = await listBlogs({
    page: 1,
    limit: 10,
    search: "",
    status: "all",
  });

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff_0%,#f8fafc_42%,#f3f4f6_100%)] py-6 sm:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdminBlogsClient adminEmail={admin.email} initialBlogs={initialBlogs} />
      </div>
    </main>
  );
}
