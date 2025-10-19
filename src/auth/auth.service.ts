import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { LoginInput } from '../dto/login.input';
import * as bcryptjs from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: [
        { username, isActive: true },
        { email: username, isActive: true },
      ],
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  async login(loginInput: LoginInput): Promise<{ user: User; token: string }> {
    const { username, password } = loginInput;

    const user = await this.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('用户名或密码错误');
    }

    // 生成简单的 JWT token (在实际项目中应该使用更安全的方法)
    const token = this.generateToken(user);

    // 更新用户的会话信息
    await this.updateUserSession(user.id, token);

    return {
      user,
      token,
    };
  }

  async logout(userId: string): Promise<void> {
    await this.userRepository.update(userId, { sessions: [] });
  }

  async getCurrentUser(userId: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id: userId, isActive: true },
    });
  }

  async createUser(userData: {
    username: string;
    email?: string;
    name: string;
    password: string;
  }): Promise<User> {
    // 检查用户名是否已存在
    const existingUser = await this.userRepository.findOne({
      where: [
        { username: userData.username },
        { email: userData.email },
      ],
    });

    if (existingUser) {
      throw new UnauthorizedException('用户名或邮箱已存在');
    }

    // 加密密码
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(userData.password, salt);

    const user = this.userRepository.create({
      ...userData,
      password: hashedPassword,
      salt,
    });

    return this.userRepository.save(user);
  }

  private generateToken(user: User): string {
    // 简单的 token 生成，实际项目中应该使用 JWT 库
    const payload = {
      sub: user.id,
      username: user.username,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24 小时
    };

    return Buffer.from(JSON.stringify(payload)).toString('base64');
  }

  private async updateUserSession(userId: string, token: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) return;

    const sessions = user.sessions || [];
    sessions.push({
      token,
      createdAt: new Date(),
      lastActive: new Date(),
    });

    // 限制会话数量
    if (sessions.length > 10) {
      sessions.splice(0, sessions.length - 10);
    }

    await this.userRepository.update(userId, { sessions });
  }

  async refreshToken(refreshToken: string): Promise<{ token: string } | null> {
    try {
      const payload = JSON.parse(Buffer.from(refreshToken, 'base64').toString());

      if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
        throw new UnauthorizedException('Token 已过期');
      }

      const user = await this.getCurrentUser(payload.sub);
      if (!user) {
        throw new UnauthorizedException('用户不存在');
      }

      const newToken = this.generateToken(user);
      await this.updateUserSession(user.id, newToken);

      return { token: newToken };
    } catch {
      throw new UnauthorizedException('无效的 token');
    }
  }

  async verifyToken(token: string): Promise<User | null> {
    try {
      const payload = JSON.parse(Buffer.from(token, 'base64').toString());

      if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
        return null;
      }

      return this.getCurrentUser(payload.sub);
    } catch {
      return null;
    }
  }
}