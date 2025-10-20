import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIOSModelFile1760950697679 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columnExists = await queryRunner.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name='model' AND column_name='iosModelFile'
    `);

    if (columnExists.length === 0) {
      await queryRunner.query(`
        ALTER TABLE "model"
        ADD COLUMN "iosModelFile" character varying(255) NULL
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "model"
      DROP COLUMN IF EXISTS "iosModelFile"
    `);
  }
}
