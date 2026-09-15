import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

import LoginForm from "./LoginForm";
import { getAuthenticatedAdmin } from "@/src/lib/auth/admin-auth";

export const metadata: Metadata = {
  title: "Admin Login | Goyal Salt",
};

export default async function AdminLoginPage() {
  const admin = await getAuthenticatedAdmin();

  if (admin) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center bg-[linear-gradient(180deg,#fff_0%,#fff7f7_46%,#f3f4f6_100%)] py-10">
      <div className="mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm shadow-gray-200/70">
          <div className="h-1.5 bg-red-600" />
          <div className="border-b border-gray-100 bg-white px-6 py-6">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-lg border border-red-100 bg-white p-2 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Goyal Salt"
                  width={48}
                  height={36}
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
            <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-950">
              Admin Login
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Sign in to manage Goyal Salt blogs.
            </p>
          </div>
          <div className="px-6 py-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
