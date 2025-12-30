# Ding的个人技术Blog

## 简介

这是基于 BootDo 开源框架改造的个人技术博客系统，用于记录和分享技术学习心得。

本博客采用 Spring Boot + MyBatis + Thymeleaf + Shiro 技术栈开发，提供了完整的博客功能和后台管理系统。

## 技术栈

### 后端技术
- **Spring Boot** - 核心框架
- **MyBatis** - 数据访问层（ORM）
- **Thymeleaf** - 模板引擎
- **Apache Shiro** - 安全框架（权限认证）
- **MySQL** - 关系型数据库
- **Redis** - 缓存
- **Druid** - 数据库连接池

### 前端技术
- **Bootstrap 5** - 响应式 UI 框架（博客前台）
- **Bootstrap 3** - UI 框架（后台管理）
- **jQuery** - JavaScript 库
- **Font Awesome** - 图标库
- **Summernote** - 富文本编辑器
- **ECharts** - 数据可视化图表
- **Layer** - 弹窗组件

## 功能特性

### 博客前台
- 文章列表展示（AJAX 分页加载）
- 文章详情阅读
- 分类与标签系统
- 关于页面
- 响应式设计（支持移动端）
- 浅蓝色清新主题

### 后台管理
- **数据仪表盘**: 可视化数据概览
  - 访问趋势分析（最近7天）
  - 内容分类统计
  - 实时数据刷新
- 用户管理
- 角色权限管理
- 文章内容管理（发布、编辑、删除）
- 分类/标签管理
- 文件管理
- 数据字典管理
- 操作日志
- 代码生成工具
- 系统通知
- 在线办公（OA）

## 联系方式

- **Email**: dingzhaoyan@cumt.edu.cn
- **QQ**: 1711583904
- **GitHub**: https://github.com/AlexDDING/bootdo

## 改造说明

本项目基于 [BootDo](https://github.com/lcg0124/bootdo) 开源框架进行个性化改造，主要改造内容如下：

### UI/UX 改造
- 采用现代简洁的设计风格
- 优化配色方案（浅蓝色渐变主题）
- 改进阅读体验和排版
- 优化移动端响应式布局
- 统一使用 CSS 变量管理主题

### 前台博客改造
- **Hero Banner**: 从深色渐变改为浅蓝白色渐变，清新现代
- **文章列表**: 优化卡片设计，随机渐变色封面
- **关于页面**: 完全重写为个人介绍+博客说明
- **字体优化**: 提升后台管理界面字体大小，增强可读性

### 功能调整
- 简化为纯博客系统
- 移除不必要的社交链接
- 保留完整后台管理功能
- 更新个人信息和联系方式
- 移除 ICP 备案信息

### 代码优化
- 使用 CSS 变量统一主题管理
- 改进字体大小和可读性
- 优化移动端体验
- 统一视觉风格

## 快速开始

### 环境要求
- JDK 1.8+
- Maven 3.0+
- MySQL 5.7+
- Redis（可选）

### 运行步骤

1. **克隆项目**
```bash
git clone https://github.com/AlexDDING/bootdo.git
cd bootdo
```

2. **配置数据库**
修改 `src/main/resources/application-dev.yml` 中的数据库连接信息

3. **初始化数据库**
执行 SQL 脚本（如有的话）

4. **运行项目**
```bash
mvn spring-boot:run
```

5. **访问系统**
- 博客前台: http://localhost:8080/
- 后台管理: http://localhost:8080/login

## 项目结构

```
bootdo/
├── src/main/
│   ├── java/
│   │   └── com/
│   │       └── bootdo/
│   │           ├── BootdoApplication.java
│   │           ├── controller/     # 控制器层
│   │           ├── service/        # 业务逻辑层
│   │           ├── mapper/         # 数据访问层
│   │           ├── domain/         # 实体类
│   │           ├── shiro/          # 安全配置
│   │           └── util/           # 工具类
│   └── resources/
│       ├── templates/              # Thymeleaf 模板
│       │   ├── blog/              # 博客前台模板
│       │   ├── login.html        # 登录页
│       │   └── index_v1.html     # 后台主框架
│       ├── static/
│       │   ├── css/              # 样式文件
│       │   ├── js/               # JavaScript 文件
│       │   └── img/              # 图片资源
│       └── application.yml       # 配置文件
└── README.md
```

## 许可证

本博客基于 BootDo (Apache License 2.0) 进行改造，遵循原协议。

> BootDo 是高效率，低封装，面向学习型，面向微服务的**开源**Java EE开发框架。

---

## 改造历史

### 2024年12月
- 添加后台数据仪表盘功能
  - 访问趋势可视化（最近7天数据）
  - 内容分类统计图表
  - 扁平简约高级风格设计
- 完成UI风格现代化
- 更新个人信息和联系方式
- 优化配色和字体
- 简化功能模块
- 添加浅蓝色清新主题
- 改进前台博客阅读体验

---

## 致谢

感谢 BootDo 原作者提供的优秀开源框架！

如有问题或建议，欢迎通过以上联系方式与我交流。
