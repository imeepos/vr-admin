import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from '../dto/login.input';
import { LoginResponse } from '../dto/login.response';
import { User } from '../entities/user.entity';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('input') input: LoginInput,
    @Context() context: any,
  ) {
    try {
      const result = await this.authService.login(input);

      // 设置 HTTP-only cookie
      if (result) {
        context.res.cookie('auth-token', result.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 24 * 60 * 60 * 1000, // 24 小时
        });
      }

      return result;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @Mutation(() => Boolean)
  async logout(@Context() context: any) {
    const user = context.req.user;
    if (user) {
      await this.authService.logout(user.id);
    }

    // 清除 cookie
    context.res.clearCookie('auth-token');
    return true;
  }

  @Query(() => User, { nullable: true })
  @UseGuards(AuthGuard)
  async me(@Context() context: any) {
    return context.req.user;
  }

  @Mutation(() => String)
  async refreshToken(@Context() context: any) {
    const token = context.req.cookies?.['auth-token'];
    if (!token) {
      throw new UnauthorizedException('未找到有效的令牌');
    }

    try {
      const result = await this.authService.refreshToken(token);

      // 更新 cookie
      if (result) {
        context.res.cookie('auth-token', result.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 24 * 60 * 60 * 1000,
        });

        return result.token;
      }
    } catch (error) {
      throw new UnauthorizedException('令牌刷新失败');
    }
  }
}