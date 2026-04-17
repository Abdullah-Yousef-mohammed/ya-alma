import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import { join } from "path";
import { pathToFileURL } from "url";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Initialize the Prisma 7 edge-compatible adapter properly using LibSQL for SQLite
const adapter = new PrismaLibSql({
  url: pathToFileURL(join(process.cwd(), "dev.db")).href,
});

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
