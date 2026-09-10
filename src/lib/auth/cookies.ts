export const ADMIN_TOKEN_COOKIE_NAME = "admin_token";
export const ADMIN_TOKEN_MAX_AGE_SECONDS = 8 * 60 * 60;

export function getAdminTokenCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: ADMIN_TOKEN_MAX_AGE_SECONDS,
  };
}

export function getExpiredAdminTokenCookieOptions() {
  return {
    ...getAdminTokenCookieOptions(),
    maxAge: 0,
  };
}
