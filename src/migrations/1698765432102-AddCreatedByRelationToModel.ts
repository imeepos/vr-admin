import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCreatedByRelationToModel1698765432102 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 为 model 表添加 createdBy 列
    await queryRunner.query(`
      ALTER TABLE "model"
      ADD COLUMN "createdBy" UUID NULL
    `);

    // 创建外键约束：model.createdBy -> user.id
    await queryRunner.query(`
      ALTER TABLE "model"
      ADD CONSTRAINT "FK_model_createdBy_user_id"
      FOREIGN KEY ("createdBy")
      REFERENCES "user"("id")
      ON DELETE SET NULL
      ON UPDATE CASCADE
    `);

    // 为 createdBy 列创建索引以提高查询性能
    await queryRunner.query(`
      CREATE INDEX IF NOT EXISTS "IDX_MODEL_CREATED_BY" ON "model" ("createdBy")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 删除索引
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_MODEL_CREATED_BY"`);

    // 删除外键约束
    await queryRunner.query(`
      ALTER TABLE "model"
      DROP CONSTRAINT IF EXISTS "FK_model_createdBy_user_id"
    `);

    // 删除 createdBy 列
    await queryRunner.query(`ALTER TABLE "model" DROP COLUMN "createdBy"`);
  }
}