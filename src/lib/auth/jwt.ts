import "server-only";

import { jwtVerify, SignJWT, type JWTPayload } from "jose";

import { ADMIN_TOKEN_MAX_AGE_SECONDS } from "./cookies";

export interface AdminTokenPayload extends JWTPayload {
  adminId: string;
  email: string;
}

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }

  return new TextEncoder().encode(secret);
};

export async function createAdminToken(payload: AdminTokenPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${ADMIN_TOKEN_MAX_AGE_SECONDS}s`)
    .sign(getJwtSecret());
}

export async function verifyAdminToken(token: string) {
  const { payload } = await jwtVerify(token, getJwtSecret(), {
    algorithms: ["HS256"],
  });

  if (
    typeof payload.adminId !== "string" ||
    typeof payload.email !== "string"
  ) {
    return null;
  }

  return {
    adminId: payload.adminId,
    email: payload.email,
  };
}
