import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, ObjectType, ID } from '@nestjs/graphql';

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

  @Field()
  @Column({ default: true })
  isActive: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}