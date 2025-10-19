# ================================
# 构建阶段
# ================================
FROM node:20-alpine AS builder

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制根目录的 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 安装后端依赖 (跳过 postinstall 脚本)
RUN pnpm install --ignore-scripts

# 复制前端配置
COPY frontend/package.json frontend/pnpm-lock.yaml ./frontend/

# 安装前端依赖 (跳过脚本)
RUN cd frontend && pnpm install --ignore-scripts

# 复制源代码
COPY . .

# 构建前端
RUN cd frontend && pnpm run build

# 构建后端
RUN pnpm run build

# ================================
# 后端生产环境镜像
# ================================
FROM node:20-alpine AS backend

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制根目录的 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 只安装生产依赖 (跳过 postinstall 脚本)
RUN pnpm install --prod --ignore-scripts

# 从构建阶段复制后端编译后的代码
COPY --from=builder /app/dist ./dist

# 创建上传目录
RUN mkdir -p uploads

# 设置环境变量
ENV NODE_ENV=production

# 暴露端口 (内部网络使用)
EXPOSE 3002

# 启动后端应用
CMD ["pnpm", "run", "start:prod"]

# ================================
# Nginx 生产环境镜像
# ================================
FROM nginx:alpine AS frontend

# 复制自定义 nginx 配置
COPY nginx.conf /etc/nginx/nginx.conf

# 从构建阶段复制前端构建产物
COPY --from=builder /app/public /var/www/html

# 创建上传文件目录并复制现有上传文件
RUN mkdir -p /var/www/uploads

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]