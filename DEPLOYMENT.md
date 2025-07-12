# 部署文档 (Deployment Guide)

本文档详细介绍了如何在不同环境中部署数字文件柜应用程序。

## 📋 部署前准备

### 系统要求

- **Node.js**: 18.0 或更高版本
- **内存**: 最少 512MB RAM
- **存储**: 至少 1GB 可用空间（根据文件存储需求调整）
- **网络**: 支持HTTP/HTTPS访问

### 支持的操作系统

- ✅ Ubuntu 18.04+
- ✅ CentOS 7+
- ✅ Debian 9+
- ✅ Windows Server 2016+
- ✅ macOS 10.15+

## 🚀 快速部署

### 方法一：使用部署脚本（推荐）

**Linux/macOS:**
```bash
# 克隆项目
git clone https://github.com/your-username/digital-locker.git
cd digital-locker

# 运行部署脚本
chmod +x deploy.sh
./deploy.sh

# 启动应用
npm start
```

**Windows:**
```cmd
# 克隆项目
git clone https://github.com/your-username/digital-locker.git
cd digital-locker

# 运行部署脚本
deploy.bat

# 启动应用
npm start
```

### 方法二：手动部署

```bash
# 1. 克隆项目
git clone https://github.com/your-username/digital-locker.git
cd digital-locker

# 2. 安装依赖
npm install

# 3. 生成Prisma客户端
npx prisma generate

# 4. 初始化数据库
npx prisma db push

# 5. 创建上传目录
mkdir -p uploads

# 6. 构建应用
npm run build

# 7. 启动应用
npm start
```

## 🔧 环境配置

### 环境变量

创建 `.env` 文件并配置以下变量：

```env
# 数据库配置
DATABASE_URL="file:./dev.db"

# 服务器配置
PORT=3000
NODE_ENV=production

# 文件存储配置（可选）
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=104857600  # 100MB，设置为0表示无限制

# 安全配置（可选）
FILE_RETENTION_DAYS=7
```

### 数据库配置

#### SQLite（默认）
```env
DATABASE_URL="file:./dev.db"
```

#### PostgreSQL（生产环境推荐）
```env
DATABASE_URL="postgresql://username:password@localhost:5432/digital_locker"
```

#### MySQL
```env
DATABASE_URL="mysql://username:password@localhost:3306/digital_locker"
```

## 🌐 Web服务器配置

### Nginx 配置

创建 `/etc/nginx/sites-available/digital-locker`：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # 文件上传大小限制
    client_max_body_size 0;  # 无限制

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # 超时设置
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
```

启用配置：
```bash
sudo ln -s /etc/nginx/sites-available/digital-locker /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Apache 配置

创建虚拟主机配置：

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    
    ProxyPreserveHost On
    ProxyRequests Off
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    
    # 文件上传大小限制
    LimitRequestBody 0
</VirtualHost>
```

## 🔒 HTTPS/SSL 配置

### 使用 Let's Encrypt

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取SSL证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo crontab -e
# 添加：0 12 * * * /usr/bin/certbot renew --quiet
```

## 🐳 Docker 部署

### Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# 复制package文件
COPY package*.json ./
RUN npm ci --only=production

# 复制源代码
COPY . .

# 生成Prisma客户端
RUN npx prisma generate

# 构建应用
RUN npm run build

# 创建上传目录
RUN mkdir -p uploads

EXPOSE 3000

CMD ["npm", "start"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  digital-locker:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./uploads:/app/uploads
      - ./prisma/dev.db:/app/prisma/dev.db
    environment:
      - NODE_ENV=production
      - DATABASE_URL=file:./dev.db
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - digital-locker
    restart: unless-stopped
```

部署命令：
```bash
docker-compose up -d
```

## 🔄 进程管理

### 使用 PM2

```bash
# 安装PM2
npm install -g pm2

# 创建PM2配置文件
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'digital-locker',
    script: 'npm',
    args: 'start',
    cwd: '/path/to/digital-locker',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
}
EOF

# 启动应用
pm2 start ecosystem.config.js

# 保存PM2配置
pm2 save

# 设置开机自启
pm2 startup
```

### 使用 systemd

创建 `/etc/systemd/system/digital-locker.service`：

```ini
[Unit]
Description=Digital Locker Application
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/digital-locker
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

启用服务：
```bash
sudo systemctl enable digital-locker
sudo systemctl start digital-locker
sudo systemctl status digital-locker
```

## 📊 监控和日志

### 日志管理

```bash
# 查看应用日志
pm2 logs digital-locker

# 查看systemd日志
sudo journalctl -u digital-locker -f

# 查看Nginx日志
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 性能监控

```bash
# PM2监控
pm2 monit

# 系统资源监控
htop
df -h
free -h
```

## 🔧 维护和更新

### 应用更新

```bash
# 1. 备份数据
cp prisma/dev.db prisma/dev.db.backup
tar -czf uploads_backup.tar.gz uploads/

# 2. 拉取最新代码
git pull origin main

# 3. 安装依赖
npm install

# 4. 重新生成Prisma客户端
npx prisma generate

# 5. 运行数据库迁移（如有）
npx prisma db push

# 6. 重新构建
npm run build

# 7. 重启应用
pm2 restart digital-locker
# 或
sudo systemctl restart digital-locker
```

### 数据库维护

```bash
# 清理过期文件
node -e "
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

async function cleanup() {
  const expired = await prisma.fileShare.findMany({
    where: { expiresAt: { lt: new Date() } }
  });

  for (const file of expired) {
    try {
      fs.unlinkSync(file.filePath);
      await prisma.fileShare.delete({ where: { id: file.id } });
      console.log('Deleted:', file.originalName);
    } catch (error) {
      console.error('Error deleting:', file.originalName, error);
    }
  }

  await prisma.\$disconnect();
}

cleanup();
"
```

## 🚨 故障排除

### 常见问题

**1. Prisma客户端错误**
```bash
# 重新生成客户端
npx prisma generate
```

**2. 文件上传失败**
```bash
# 检查uploads目录权限
chmod 755 uploads/
chown -R www-data:www-data uploads/
```

**3. 端口被占用**
```bash
# 查找占用端口的进程
sudo lsof -i :3000
# 或
sudo netstat -tulpn | grep :3000
```

**4. 内存不足**
```bash
# 增加swap空间
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

### 性能优化

**1. 启用gzip压缩**
```nginx
# 在Nginx配置中添加
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

**2. 静态文件缓存**
```nginx
location /_next/static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

**3. 数据库优化**
```bash
# 定期清理过期数据
# 添加到crontab
0 2 * * * /path/to/cleanup-script.sh
```

## 📞 技术支持

如遇到部署问题，请：

1. 检查系统日志和应用日志
2. 确认所有依赖已正确安装
3. 验证环境变量配置
4. 查看 [故障排除](#故障排除) 部分
5. 提交 [Issue](https://github.com/your-username/digital-locker/issues) 并附上详细错误信息

---

📝 **注意**: 生产环境部署前请务必进行充分测试，并定期备份重要数据。
