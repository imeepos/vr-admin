import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcryptjs';

export class InitialSchema1698765432100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 启用 UUID 扩展
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    // 创建 users 表
    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
        "username" character varying(255) NOT NULL,
        "email" character varying(255) NULL,
        "name" character varying(255) NOT NULL,
        "password" character varying(255) NOT NULL,
        "avatar" character varying(255) NULL,
        "salt" character varying(255) NULL,
        "sessions" jsonb NULL,
        "isActive" boolean NOT NULL DEFAULT true,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_user_username" UNIQUE ("username"),
        CONSTRAINT "UQ_user_email" UNIQUE ("email"),
        CONSTRAINT "PK_user_id" PRIMARY KEY ("id")
      )
    `);

    // 创建 models 表
    await queryRunner.query(`
      CREATE TABLE "model" (
        "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
        "uuid" character varying(255) NOT NULL,
        "title" character varying(255) NOT NULL,
        "description" text NULL,
        "backgroundImage" character varying(255) NULL,
        "backgroundVideo" character varying(255) NULL,
        "isActive" boolean NOT NULL DEFAULT true,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        "deletedAt" TIMESTAMP NULL,
        "createdById" UUID NULL,
        CONSTRAINT "UQ_model_uuid" UNIQUE ("uuid"),
        CONSTRAINT "PK_model_id" PRIMARY KEY ("id")
      )
    `);

    // 创建索引
    await queryRunner.query(`CREATE INDEX "IDX_USER_USERNAME" ON "user" ("username")`);
    await queryRunner.query(`CREATE INDEX "IDX_USER_EMAIL" ON "user" ("email")`);
    await queryRunner.query(`CREATE INDEX "IDX_USER_IS_ACTIVE" ON "user" ("isActive")`);
    await queryRunner.query(`CREATE INDEX "IDX_MODEL_UUID" ON "model" ("uuid")`);
    await queryRunner.query(`CREATE INDEX "IDX_MODEL_IS_ACTIVE" ON "model" ("isActive")`);
    await queryRunner.query(`CREATE INDEX "IDX_MODEL_DELETED_AT" ON "model" ("deletedAt")`);
    await queryRunner.query(`CREATE INDEX "IDX_MODEL_CREATED_BY_ID" ON "model" ("createdById")`);

    // 创建外键约束
    await queryRunner.query(`
      ALTER TABLE "model"
      ADD CONSTRAINT "FK_model_createdBy_user_id"
      FOREIGN KEY ("createdById")
      REFERENCES "user"("id")
      ON DELETE SET NULL
      ON UPDATE CASCADE
    `);

    // 创建触发器函数
    await queryRunner.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW."updatedAt" = now();
        RETURN NEW;
      END;
      $$ language 'plpgsql';
    `);

    // 创建用户表触发器
    await queryRunner.query(`
      DROP TRIGGER IF EXISTS "user_updated_at" ON "user"
    `);
    await queryRunner.query(`
      CREATE TRIGGER "user_updated_at"
      BEFORE UPDATE ON "user"
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()
    `);

    // 创建模型表触发器
    await queryRunner.query(`
      DROP TRIGGER IF EXISTS "model_updated_at" ON "model"
    `);
    await queryRunner.query(`
      CREATE TRIGGER "model_updated_at"
      BEFORE UPDATE ON "model"
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()
    `);

    // 创建默认管理员用户 (admin/admin123)
    const adminSalt = await bcrypt.genSalt(10);
    const adminPassword = await bcrypt.hash('admin123', adminSalt);

    await queryRunner.query(`
      INSERT INTO "user" ("username", "email", "name", "password", "salt", "isActive", "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `, [
      'admin',
      'admin@vr-admin.com',
      'Administrator',
      adminPassword,
      adminSalt,
      true,
      new Date(),
      new Date()
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 删除触发器
    await queryRunner.query(`DROP TRIGGER IF EXISTS "user_updated_at" ON "user"`);
    await queryRunner.query(`DROP TRIGGER IF EXISTS "model_updated_at" ON "model"`);

    // 删除函数
    await queryRunner.query(`DROP FUNCTION IF EXISTS update_updated_at_column()`);

    // 删除外键约束
    await queryRunner.query(`
      ALTER TABLE "model"
      DROP CONSTRAINT IF EXISTS "FK_model_createdBy_user_id"
    `);

    // 删除表（按照依赖关系的逆序）
    await queryRunner.query(`DROP TABLE "model"`);
    await queryRunner.query(`DROP TABLE "user"`);

    // 删除 UUID 扩展
    await queryRunner.query(`DROP EXTENSION IF EXISTS "uuid-ossp"`);
  }
}