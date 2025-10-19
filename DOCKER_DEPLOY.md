# VR Admin Docker 一键部署指南

## 快速开始

### 生产环境部署（一键运行）

1. **配置环境变量**
   ```bash
   cp .env.example .env
   # 根据需要修改 .env 文件中的配置
   ```

2. **启动生产环境**
   ```bash
   docker-compose up --build -d
   ```

3. **查看服务状态**
   ```bash
   docker-compose ps
   ```

4. **查看日志**
   ```bash
   docker-compose logs -f app
   ```

### 开发环境部署（支持热重载）

1. **配置开发环境变量**
   ```bash
   cp .env.example .env.dev
   # 根据需要修改 .env.dev 文件中的配置
   ```

2. **启动开发环境**
   ```bash
   docker-compose -f docker-compose.dev.yml --env-file .env.dev up --build
   ```

3. **开发环境特点**
   - 后端热重载：代码修改自动重启
   - 前端热重载：浏览器自动刷新
   - 调试端口：9229 (Node.js 调试)
   - 开发数据库：端口 5433
   - 开发 Redis：端口 6380

## 服务访问地址

### 生产环境
- **前端应用**: http://localhost:3001
- **API 接口**: http://localhost:3001/api
- **GraphQL**: http://localhost:3001/graphql
- **数据库**: localhost:5432
- **Redis**: localhost:6379

### 开发环境
- **前端开发服务器**: http://localhost:3000
- **后端 API**: http://localhost:3001
- **GraphQL**: http://localhost:3001/graphql
- **开发数据库**: localhost:5433
- **开发 Redis**: localhost:6380

## 常用命令

### 生产环境
```bash
# 启动所有服务
docker-compose up -d

# 启动并查看日志
docker-compose up --build

# 停止所有服务
docker-compose down

# 停止并删除数据卷（谨慎使用）
docker-compose down -v

# 重新构建并启动
docker-compose up --build --force-recreate

# 查看日志
docker-compose logs -f [service-name]
```

### 开发环境
```bash
# 启动开发环境
docker-compose -f docker-compose.dev.yml up --build

# 后台启动开发环境
docker-compose -f docker-compose.dev.yml up -d --build

# 停止开发环境
docker-compose -f docker-compose.dev.yml down

# 查看开发环境日志
docker-compose -f docker-compose.dev.yml logs -f [service-name]
```

## 数据库管理

### 连接数据库
```bash
# 生产环境
docker exec -it vr-admin-postgres psql -U postgres -d vr_admin

# 开发环境
docker exec -it vr-admin-postgres-dev psql -U postgres -d vr_admin_dev
```

### 备份数据库
```bash
# 生产环境备份
docker exec vr-admin-postgres pg_dump -U postgres vr_admin > backup.sql

# 开发环境备份
docker exec vr-admin-postgres-dev pg_dump -U postgres vr_admin_dev > dev_backup.sql
```

### 恢复数据库
```bash
# 生产环境恢复
docker exec -i vr-admin-postgres psql -U postgres vr_admin < backup.sql

# 开发环境恢复
docker exec -i vr-admin-postgres-dev psql -U postgres vr_admin_dev < dev_backup.sql
```

## 故障排除

### 常见问题

1. **端口冲突**
   - 检查端口是否被占用：`netstat -tulpn | grep :3001`
   - 修改 `.env` 文件中的端口配置

2. **数据库连接失败**
   - 确保数据库服务启动：`docker-compose ps postgres`
   - 检查数据库健康状态：`docker-compose logs postgres`

3. **前端构建失败**
   - 检查 Node.js 版本兼容性
   - 清理 node_modules 重新安装：`docker-compose exec app rm -rf node_modules && pnpm install`

4. **权限问题**
   - 确保 uploads 目录有写权限：`chmod 755 uploads`
   - 检查 Docker 用户权限

### 重置环境

```bash
# 完全重置生产环境
docker-compose down -v
docker system prune -f
docker-compose up --build

# 完全重置开发环境
docker-compose -f docker-compose.dev.yml down -v
docker system prune -f
docker-compose -f docker-compose.dev.yml up --build
```

## 环境变量说明

### 必须修改的生产环境变量
- `DB_PASSWORD`: 数据库密码（使用强密码）
- `REDIS_PASSWORD`: Redis 密码（使用强密码）
- `JWT_SECRET`: JWT 密钥（使用强随机密钥）

### 开发环境可选变量
- `DB_DEV_PORT`: 开发数据库端口（默认 5433）
- `REDIS_DEV_PORT`: 开发 Redis 端口（默认 6380）

## 性能优化

### 生产环境优化
1. **资源限制**: 在 docker-compose.yml 中添加资源限制
2. **日志管理**: 配置日志轮转
3. **监控**: 添加健康检查和监控
4. **缓存**: 优化 Redis 配置

### 开发环境优化
1. **挂载优化**: 只挂载必要的目录
2. **依赖缓存**: 利用 Docker 层缓存
3. **热重载**: 配置合理的文件监听

## 安全建议

1. **定期更新**: 保持 Docker 镜像最新
2. **网络隔离**: 使用自定义网络
3. **密钥管理**: 使用 Docker secrets 或环境变量文件
4. **访问控制**: 配置防火墙规则
5. **备份策略**: 定期备份数据库和重要文件

## 支持

如遇到问题，请：
1. 查看日志：`docker-compose logs`
2. 检查配置：确认 `.env` 文件配置正确
3. 参考故障排除章节
4. 提交 Issue 并包含详细的错误信息和环境描述