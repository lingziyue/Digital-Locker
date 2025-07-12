import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client'],

  // 配置允许的开发源 - 修复跨域警告
  allowedDevOrigins: [
    'storage-locker.fanwulink.cn',
    'localhost:3000',
    '127.0.0.1:3000',
  ],

  // 添加跨域配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, X-Requested-With',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ];
  },

  // 开发配置
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
