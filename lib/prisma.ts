import { PrismaClient } from '@prisma/client'

// Tipagem rigorosa para o Singleton do Prisma
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL as string,
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma