import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService, UploadedFile as UploadedFileType } from './file-upload.service';
import { CreateModelInput } from '../dto/create-model.input';
import { ModelService } from '../models/model.service';

// 声明 Multer.File 类型以避免导入错误
interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

declare global {
  namespace Express {
    namespace Multer {
      interface File extends MulterFile {}
    }
  }
}

@Controller('upload')
export class FileUploadController {
  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly modelService: ModelService,
  ) {}

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('请选择要上传的图片文件');
    }

    try {
      const uploadedFile = await this.fileUploadService.uploadImage(
        file.buffer,
        file.originalname,
        file.mimetype,
      );

      return {
        success: true,
        file: uploadedFile,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('video')
  @UseInterceptors(FileInterceptor('file'))
  async uploadVideo(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('请选择要上传的视频文件');
    }

    try {
      const uploadedFile = await this.fileUploadService.uploadVideo(
        file.buffer,
        file.originalname,
        file.mimetype,
      );

      return {
        success: true,
        file: uploadedFile,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('model-with-files')
  @UseInterceptors(
    FileInterceptor('backgroundImage'),
    FileInterceptor('backgroundVideo'),
  )
  async createModelWithFiles(
    @Body() createModelInput: CreateModelInput,
    @UploadedFile() backgroundImage?: Express.Multer.File,
    @UploadedFile() backgroundVideo?: Express.Multer.File,
  ) {
    try {
      let backgroundImageUrl: string | undefined;
      let backgroundVideoUrl: string | undefined;

      if (backgroundImage) {
        const uploadedImage = await this.fileUploadService.uploadImage(
          backgroundImage.buffer,
          backgroundImage.originalname,
          backgroundImage.mimetype,
        );
        backgroundImageUrl = uploadedImage.url;
      }

      if (backgroundVideo) {
        const uploadedVideo = await this.fileUploadService.uploadVideo(
          backgroundVideo.buffer,
          backgroundVideo.originalname,
          backgroundVideo.mimetype,
        );
        backgroundVideoUrl = uploadedVideo.url;
      }

      const modelData = {
        ...createModelInput,
        backgroundImage: backgroundImageUrl,
        backgroundVideo: backgroundVideoUrl,
      };

      const model = await this.modelService.create(modelData);

      return {
        success: true,
        model,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}