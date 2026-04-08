import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof makePrisma> | undefined
}

function makePrisma() {
  return new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL as string,
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
  }).$extends(withAccelerate())
}

export const prisma = globalForPrisma.prisma ?? makePrisma()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma