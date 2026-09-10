import { NextRequest, NextResponse } from "next/server";

import {
  ADMIN_TOKEN_COOKIE_NAME,
  getExpiredAdminTokenCookieOptions,
} from "@/src/lib/auth/cookies";
import { verifyAdminToken } from "@/src/lib/auth/jwt";

function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL("/admin/login", request.url);
  const response = NextResponse.redirect(loginUrl);
  response.cookies.set(
    ADMIN_TOKEN_COOKIE_NAME,
    "",
    getExpiredAdminTokenCookieOptions(),
  );
  return response;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(ADMIN_TOKEN_COOKIE_NAME)?.value;
  const isLoginPage = pathname === "/admin/login";

  if (!token) {
    return isLoginPage ? NextResponse.next() : redirectToLogin(request);
  }

  try {
    const payload = await verifyAdminToken(token);

    if (!payload) {
      return isLoginPage ? NextResponse.next() : redirectToLogin(request);
    }

    if (isLoginPage) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.next();
  } catch {
    return isLoginPage ? NextResponse.next() : redirectToLogin(request);
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
