import { Resolver, Mutation, Args, ObjectType, Field } from '@nestjs/graphql';
import { FileUploadService, UploadedFile as UploadedFileType } from '../upload/file-upload.service';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';

@ObjectType()
class GraphQLUploadedFile {
  @Field()
  filename: string;

  @Field()
  originalName: string;

  @Field()
  mimetype: string;

  @Field()
  size: number;

  @Field()
  path: string;

  @Field()
  url: string;
}

@ObjectType()
class UploadResult {
  @Field()
  success: boolean;

  @Field(() => GraphQLUploadedFile, { nullable: true })
  file?: GraphQLUploadedFile;
}

@Resolver()
export class UploadResolver {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Mutation(() => UploadResult, { name: 'uploadImage' })
  async uploadImage(@Args('file', { type: () => GraphQLUpload }) file: Promise<any>) {
    const { filename, mimetype, createReadStream } = await file;

    // 将 stream 转换为 buffer
    const stream = createReadStream();
    const chunks: Buffer[] = [];

    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);

    try {
      const uploadedFile = await this.fileUploadService.uploadImage(
        buffer,
        filename,
        mimetype,
      );

      return {
        success: true,
        file: uploadedFile,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  @Mutation(() => UploadResult, { name: 'uploadVideo' })
  async uploadVideo(@Args('file', { type: () => GraphQLUpload }) file: Promise<any>) {
    const { filename, mimetype, createReadStream } = await file;

    // 将 stream 转换为 buffer
    const stream = createReadStream();
    const chunks: Buffer[] = [];

    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);

    try {
      const uploadedFile = await this.fileUploadService.uploadVideo(
        buffer,
        filename,
        mimetype,
      );

      return {
        success: true,
        file: uploadedFile,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  @Mutation(() => UploadResult, { name: 'uploadModel' })
  async uploadModel(@Args('file', { type: () => GraphQLUpload }) file: Promise<any>) {
    const { filename, mimetype, createReadStream } = await file;

    // 将 stream 转换为 buffer
    const stream = createReadStream();
    const chunks: Buffer[] = [];

    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);

    try {
      const uploadedFile = await this.fileUploadService.upload3DModel(
        buffer,
        filename,
        mimetype,
      );

      return {
        success: true,
        file: uploadedFile,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}