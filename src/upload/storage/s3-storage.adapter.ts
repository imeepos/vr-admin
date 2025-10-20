import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { IStorageAdapter, UploadedFile } from './storage.interface';

@Injectable()
export class S3StorageAdapter implements IStorageAdapter {
  private readonly s3Client: S3Client;
  private readonly bucket: string;
  private readonly publicBaseUrl?: string;
  private readonly logger = new Logger(S3StorageAdapter.name);

  constructor(private readonly configService: ConfigService) {
    const s3Config = this.configService.get('s3');
    this.bucket = s3Config.bucket;
    this.publicBaseUrl = s3Config.publicBaseUrl;

    this.s3Client = new S3Client({
      region: s3Config.region,
      endpoint: s3Config.endpoint,
      credentials: {
        accessKeyId: s3Config.accessKeyId,
        secretAccessKey: s3Config.secretAccessKey,
      },
      forcePathStyle: s3Config.forcePathStyle,
    });

    this.logger.log(`S3 storage initialized: bucket=${this.bucket}, region=${s3Config.region}`);
  }

  async uploadFile(buffer: Buffer, filename: string, mimetype: string): Promise<UploadedFile> {
    const key = filename;

    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      Body: buffer,
      ContentType: mimetype,
      ACL: 'public-read',
    });

    try {
      await this.s3Client.send(command);
      this.logger.log(`File uploaded to S3: ${key} (${buffer.length} bytes)`);

      const url = this.generateFileUrl(key);

      return {
        filename,
        originalName: filename,
        mimetype,
        size: buffer.length,
        path: `s3://${this.bucket}/${key}`,
        url,
      };
    } catch (error) {
      this.logger.error(`Failed to upload file to S3: ${key}`, error);
      throw new Error(`S3 upload failed: ${error.message}`);
    }
  }

  async deleteFile(filename: string): Promise<boolean> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: filename,
    });

    try {
      await this.s3Client.send(command);
      this.logger.log(`File deleted from S3: ${filename}`);
      return true;
    } catch (error) {
      this.logger.error(`Failed to delete file from S3: ${filename}`, error);
      return false;
    }
  }

  private generateFileUrl(key: string): string {
    if (this.publicBaseUrl) {
      return `${this.publicBaseUrl}/${key}`;
    }

    const s3Config = this.configService.get('s3');
    if (s3Config.endpoint) {
      return `${s3Config.endpoint}/${this.bucket}/${key}`;
    }

    return `https://${this.bucket}.s3.${s3Config.region}.amazonaws.com/${key}`;
  }
}