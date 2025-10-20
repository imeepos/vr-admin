import { Resolver, Mutation, Args, ObjectType, Field } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
import { FileUploadService } from '../upload/file-upload.service';
import { UploadedFile as UploadedFileType } from '../upload/storage/storage.interface';
import { AuthGuard } from '../auth/auth.guard';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';

interface GraphQLFileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => NodeJS.ReadableStream;
}

type GraphQLUploadArg = GraphQLFileUpload | Promise<GraphQLFileUpload>;

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
  private readonly logger = new Logger(UploadResolver.name);

  constructor(private readonly fileUploadService: FileUploadService) {}

  @Mutation(() => UploadResult, { name: 'uploadImage' })
  @UseGuards(AuthGuard)
  async uploadImage(@Args('file', { type: () => GraphQLUpload }) file: GraphQLUploadArg) {
    return this.handleUpload(file, (buffer, filename, mimetype) =>
      this.fileUploadService.uploadImage(buffer, filename, mimetype),
    );
  }

  @Mutation(() => UploadResult, { name: 'uploadVideo' })
  @UseGuards(AuthGuard)
  async uploadVideo(@Args('file', { type: () => GraphQLUpload }) file: GraphQLUploadArg) {
    return this.handleUpload(file, (buffer, filename, mimetype) =>
      this.fileUploadService.uploadVideo(buffer, filename, mimetype),
    );
  }

  @Mutation(() => UploadResult, { name: 'uploadModel' })
  @UseGuards(AuthGuard)
  async uploadModel(@Args('file', { type: () => GraphQLUpload }) file: GraphQLUploadArg) {
    return this.handleUpload(file, (buffer, filename, mimetype) =>
      this.fileUploadService.upload3DModel(buffer, filename, mimetype),
    );
  }

  private async handleUpload(
    file: GraphQLUploadArg,
    uploader: (buffer: Buffer, filename: string, mimetype: string) => Promise<UploadedFileType>,
  ): Promise<UploadResult> {
    const { filename, mimetype, createReadStream } = await this.resolveUpload(file);
    const buffer = await this.streamToBuffer(createReadStream());

    try {
      const uploadedFile = await uploader(buffer, filename, mimetype);
      return {
        success: true,
        file: uploadedFile,
      };
    } catch (error: any) {
      this.logger.error(`Upload failed for ${filename}`, error?.stack ?? error);
      throw new Error(error?.message ?? 'Upload failed');
    }
  }

  private resolveUpload(file: GraphQLUploadArg): Promise<GraphQLFileUpload> {
    return Promise.resolve(file);
  }

  private async streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
    const chunks: Buffer[] = [];

    for await (const chunk of stream as AsyncIterable<Buffer | string>) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }

    return Buffer.concat(chunks);
  }
}
