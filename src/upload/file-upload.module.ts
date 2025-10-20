import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileUploadService } from './file-upload.service';
import { StorageFactory } from './storage/storage.factory';
import { ModelModule } from '../models/model.module';
import s3Config from '../config/s3.config';

@Module({
  imports: [
    ModelModule,
    ConfigModule.forFeature(s3Config),
  ],
  providers: [FileUploadService, StorageFactory],
  exports: [FileUploadService],
})
export class FileUploadModule {}