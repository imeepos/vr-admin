import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * GraphQL Playground 增强中间件
 * 提供现代化的开发体验功能
 */
@Injectable()
export class GraphQLPlaygroundMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // 添加安全头部
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');

    // 添加 CORS 特定头部用于 Playground
    if (req.path.includes('graphql')) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers',
        'Content-Type, Authorization, X-Environment, X-Client-Version, Apollo-Require-Preflight'
      );
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      // 为 Playground 添加自定义头部
      res.setHeader('X-GraphQL-Playground-Version', '2.0.0');
      res.setHeader('X-GraphQL-Playground-Features',
        'history, themes, collaboration, multi-env'
      );
    }

    // 如果是预检请求，直接返回 200
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    next();
  }
}