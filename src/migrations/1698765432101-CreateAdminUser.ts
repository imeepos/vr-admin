import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

export class CreateAdminUser1698765432101 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 检查管理员账号是否已存在
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@vr-admin.local';

    const existingAdmin = await queryRunner.query(`
      SELECT id FROM "user"
      WHERE username = $1 OR email = $2
    `, [adminUsername, adminEmail]);

    if (existingAdmin.length > 0) {
      console.log(`管理员账号 "${adminUsername}" 已存在，跳过创建`);
      return;
    }

    // 生成加密的密码
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(adminPassword, salt);

    // 插入管理员账号
    const adminName = process.env.ADMIN_NAME || '系统管理员';

    await queryRunner.query(`
      INSERT INTO "user" (
        username,
        email,
        name,
        password,
        salt,
        isActive,
        createdAt,
        updatedAt
      ) VALUES ($1, $2, $3, $4, $5, $6, now(), now())
    `, [
      adminUsername,
      adminEmail,
      adminName,
      hashedPassword,
      salt,
      true
    ]);

    console.log(`✅ 管理员账号创建成功:
  用户名: ${adminUsername}
  邮箱: ${adminEmail}
  姓名: ${adminName}
  密码: ${adminPassword}
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 删除管理员账号
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@vr-admin.local';

    await queryRunner.query(`
      DELETE FROM "user"
      WHERE username = $1 OR email = $2
    `, [adminUsername, adminEmail]);

    console.log(`管理员账号 "${adminUsername}" 已删除`);
  }
}