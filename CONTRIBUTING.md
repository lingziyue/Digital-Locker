# 贡献指南 (Contributing Guide)

感谢您对数字文件柜项目的关注！我们欢迎所有形式的贡献。

## 🤝 如何贡献

### 报告问题 (Bug Reports)

如果您发现了bug，请：

1. 检查 [Issues](https://github.com/your-username/digital-locker/issues) 确认问题未被报告
2. 使用 [Bug Report 模板](https://github.com/your-username/digital-locker/issues/new?template=bug_report.md) 创建新issue
3. 提供详细的重现步骤和环境信息

### 功能请求 (Feature Requests)

如果您有新功能建议：

1. 检查现有的 [Issues](https://github.com/your-username/digital-locker/issues) 和 [Discussions](https://github.com/your-username/digital-locker/discussions)
2. 使用 [Feature Request 模板](https://github.com/your-username/digital-locker/issues/new?template=feature_request.md) 创建issue
3. 详细描述功能需求和使用场景

### 代码贡献 (Code Contributions)

1. **Fork 项目**
   ```bash
   git clone https://github.com/your-username/digital-locker.git
   cd digital-locker
   ```

2. **创建功能分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **设置开发环境**
   ```bash
   npm install
   npx prisma generate
   npx prisma db push
   npm run dev
   ```

4. **进行开发**
   - 遵循现有的代码风格
   - 添加必要的测试
   - 更新相关文档

5. **提交更改**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **推送分支**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **创建 Pull Request**
   - 使用清晰的标题和描述
   - 关联相关的 Issues
   - 确保所有检查通过

## 📝 开发规范

### 代码风格

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 配置的代码规范
- 使用 Prettier 进行代码格式化
- 组件和函数使用描述性命名

### 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

类型 (type)：
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

示例：
```
feat(upload): add drag and drop file upload
fix(api): handle large file upload timeout
docs(readme): update installation instructions
```

### 分支命名规范

- `feature/feature-name` - 新功能开发
- `fix/bug-description` - bug修复
- `docs/documentation-update` - 文档更新
- `refactor/code-improvement` - 代码重构

## 🧪 测试

### 运行测试

```bash
# 运行所有测试
npm test

# 运行特定测试
npm test -- --testNamePattern="upload"

# 生成测试覆盖率报告
npm run test:coverage
```

### 编写测试

- 为新功能添加单元测试
- 为API端点添加集成测试
- 确保测试覆盖率不低于80%

## 📚 文档

### 更新文档

如果您的更改影响到：
- API接口 - 更新API文档
- 配置选项 - 更新README和部署文档
- 新功能 - 添加使用说明
- 部署流程 - 更新DEPLOYMENT.md

### 文档风格

- 使用清晰简洁的语言
- 提供代码示例
- 包含必要的截图或图表
- 支持中英文双语

## 🔍 代码审查

### Pull Request 要求

- [ ] 代码遵循项目规范
- [ ] 包含必要的测试
- [ ] 文档已更新
- [ ] 所有检查通过
- [ ] 无冲突需要解决

### 审查流程

1. 自动化检查（CI/CD）
2. 代码审查（至少一位维护者）
3. 测试验证
4. 合并到主分支

## 🚀 发布流程

### 版本号规范

遵循 [Semantic Versioning](https://semver.org/)：
- `MAJOR.MINOR.PATCH`
- MAJOR: 不兼容的API更改
- MINOR: 向后兼容的功能添加
- PATCH: 向后兼容的bug修复

### 发布步骤

1. 更新版本号
2. 更新CHANGELOG.md
3. 创建发布标签
4. 发布到GitHub Releases

## 💬 社区

### 交流渠道

- [GitHub Discussions](https://github.com/your-username/digital-locker/discussions) - 一般讨论
- [GitHub Issues](https://github.com/your-username/digital-locker/issues) - bug报告和功能请求
- Email: your-email@example.com - 私人联系

### 行为准则

我们致力于为每个人提供友好、安全和欢迎的环境。请：

- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 专注于对社区最有利的事情
- 对其他社区成员表示同理心

## 🙏 致谢

感谢所有为项目做出贡献的开发者！

您的贡献将被记录在：
- [Contributors](https://github.com/your-username/digital-locker/graphs/contributors) 页面
- 项目的 CHANGELOG.md 文件
- 发布说明中

---

再次感谢您的贡献！🎉
