-- VR Admin 数据库初始化脚本
-- 这个文件会在 PostgreSQL 容器首次启动时自动执行

-- 创建扩展（如果需要）
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 创建用户表的结构会在应用启动时通过 TypeORM 自动创建
-- 这里可以添加一些初始数据或特定的数据库配置

-- 示例：插入默认管理员用户（如果需要）
-- 注意：实际的用户插入应该通过应用的认证系统处理，以确保密码正确加密

-- 设置数据库时区
SET timezone = 'UTC';

-- 输出初始化完成信息
DO $$
BEGIN
    RAISE NOTICE 'VR Admin database initialized successfully';
END $$;