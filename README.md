# VR 后台管理系统

基于 React + Tailwind CSS + TanStack Query + NestJS 构建的 VR 模型管理后台系统。

## 项目架构

- **前端**: React 18 + TypeScript + Tailwind CSS + TanStack Query + Vite
- **后端**: NestJS + GraphQL + TypeORM + PostgreSQL
- **认证**: 自定义认证系统 (JWT-based)
- **文件存储**: 本地存储 (开发) / AWS S3 (生产)

## 功能特性

- 用户登录/登出系统
- VR 模型管理 (创建、编辑、删除)
- 文件上传 (背景图片/视频)
- 响应式设计
- 实时数据同步

## 开发环境设置

### 环境要求

- Node.js 18+
- PostgreSQL 14+
- pnpm (推荐) 或 npm

### 安装依赖

```bash
# 安装后端依赖
pnpm install

# 安装前端依赖
cd frontend
pnpm install
cd ..
```

### 环境变量配置

创建 `.env` 文件：

```env
# 数据库配置
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_DATABASE=vr_admin

# 应用配置
NODE_ENV=development
PORT=3001

# 文件上传配置
UPLOAD_DIR=./uploads
BASE_URL=http://localhost:3001

# 响应签名配置（可选，开启后返回头将包含 sign）
SIGN_APP_NAME=sams-yunmall
SIGN_PRIVATE_KEY=MIICdQIBADANB...Base64私钥...
SIGN_PUBLIC_KEY=MIGfMA0GCSqG...Base64公钥...
```

### 数据库设置

1. 创建 PostgreSQL 数据库：
```sql
CREATE DATABASE vr_admin;
```

2. 启动后端服务（会自动创建表结构）：
```bash
pnpm run start:dev
```

### 启动开发服务器

```bash
# 启动后端 (端口 3001)
pnpm run start:dev

# 启动前端 (端口 3000)
cd frontend
pnpm run dev
```

## 项目结构

```
vr-admin/
├── src/                          # 后端源代码
│   ├── entities/                 # 数据库实体
│   ├── dto/                      # 数据传输对象
│   ├── auth/                     # 认证模块
│   ├── models/                   # 模型管理模块
│   ├── upload/                   # 文件上传模块
│   └── app.module.ts             # 主应用模块
├── frontend/                     # 前端源代码
│   ├── src/
│   │   ├── components/           # React 组件
│   │   ├── pages/               # 页面组件
│   │   ├── hooks/               # 自定义 Hooks
│   │   ├── services/            # API 服务
│   │   ├── types/               # TypeScript 类型
│   │   └── utils/               # 工具函数
│   ├── package.json
│   └── vite.config.ts
├── uploads/                     # 文件上传目录
└── README.md
```

## API 接口

### GraphQL 接口

- **查询**:
  - `models`: 获取模型列表
  - `model(id)`: 获取单个模型
  - `me`: 获取当前用户信息

- **变更**:
  - `login(username, password)`: 用户登录
  - `logout`: 用户登出
  - `createModel(input)`: 创建模型
  - `updateModel(id, input)`: 更新模型
  - `deleteModel(id)`: 删除模型

### REST 接口

- `GET /api/models/uuid/:uuid`: 根据模型 `uuid` 查询详情（需额外携带 `sign` 与 `timestamp` 查询参数）
- `POST /upload/image`: 上传图片
- `POST /upload/video`: 上传视频

### 响应签名

如果配置了 `SIGN_PRIVATE_KEY` 与 `SIGN_APP_NAME`，所有 REST 与 GraphQL 响应都会增加以下头部，方便客户端验签：

- `sign`: RSA-SHA256 的 URL 安全签名值
- `sign-timestamp`: 生成签名时的毫秒时间戳

验签规则与 `RSASignTests.java` 保持一致：对响应 JSON 进行字段排序后拼接 `appName + timestamp` 再进行 SHA256withRSA 校验。后端提供 `SignatureService.verifySignature` 便于服务端自检。

### 请求验签

- 非 GraphQL 的 REST 请求需要在查询参数中携带 `sign` 与 `timestamp`，后端会基于请求体（优先）或查询参数进行验签。
- 未通过验签的请求会返回 `401 Invalid signature`。

## 部署

### 生产环境部署

1. 构建前端：
```bash
cd frontend
pnpm run build
```

2. 构建后端：
```bash
pnpm run build
```

3. 启动生产服务：
```bash
pnpm run start:prod
```

### Docker 部署

```dockerfile
# Dockerfile 示例
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY frontend/package*.json ./frontend/

RUN npm ci --only=production
WORKDIR /app/frontend
RUN npm ci --only=production && npm run build

WORKDIR /app
COPY . .

RUN npm run build

EXPOSE 3001

CMD ["node", "dist/main"]
```

## 开发指南

### 添加新的模型字段

1. 更新 `src/entities/model.entity.ts`
2. 更新相关的 DTO 文件
3. 更新前端类型定义 `frontend/src/types/index.ts`
4. 更新前端表单组件

### 自定义认证

认证系统位于 `src/auth/` 目录：
- `auth.service.ts`: 认证业务逻辑
- `auth.guard.ts`: 路由守卫
- `auth.resolver.ts`: GraphQL 解析器

### 文件上传扩展

文件上传服务位于 `src/upload/`：
- 支持添加新的文件类型验证
- 可配置存储路径和大小限制
- 支持扩展到云存储服务

## 常见问题

### Q: 如何添加新的用户角色？
A: 扩展 User 实体，添加 role 字段，并更新 AuthGuard 中的权限检查逻辑。

### Q: 如何配置 S3 存储？
A: 在 FileUploadService 中添加 AWS SDK 配置，替换本地存储逻辑。

### Q: 数据库迁移如何处理？
A: 项目使用 TypeORM 的 synchronize 自动同步，生产环境建议使用 TypeORM migrations。

## 许可证

私有项目，未经授权不得使用。
