import { PrismaClient, Prisma } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const clientOptions: Prisma.PrismaClientOptions = {
  datasourceUrl: process.env.DATABASE_URL as string,
  log: ['query', 'info', 'warn', 'error'],
}

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient(clientOptions as any)

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma