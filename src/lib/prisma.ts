// 尝试从不同路径导入Prisma客户端以支持跨平台部署
let PrismaClient: any;

try {
  // 首先尝试从生成的路径导入
  PrismaClient = require('@/generated/prisma').PrismaClient;
} catch (error) {
  try {
    // 如果失败，尝试从标准路径导入
    PrismaClient = require('@prisma/client').PrismaClient;
  } catch (fallbackError) {
    console.error('无法导入Prisma客户端:', fallbackError);
    throw new Error('Prisma客户端导入失败');
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
