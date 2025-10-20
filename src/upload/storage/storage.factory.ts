import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IStorageAdapter } from './storage.interface';
import { LocalStorageAdapter } from './local-storage.adapter';
import { S3StorageAdapter } from './s3-storage.adapter';

@Injectable()
export class StorageFactory {
  constructor(private readonly configService: ConfigService) {}

  createStorageAdapter(): IStorageAdapter {
    const storageType = this.configService.get<string>('app.storageType', 'LOCAL');

    switch (storageType.toUpperCase()) {
      case 'S3':
        return new S3StorageAdapter(this.configService);
      case 'LOCAL':
      default:
        return new LocalStorageAdapter(this.configService);
    }
  }
}