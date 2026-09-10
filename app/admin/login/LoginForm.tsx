"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Invalid email or password");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Unable to login");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      ) : null}

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-gray-700">Email</span>
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          className="h-11 bg-white focus-visible:border-red-300 focus-visible:ring-red-100"
          required
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-gray-700">Password</span>
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          className="h-11 bg-white focus-visible:border-red-300 focus-visible:ring-red-100"
          required
        />
      </label>

      <Button
        type="submit"
        disabled={isLoading}
        className="h-11 w-full bg-red-600 text-white shadow-sm hover:bg-red-700"
      >
        <LogIn className="size-4" />
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
