import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const gqlContext = context.getArgByIndex(2); // GraphQL context
    const req = gqlContext?.req || request; // Use GraphQL request if available

    if (!req) {
      throw new UnauthorizedException('请求对象无效');
    }

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
    const headers = request.headers || request.req?.headers || request.request?.headers;

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
}