import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { IStorageAdapter, UploadedFile } from './storage/storage.interface';
import { StorageFactory } from './storage/storage.factory';

@Injectable()
export class FileUploadService {
  private readonly storageAdapter: IStorageAdapter;
  private readonly logger = new Logger(FileUploadService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly storageFactory: StorageFactory
  ) {
    this.storageAdapter = this.storageFactory.createStorageAdapter();
    this.logger.log(`File upload service initialized with ${this.configService.get('app.storageType', 'LOCAL')} storage`);
  }


  private getFileExtension(filename: string): string {
    return filename.split('.').pop() || '';
  }

  private generateUniqueFilename(originalName: string): string {
    const extension = this.getFileExtension(originalName);
    const uniqueId = uuidv4();
    return extension ? `${uniqueId}.${extension}` : uniqueId;
  }

  private isAllowedImageType(mimetype: string): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    return allowedTypes.includes(mimetype);
  }

  private isAllowedVideoType(mimetype: string): boolean {
    const allowedTypes = ['video/mp4', 'video/webm', 'video/ogg'];
    return allowedTypes.includes(mimetype);
  }

  private isAllowed3DModelType(mimetype: string): boolean {
    const allowedTypes = ['model/gltf+json', 'model/gltf-binary'];
    return allowedTypes.includes(mimetype);
  }

  private isAllowed3DModelExtension(filename: string): boolean {
    const extension = this.getFileExtension(filename).toLowerCase();
    const allowedExtensions = ['glb', 'gltf'];
    return allowedExtensions.includes(extension);
  }


  async uploadImage(buffer: Buffer, originalName: string, mimetype: string): Promise<UploadedFile> {
    if (!this.isAllowedImageType(mimetype)) {
      throw new Error('不支持的图片格式。仅支持 JPEG、PNG、GIF、WebP 格式。');
    }

    if (buffer.length > 10 * 1024 * 1024) { // 10MB
      throw new Error('图片文件大小不能超过 10MB。');
    }

    const filename = this.generateUniqueFilename(originalName);
    return await this.storageAdapter.uploadFile(buffer, filename, mimetype);
  }

  async uploadVideo(buffer: Buffer, originalName: string, mimetype: string): Promise<UploadedFile> {
    if (!this.isAllowedVideoType(mimetype)) {
      throw new Error('不支持的视频格式。仅支持 MP4、WebM、OGG 格式。');
    }

    if (buffer.length > 100 * 1024 * 1024) { // 100MB
      throw new Error('视频文件大小不能超过 100MB。');
    }

    const filename = this.generateUniqueFilename(originalName);
    return await this.storageAdapter.uploadFile(buffer, filename, mimetype);
  }

  async upload3DModel(buffer: Buffer, originalName: string, mimetype: string): Promise<UploadedFile> {
    // 检查文件扩展名，因为某些浏览器可能无法正确识别3D模型的MIME类型
    if (!this.isAllowed3DModelType(mimetype) && !this.isAllowed3DModelExtension(originalName)) {
      throw new Error('不支持的3D模型格式。仅支持 GLB、GLTF 格式。');
    }

    if (buffer.length > 200 * 1024 * 1024) { // 200MB
      throw new Error('3D模型文件大小不能超过 200MB。');
    }

    // 根据文件扩展名确定正确的MIME类型
    const extension = this.getFileExtension(originalName).toLowerCase();
    let correctMimeType = mimetype;

    if (extension === 'glb') {
      correctMimeType = 'model/gltf-binary';
    } else if (extension === 'gltf') {
      correctMimeType = 'model/gltf+json';
    }

    const filename = this.generateUniqueFilename(originalName);
    return await this.storageAdapter.uploadFile(buffer, filename, correctMimeType);
  }

  async deleteFile(filename: string): Promise<boolean> {
    return await this.storageAdapter.deleteFile(filename);
  }
}
