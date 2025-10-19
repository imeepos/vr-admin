import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { ModelModule } from '../models/model.module';

@Module({
  imports: [ModelModule],
  providers: [FileUploadService],
  exports: [FileUploadService],
})
export class FileUploadModule {}