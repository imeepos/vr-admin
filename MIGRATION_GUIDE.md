# TypeORM Migration 和管理员账号使用指南

## 概述

本项目已配置完整的 TypeORM migration 系统和自动管理员账号初始化功能。

## 管理员账号

### 默认账号信息
- **用户名**: `admin`
- **密码**: `admin123`
- **邮箱**: `admin@vr-admin.local`
- **姓名**: `系统管理员`

### 自定义管理员账号
可以通过环境变量自定义管理员账号信息：

```env
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_NAME=管理员姓名
ENABLE_ADMIN_SEEDER=true
```

## Migration 命令

### 开发环境
```bash
# 生成新的 migration
pnpm run migration:generate --name=CreateNewTable

# 创建空的 migration 文件
pnpm run migration:create --name=CustomMigration

# 运行 migrations
pnpm run migration:run

# 回滚最后一个 migration
pnpm run migration:revert

# 显示待运行的 migrations
pnpm run migration:show
```

### Docker 环境
```bash
# 构建并启动服务
pnpm run docker:build
pnpm run docker:up

# 运行 migrations
pnpm run docker:migrate

# 查看日志
pnpm run docker:logs

# 停止服务
pnpm run docker:down
```

## 配置说明

### 数据库配置
- `synchronize: false` - 使用 migrations 替代自动同步
- `migrationsRun: true` - 开发环境自动运行 migrations
- `migrations: ['dist/migrations/*.js']` - migration 文件路径

### 管理员初始化
- 仅在开发环境或 `ENABLE_ADMIN_SEEDER=true` 时运行
- 具有幂等性：重复启动不会创建重复账号
- 使用 bcryptjs 进行密码加密

## WSL2 Docker 注意事项

1. **数据库连接**: 使用 `postgres` 作为主机名，不是 `localhost`
2. **应用绑定**: 应用绑定到 `0.0.0.0` 以支持 WSL2 外部访问
3. **容器通信**: 使用容器名称进行服务间通信

## 首次启动流程

1. 启动数据库和 Redis：
   ```bash
   docker-compose up -d postgres redis
   ```

2. 构建并启动应用：
   ```bash
   pnpm run docker:build
   pnpm run docker:up
   ```

3. 应用启动时会自动：
   - 运行数据库 migrations
   - 创建管理员账号
   - 启动 GraphQL 服务

4. 访问应用：
   - API: http://localhost:3002
   - GraphQL Playground: http://localhost:3002/graphql

## 生产环境部署

在生产环境中，建议：

1. 设置 `ENABLE_ADMIN_SEEDER=false`
2. 手动运行 migrations：`pnpm run migration:run`
3. 手动创建管理员账号或使用安全的方式初始化
4. 使用强密码替换默认的 `admin123`