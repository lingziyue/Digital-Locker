#!/bin/bash

# 部署脚本 - 确保Prisma客户端在所有平台上正确生成

echo "开始部署数字文件柜应用..."

# 安装依赖
echo "安装依赖..."
npm install

# 生成Prisma客户端（支持多平台）
echo "生成Prisma客户端..."
npx prisma generate

# 推送数据库架构
echo "推送数据库架构..."
npx prisma db push

# 创建上传目录
echo "创建上传目录..."
mkdir -p uploads

# 构建应用
echo "构建应用..."
npm run build

echo "部署完成！"
echo "运行 'npm start' 启动应用"
