import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, MaxLength } from 'class-validator';

@InputType()
export class UpdateModelInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  title?: string;

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
}