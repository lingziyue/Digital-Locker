# 数字文件柜 (Digital Locker)

一个安全、便捷的文件分享系统，采用简约风格的简洁界面设计。用户可以上传文件获取取件码，其他人通过取件码下载文件。

![Digital Locker](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.11.1-2D3748?style=flat-square&logo=prisma)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ 特性

- 🔐 **安全可靠** - 6位数字取件码，文件自动过期
- 📁 **无大小限制** - 支持任意大小文件上传
- 🎨 **简洁风格UI** - 简洁专业的界面设计
- 🌐 **跨平台部署** - 支持Windows、Linux、macOS
- 📱 **响应式设计** - 完美适配桌面和移动设备
- ⚡ **高性能** - 基于Next.js 15和TypeScript构建
<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/e14e1f51-254d-41f7-924e-29312d227107" />
<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/ec0ee096-cb91-47d5-9ca9-933f6e89642b" />

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装部署

1. **克隆项目**
```bash
git clone https://github.com/lingziyue/digital-locker.git
cd digital-locker
```

2. **安装依赖**
```bash
npm install
```

3. **初始化数据库**
```bash
npx prisma generate
npx prisma db push
```

4. **启动开发服务器**
```bash
npm run dev
```

5. **访问应用**
打开浏览器访问 `http://localhost:3000`

## 📖 使用说明

### 寄件流程
1. 点击"寄件"标签
2. 拖拽或点击选择文件
3. 点击"开始上传"
4. 获得6位取件码并分享给他人

### 取件流程
1. 点击"取件"标签
2. 输入6位取件码
3. 点击"查询文件"查看文件信息
4. 点击"下载文件"获取文件

## 🛠️ 技术栈

- **前端框架**: Next.js 15 + React 19
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **数据库**: SQLite + Prisma ORM
- **文件存储**: 本地文件系统
- **UI组件**: 自定义政务风格组件

## 📁 项目结构

```
digital-locker/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── upload/route.ts      # 文件上传API
│   │   │   └── download/route.ts    # 文件下载API
│   │   ├── globals.css              # 全局样式
│   │   ├── layout.tsx               # 应用布局
│   │   └── page.tsx                 # 主页面
│   ├── components/
│   │   ├── Header.tsx               # 头部组件
│   │   ├── SendFile.tsx             # 寄件组件
│   │   ├── RetrieveFile.tsx         # 取件组件
│   │   └── ErrorBoundary.tsx        # 错误边界
│   └── lib/
│       └── prisma.ts                # 数据库客户端
├── prisma/
│   └── schema.prisma                # 数据库模式
├── uploads/                         # 文件存储目录
├── deploy.sh                        # Linux部署脚本
├── deploy.bat                       # Windows部署脚本
└── package.json
```

## 🔧 配置说明

### 环境变量

创建 `.env` 文件：

```env
# 数据库连接
DATABASE_URL="file:./dev.db"

# 可选：自定义端口
PORT=3000
```

### 文件存储

- 默认存储在 `uploads/` 目录
- 文件保留7天后自动过期
- 支持任意大小文件上传

## 🚀 生产部署

详细部署文档请参考 [DEPLOYMENT.md](./DEPLOYMENT.md)

### 快速部署

**Linux/macOS:**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Windows:**
```cmd
deploy.bat
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 开源协议

本项目采用 MIT 协议 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 全栈框架
- [Prisma](https://prisma.io/) - 现代数据库工具包
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架

---

⭐ 如果这个项目对您有帮助，请给个 Star 支持一下！
