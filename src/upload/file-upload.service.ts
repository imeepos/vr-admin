import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export interface UploadedFile {
  filename: string;
  originalName: string;
  mimetype: string;
  size: number;
  path: string;
  url: string;
}

@Injectable()
export class FileUploadService {
  private readonly uploadDir = './public/uploads';
  private readonly baseUrl = 'http://localhost:3002';

  constructor() {
    this.ensureUploadDir();
  }

  private async ensureUploadDir() {
    try {
      await fs.access(this.uploadDir);
    } catch {
      await fs.mkdir(this.uploadDir, { recursive: true });
    }
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

  private async saveFile(buffer: Buffer, filename: string): Promise<string> {
    const filePath = join(this.uploadDir, filename);
    await fs.writeFile(filePath, buffer);
    return filePath;
  }

  async uploadImage(buffer: Buffer, originalName: string, mimetype: string): Promise<UploadedFile> {
    if (!this.isAllowedImageType(mimetype)) {
      throw new Error('不支持的图片格式。仅支持 JPEG、PNG、GIF、WebP 格式。');
    }

    if (buffer.length > 10 * 1024 * 1024) { // 10MB
      throw new Error('图片文件大小不能超过 10MB。');
    }

    const filename = this.generateUniqueFilename(originalName);
    const path = await this.saveFile(buffer, filename);
    const url = `${this.baseUrl}/uploads/${filename}`;

    return {
      filename,
      originalName,
      mimetype,
      size: buffer.length,
      path,
      url,
    };
  }

  async uploadVideo(buffer: Buffer, originalName: string, mimetype: string): Promise<UploadedFile> {
    if (!this.isAllowedVideoType(mimetype)) {
      throw new Error('不支持的视频格式。仅支持 MP4、WebM、OGG 格式。');
    }

    if (buffer.length > 100 * 1024 * 1024) { // 100MB
      throw new Error('视频文件大小不能超过 100MB。');
    }

    const filename = this.generateUniqueFilename(originalName);
    const path = await this.saveFile(buffer, filename);
    const url = `${this.baseUrl}/uploads/${filename}`;

    return {
      filename,
      originalName,
      mimetype,
      size: buffer.length,
      path,
      url,
    };
  }

  async deleteFile(filename: string): Promise<boolean> {
    try {
      const filePath = join(this.uploadDir, filename);
      await fs.unlink(filePath);
      return true;
    } catch {
      return false;
    }
  }
}