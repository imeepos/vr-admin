import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { promises as fs } from 'fs';
import { join } from 'path';
import { IStorageAdapter, UploadedFile } from './storage.interface';

@Injectable()
export class LocalStorageAdapter implements IStorageAdapter {
  private readonly uploadDir = join(__dirname, '..', '..', '..', 'public', 'uploads');
  private readonly logger = new Logger(LocalStorageAdapter.name);
  private readonly baseUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('app.baseUrl') || 'http://0.0.0.0:3001';
    void this.ensureUploadDir();
  }

  private async ensureUploadDir() {
    try {
      await fs.access(this.uploadDir);
    } catch {
      await fs.mkdir(this.uploadDir, { recursive: true });
      this.logger.log(`Created upload directory: ${this.uploadDir}`);
    }
  }

  async uploadFile(buffer: Buffer, filename: string, mimetype: string): Promise<UploadedFile> {
    await this.ensureUploadDir();
    const filePath = join(this.uploadDir, filename);

    await fs.writeFile(filePath, buffer);
    this.logger.log(`File saved locally: ${filename} (${buffer.length} bytes)`);

    return {
      filename,
      originalName: filename,
      mimetype,
      size: buffer.length,
      path: filePath,
      url: `${this.baseUrl}/uploads/${filename}`,
    };
  }

  async deleteFile(filename: string): Promise<boolean> {
    try {
      const filePath = join(this.uploadDir, filename);
      await fs.unlink(filePath);
      this.logger.log(`File deleted: ${filename}`);
      return true;
    } catch (error) {
      this.logger.error(`Failed to delete file: ${filename}`, error);
      return false;
    }
  }
}