# Codex 中文文档站

> OpenAI Codex 中国大陆爱好者重制体验版 - 让中文开发者更好地理解和使用 Codex

## 项目简介

本项目是 OpenAI Codex 产品的中文文档网站复刻版，旨在帮助中文开发者更好地理解和使用 Codex 软件工程智能体。

包含两个主要页面：
- **产品首页** (`index.html`) - Codex 产品介绍和功能展示
- **开发者文档** (`docs.html`) - 完整的中文文档，包含快速入门、使用指南、配置选项等

## 本地开发

### 方式一：使用 Live Server（推荐）

```bash
# 安装 Live Server 扩展（VS Code）
# 然后右键 index.html 选择 "Open with Live Server"
```

### 方式二：使用 Python 内置服务器

```bash
# Python 3
python -m http.server 3000

# 访问 http://localhost:3000
```

### 方式三：使用 npx serve

```bash
npx serve .
```

## Vercel 部署

### 方式一：Vercel CLI（推荐）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 部署（首次部署）
vercel

# 4. 部署到生产环境
vercel --prod
```

### 方式二：GitHub 集成

1. 将此仓库推送到你的 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project"
4. 导入此 GitHub 仓库
5. 点击 "Deploy"

### 方式三：Vercel Dashboard

1. 访问 [vercel.com/new](https://vercel.com/new)
2. 点击 "Import Git Repository"
3. 选择此项目仓库
4. 保持默认配置，点击 "Deploy"

## 项目结构

```
Codex/
├── index.html          # 产品首页
├── style.css           # 首页样式
├── script.js           # 首页交互逻辑
├── docs.html           # 开发者文档 SPA
├── docs.css            # 文档样式
├── vercel.json         # Vercel 部署配置
└── README.md           # 项目说明
```

## 文档内容

### 快速入门 (Getting Started)
- [x] 总览 (Overview)
- [x] 快速开始 (Quickstart)
- [x] 探索 (Explore)
- [x] 价格 (Pricing)
- [x] 提示词指南 (Prompting)

### 使用 Codex (Using Codex)
- [x] 客户端特性 (App Features)
- [x] IDE 插件 (Extension)
- [x] 命令行 (CLI)
- [x] 网页版 (Web)
- [x] 集成 (Integrations)

### 配置选项 (Configuration)
- [x] 配置文件 (Config File)
- [x] 规则设定 (Rules)
- [x] AGENTS.md 指南
- [x] MCP 协议
- [x] 自定义技能 (Skills)

## 特性

- **响应式设计** - 完美适配桌面端和移动端
- **深色/浅色主题** - 支持一键切换主题
- **SPA 架构** - 无刷新切换文档页面
- **SEO 优化** - 包含完整的 meta 标签
- **高性能** - 纯静态 HTML/CSS/JS，无框架依赖

## 技术栈

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, JetBrains Mono)

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 贡献

欢迎提交 Issue 和 Pull Request 来改进文档内容！

## 许可证

MIT License

## 免责声明

此页面为 Codex 中国大陆爱好者重制体验版，非 OpenAI 官方运营站。所有产品内容和功能介绍基于 OpenAI 官方文档翻译和本地化改编。

---

Built with ❤️ for Chinese developers
