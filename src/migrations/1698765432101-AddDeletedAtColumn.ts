import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDeletedAtColumn1698765432101 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 为 model 表添加 deletedAt 列
    await queryRunner.query(`
      ALTER TABLE "model"
      ADD COLUMN "deletedAt" TIMESTAMP NULL
    `);

    // 为 deletedAt 列创建索引以提高软删除查询性能
    await queryRunner.query(`
      CREATE INDEX IF NOT EXISTS "IDX_MODEL_DELETED_AT" ON "model" ("deletedAt")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 删除索引
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_MODEL_DELETED_AT"`);

    // 删除 deletedAt 列
    await queryRunner.query(`ALTER TABLE "model" DROP COLUMN "deletedAt"`);
  }
}