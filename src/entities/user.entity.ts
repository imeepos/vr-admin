import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  email?: string;

  @Field()
  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  salt?: string;

  @Column({ type: 'jsonb', nullable: true })
  sessions?: any[];

  @Column({ default: true })
  isActive: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}