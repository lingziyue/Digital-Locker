@echo off
echo 开始部署数字文件柜应用...

echo 安装依赖...
npm install

echo 生成Prisma客户端...
npx prisma generate

echo 推送数据库架构...
npx prisma db push

echo 创建上传目录...
if not exist "uploads" mkdir uploads

echo 构建应用...
npm run build

echo 部署完成！
echo 运行 'npm start' 启动应用
pause
