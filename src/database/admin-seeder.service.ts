import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AdminSeederService {
  private readonly logger = new Logger(AdminSeederService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async initializeAdmin(): Promise<void> {
    try {
      this.logger.log('开始检查管理员账号初始化...');

      const adminUsername = process.env.ADMIN_USERNAME || 'admin';
      const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
      const adminEmail = process.env.ADMIN_EMAIL || 'admin@vr-admin.local';
      const adminName = process.env.ADMIN_NAME || '系统管理员';

      // 检查管理员是否已存在
      const existingAdmin = await this.userRepository.findOne({
        where: [
          { username: adminUsername },
          { email: adminEmail },
        ],
      });

      if (existingAdmin) {
        this.logger.log(`管理员账号 "${adminUsername}" 已存在，跳过初始化`);
        return;
      }

      // 创建管理员账号
      const salt = await bcryptjs.genSalt();
      const hashedPassword = await bcryptjs.hash(adminPassword, salt);

      const adminUser = this.userRepository.create({
        username: adminUsername,
        email: adminEmail,
        name: adminName,
        password: hashedPassword,
        salt,
        isActive: true,
      });

      await this.userRepository.save(adminUser);

      this.logger.log(`✅ 管理员账号初始化成功:
  用户名: ${adminUsername}
  邮箱: ${adminEmail}
  姓名: ${adminName}
  密码: ${adminPassword}
`);
    } catch (error) {
      this.logger.error('管理员账号初始化失败:', error);
      throw error;
    }
  }

  async shouldInitializeAdmin(): Promise<boolean> {
    try {
      const adminUsername = process.env.ADMIN_USERNAME || 'admin';
      const adminEmail = process.env.ADMIN_EMAIL || 'admin@vr-admin.local';

      const existingAdmin = await this.userRepository.findOne({
        where: [
          { username: adminUsername },
          { email: adminEmail },
        ],
      });

      return !existingAdmin;
    } catch (error) {
      this.logger.error('检查管理员账号状态失败:', error);
      return false;
    }
  }
}