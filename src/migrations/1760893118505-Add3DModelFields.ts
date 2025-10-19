import { MigrationInterface, QueryRunner } from 'typeorm';

export class Add3DModelFields1760893118505 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 为模型表添加3D模型文件相关字段
    await queryRunner.query(`
      ALTER TABLE "model"
      ADD COLUMN "modelFile" character varying(255) NULL
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      ADD COLUMN "modelFileName" character varying(255) NULL
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      ADD COLUMN "modelFilePath" character varying(500) NULL
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      ADD COLUMN "modelFileSize" integer NULL
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      ADD COLUMN "modelFileType" character varying(50) NULL
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      ADD COLUMN "modelFileMimeType" character varying(100) NULL
    `);

    // 添加索引以提高查询性能
    await queryRunner.query(`
      CREATE INDEX "IDX_MODEL_MODEL_FILE_TYPE" ON "model" ("modelFileType")
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_MODEL_MODEL_FILE_SIZE" ON "model" ("modelFileSize")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 删除索引
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_MODEL_MODEL_FILE_TYPE"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_MODEL_MODEL_FILE_SIZE"`);

    // 删除字段（按照添加的逆序）
    await queryRunner.query(`
      ALTER TABLE "model"
      DROP COLUMN IF EXISTS "modelFileMimeType"
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      DROP COLUMN IF EXISTS "modelFileType"
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      DROP COLUMN IF EXISTS "modelFileSize"
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      DROP COLUMN IF EXISTS "modelFilePath"
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      DROP COLUMN IF EXISTS "modelFileName"
    `);

    await queryRunner.query(`
      ALTER TABLE "model"
      DROP COLUMN IF EXISTS "modelFile"
    `);
  }
}