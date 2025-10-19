# TypeORM Migration 使用指南

## 概述

本项目使用完整的 TypeORM migration 系统管理数据库结构变更，包括表结构创建、索引、约束以及初始管理员账号。

## 管理员账号

### 默认账号信息
- **用户名**: `admin`
- **密码**: `admin123`
- **邮箱**: `admin@vr-admin.local`
- **姓名**: `系统管理员`

管理员账号通过 migration 自动创建，具有幂等性（不会重复创建）。

### 自定义管理员账号
可以通过环境变量自定义管理员账号信息：

```env
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_NAME=管理员姓名
```

## Migration 文件

### 当前 Migrations
1. `1698765432100-CreateInitialTables.ts` - 创建基础表结构（user, model）
2. `1698765432101-CreateAdminUser.ts` - 创建管理员账号

## Migration 命令

### 开发环境
```bash
# 生成新的 migration（基于实体变更）
pnpm run migration:generate --name=CreateNewTable

# 创建空的 migration 文件
pnpm run migration:create --name=CustomMigration

# 运行所有待执行的 migrations
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
- `synchronize: false` - 使用 migrations 替代自动同步（生产安全）
- `migrationsRun: true` - 开发环境自动运行 migrations
- `migrations: ['dist/migrations/*.js']` - migration 文件路径

### Migration 特点
- **幂等性**: 管理员账号 migration 会检查账号是否已存在
- **环境变量支持**: 管理员信息可通过环境变量配置
- **密码加密**: 使用 bcryptjs 进行安全密码加密
- **原生 SQL**: 所有 migrations 使用原生 SQL 语句，清晰可控

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
   - 运行数据库 migrations 创建表结构
   - 通过 migration 创建管理员账号
   - 启动 GraphQL 服务

4. 访问应用：
   - API: http://localhost:3002
   - GraphQL Playground: http://localhost:3002/graphql

## 生产环境部署

在生产环境中：

1. **手动运行 migrations**: `pnpm run migration:run`
2. **使用强密码**: 设置环境变量 `ADMIN_PASSWORD` 为安全密码
3. **备份数据库**: 运行 migrations 前先备份数据库
4. **测试 migration**: 在预发布环境先测试 migrations

## Migration 最佳实践

1. **原子性**: 每个 migration 应该是一个原子操作
2. **可回滚**: 确保每个 migration 都有对应的 down 方法
3. **幂等性**: 关键操作（如创建管理员账号）应该检查是否已存在
4. **原生 SQL**: 优先使用原生 SQL 而非 TypeORM API，更加可控
5. **命名规范**: 使用时间戳 + 描述性名称的文件命名