import "server-only";

import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

import { db, admins } from "@/src/db";
import { ADMIN_TOKEN_COOKIE_NAME } from "./cookies";
import { verifyAdminToken } from "./jwt";

export interface AuthenticatedAdmin {
  id: string;
  email: string;
}

export async function getAdminByEmail(email: string) {
  const [admin] = await db
    .select()
    .from(admins)
    .where(eq(admins.email, email.toLowerCase()))
    .limit(1);

  return admin ?? null;
}

export async function getAuthenticatedAdmin(): Promise<AuthenticatedAdmin | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_TOKEN_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    const payload = await verifyAdminToken(token);

    if (!payload) {
      return null;
    }

    const [admin] = await db
      .select({
        id: admins.id,
        email: admins.email,
      })
      .from(admins)
      .where(eq(admins.id, payload.adminId))
      .limit(1);

    return admin ?? null;
  } catch {
    return null;
  }
}
