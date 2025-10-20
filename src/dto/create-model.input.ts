import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, IsUUID, MaxLength } from 'class-validator';

@InputType()
export class CreateModelInput {
  @Field()
  @IsString()
  @MaxLength(200)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  backgroundImage?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  backgroundVideo?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  modelFile?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  modelFileName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  modelFilePath?: string;

  @Field({ nullable: true })
  @IsOptional()
  modelFileSize?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  modelFileType?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  modelFileMimeType?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  iosModelFile?: string;
}