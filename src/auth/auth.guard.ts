import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const gqlContext = context.getArgByIndex(2); // GraphQL context
    const req = gqlContext?.req || request; // Use GraphQL request if available

    if (!req) {
      throw new UnauthorizedException('请求对象无效');
    }

    // 检查管理员 API 密钥
    const adminApiKey = this.extractAdminApiKey(req);
    if (adminApiKey && this.isValidAdminApiKey(adminApiKey)) {
      // 从数据库获取管理员用户信息
      const adminUser = await this.getAdminUser();
      if (!adminUser) {
        throw new UnauthorizedException('管理员用户不存在');
      }
      req['user'] = { ...adminUser, isAdmin: true };
      return true;
    }

    // 常规用户 token 验证
    const token = this.extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException('未提供认证令牌');
    }

    const user = await this.authService.verifyToken(token);
    if (!user) {
      throw new UnauthorizedException('无效的认证令牌');
    }

    req['user'] = user;
    return true;
  }

  private extractTokenFromHeader(request: any): string | undefined {
    // Handle different request structures (HTTP vs GraphQL context)
    const headers =
      request.headers || request.req?.headers || request.request?.headers;

    if (!headers) {
      return undefined;
    }

    const authorization = headers.authorization || headers['Authorization'];
    if (!authorization) {
      return undefined;
    }

    const [type, token] = authorization.split(' ');
    return type === 'Bearer' ? token : undefined;
  }

  private extractAdminApiKey(request: any): string | undefined {
    const headers =
      request.headers || request.req?.headers || request.request?.headers;

    if (!headers) {
      return undefined;
    }

    return headers['x-admin-api-key'] || headers['X-Admin-API-Key'];
  }

  private isValidAdminApiKey(apiKey: string): boolean {
    const configuredKey = this.configService.get<string>('app.adminApiKey');
    if (!configuredKey) return false;
    return configuredKey === apiKey;
  }

  private async getAdminUser() {
    const adminUsername = this.configService.get<string>('app.adminUsername');
    if (!adminUsername) return null;

    return this.authService.getAdminUser(adminUsername);
  }
}
