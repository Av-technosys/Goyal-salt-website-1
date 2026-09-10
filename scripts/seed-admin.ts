import "dotenv/config";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { admins } from "@/src/db/schema";

const connectionString = process.env.DATABASE_URL;
const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const adminPassword = process.env.ADMIN_PASSWORD;

async function main() {
  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!adminEmail || !adminPassword) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be configured");
  }

  const client = postgres(connectionString, {
    max: 1,
    prepare: false,
  });
  const db = drizzle(client);

  try {
    const [existingAdmin] = await db
      .select({ id: admins.id })
      .from(admins)
      .where(eq(admins.email, adminEmail))
      .limit(1);

    if (existingAdmin) {
      console.log("Admin already exists. No changes made.");
      return;
    }

    const passwordHash = await bcrypt.hash(adminPassword, 12);

    await db.insert(admins).values({
      email: adminEmail,
      password: passwordHash,
      updatedAt: new Date(),
    });

    console.log("Admin user seeded successfully.");
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : "Unable to seed admin");
  process.exit(1);
});
