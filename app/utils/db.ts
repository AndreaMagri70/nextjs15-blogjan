import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// 1. Configura la connessione tramite l'adapter pg
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// 2. Passa l'adapter al costruttore di PrismaClient
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: adapter, // <--- OBBLIGATORIO in Prisma 7 se usi adapter
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;