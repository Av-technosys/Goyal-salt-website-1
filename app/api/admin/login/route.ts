import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z, ZodError } from "zod";

import { getAdminByEmail } from "@/src/lib/auth/admin-auth";
import {
  ADMIN_TOKEN_COOKIE_NAME,
  getAdminTokenCookieOptions,
} from "@/src/lib/auth/cookies";
import { createAdminToken } from "@/src/lib/auth/jwt";

const loginSchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string().min(1).max(200),
});

const INVALID_CREDENTIALS = "Invalid email or password";
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 10;

type LoginAttempt = {
  count: number;
  resetAt: number;
};

const globalForLoginRateLimit = globalThis as unknown as {
  adminLoginAttempts?: Map<string, LoginAttempt>;
};

const loginAttempts =
  globalForLoginRateLimit.adminLoginAttempts ?? new Map<string, LoginAttempt>();

if (process.env.NODE_ENV !== "production") {
  globalForLoginRateLimit.adminLoginAttempts = loginAttempts;
}

function getRateLimitKey(request: NextRequest, email: string) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  return `${ip}:${email}`;
}

function isRateLimited(key: string) {
  const now = Date.now();
  const attempt = loginAttempts.get(key);

  if (!attempt || attempt.resetAt <= now) {
    loginAttempts.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  attempt.count += 1;
  return attempt.count > RATE_LIMIT_MAX_ATTEMPTS;
}

function clearRateLimit(key: string) {
  loginAttempts.delete(key);
}

export async function POST(request: NextRequest) {
  try {
    const body = loginSchema.parse(await request.json());
    const rateLimitKey = getRateLimitKey(request, body.email);

    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { error: "Too many login attempts. Please try again later." },
        { status: 429 },
      );
    }

    const admin = await getAdminByEmail(body.email);
    const isValidPassword = admin
      ? await bcrypt.compare(body.password, admin.password)
      : false;

    if (!admin || !isValidPassword) {
      return NextResponse.json({ error: INVALID_CREDENTIALS }, { status: 401 });
    }

    const token = await createAdminToken({
      adminId: admin.id,
      email: admin.email,
    });

    clearRateLimit(rateLimitKey);

    const response = NextResponse.json({ success: true });
    response.cookies.set(
      ADMIN_TOKEN_COOKIE_NAME,
      token,
      getAdminTokenCookieOptions(),
    );

    return response;
  } catch (error) {
    if (error instanceof ZodError || error instanceof SyntaxError) {
      return NextResponse.json({ error: INVALID_CREDENTIALS }, { status: 401 });
    }

    if (
      error instanceof Error &&
      error.message === "JWT_SECRET is not configured"
    ) {
      return NextResponse.json(
        { error: "Authentication is not configured" },
        { status: 500 },
      );
    }

    return NextResponse.json({ error: "Unable to login" }, { status: 500 });
  }
}
