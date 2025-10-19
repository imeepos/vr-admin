import { MigrationInterface, QueryRunner, Table, Index, Unique } from 'typeorm';

export class CreateInitialTables1698765432100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 创建 users 表
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'username',
            type: 'varchar',
            length: '255',
            isUnique: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'avatar',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'salt',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'sessions',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'isActive',
            type: 'boolean',
            default: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true
    );

    // 创建 models 表
    await queryRunner.createTable(
      new Table({
        name: 'model',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'uuid',
            type: 'varchar',
            length: '255',
            isUnique: true,
          },
          {
            name: 'title',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'backgroundImage',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'backgroundVideo',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'isActive',
            type: 'boolean',
            default: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true
    );

    // 创建索引以提高查询性能
    await queryRunner.createIndex(
      'user',
      new Index('IDX_USER_USERNAME', ['username'])
    );

    await queryRunner.createIndex(
      'user',
      new Index('IDX_USER_EMAIL', ['email'])
    );

    await queryRunner.createIndex(
      'user',
      new Index('IDX_USER_IS_ACTIVE', ['isActive'])
    );

    await queryRunner.createIndex(
      'model',
      new Index('IDX_MODEL_UUID', ['uuid'])
    );

    await queryRunner.createIndex(
      'model',
      new Index('IDX_MODEL_IS_ACTIVE', ['isActive'])
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('model');
    await queryRunner.dropTable('user');
  }
}