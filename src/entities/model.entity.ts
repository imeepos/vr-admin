import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@Entity()
export class Model {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  uuid: string;

  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'text' })
  description?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  backgroundImage?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  backgroundVideo?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  modelFile?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  modelFileName?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  modelFilePath?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  modelFileSize?: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  modelFileType?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  modelFileMimeType?: string;

  @Field()
  @Column({ default: true })
  isActive: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field({ nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, { nullable: true })
  @JoinColumn()
  createdBy?: User;
}