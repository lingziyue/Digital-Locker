# 更新日志 (Changelog)

本文档记录了数字文件柜项目的所有重要更改。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [Unreleased]

### 计划中的功能
- [ ] 文件预览功能
- [ ] 批量文件上传
- [ ] 用户认证系统
- [ ] 文件分类管理
- [ ] API接口文档

## [1.0.0] - 2025-01-11

### 新增 (Added)
- ✨ 基础文件上传和下载功能
- 🔐 6位数字取件码系统
- 🎨 政务风格的用户界面
- 📱 响应式设计支持
- 🌐 跨域访问支持
- 🔄 跨平台部署支持
- 📁 无文件大小限制
- ⏰ 文件自动过期机制（7天）
- 🛡️ 错误边界和异常处理
- 📊 文件信息查询功能

### 技术特性 (Technical)
- ⚡ Next.js 15 + React 19 + TypeScript
- 🎨 Tailwind CSS 样式框架
- 🗄️ SQLite + Prisma ORM
- 📦 自动化部署脚本
- 🐳 Docker 支持
- 🔧 PM2 进程管理配置
- 🌐 Nginx 反向代理配置
- 🔒 HTTPS/SSL 支持

### 安全性 (Security)
- 🔐 安全的文件存储
- 🎲 随机取件码生成
- ⏱️ 文件过期自动清理
- 🚫 恶意文件上传防护
- 🔍 文件类型验证

### 文档 (Documentation)
- 📖 完整的README文档
- 🚀 详细的部署指南
- 🤝 贡献者指南
- 📄 MIT开源协议
- 📝 更新日志

## [0.1.0] - 2025-01-11

### 新增 (Added)
- 🎯 项目初始化
- 🏗️ 基础架构搭建
- 🎨 UI组件开发
- 🔧 开发环境配置

---

## 版本说明

### 版本号格式
- **主版本号 (MAJOR)**: 不兼容的API更改
- **次版本号 (MINOR)**: 向后兼容的功能添加
- **修订号 (PATCH)**: 向后兼容的问题修正

### 更改类型
- **新增 (Added)**: 新功能
- **更改 (Changed)**: 现有功能的更改
- **弃用 (Deprecated)**: 即将移除的功能
- **移除 (Removed)**: 已移除的功能
- **修复 (Fixed)**: 问题修复
- **安全性 (Security)**: 安全相关的更改

### 图标说明
- ✨ 新功能
- 🔧 改进
- 🐛 修复
- 🔐 安全
- 📖 文档
- 🎨 UI/样式
- ⚡ 性能
- 🌐 国际化
- 📱 移动端
- 🔄 重构
