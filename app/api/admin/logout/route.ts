import { NextResponse } from "next/server";

import {
  ADMIN_TOKEN_COOKIE_NAME,
  getExpiredAdminTokenCookieOptions,
} from "@/src/lib/auth/cookies";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(
    ADMIN_TOKEN_COOKIE_NAME,
    "",
    getExpiredAdminTokenCookieOptions(),
  );

  return response;
}
