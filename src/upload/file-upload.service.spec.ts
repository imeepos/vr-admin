import { FileUploadService } from './file-upload.service';
import { ConfigService } from '@nestjs/config';
import { StorageFactory } from './storage/storage.factory';
import { IStorageAdapter, UploadedFile } from './storage/storage.interface';

jest.mock('uuid', () => ({
  v4: () => 'mock-uuid',
}));

describe('FileUploadService', () => {
  let service: FileUploadService;
  let storageAdapter: jest.Mocked<IStorageAdapter>;
  let uploadResult: UploadedFile;

  beforeEach(() => {
    uploadResult = {
      filename: 'generated.usdz',
      originalName: 'generated.usdz',
      mimetype: 'model/vnd.usdz+zip',
      size: 4,
      path: '/uploads/generated.usdz',
      url: 'http://localhost/uploads/generated.usdz',
    };

    storageAdapter = {
      uploadFile: jest.fn().mockResolvedValue(uploadResult),
      deleteFile: jest.fn(),
    };

    const storageFactory = {
      createStorageAdapter: jest.fn().mockReturnValue(storageAdapter),
    } as unknown as StorageFactory;

    const configService = {
      get: jest.fn().mockImplementation((key: string, defaultValue?: unknown) => {
        if (key === 'app.storageType') {
          return 'LOCAL';
        }
        return defaultValue;
      }),
    } as unknown as ConfigService;

    service = new FileUploadService(configService, storageFactory);
  });

  describe('uploadIOSModel', () => {
    it('uploads USDZ files and normalizes mimetype', async () => {
      const buffer = Buffer.from('test');
      const result = await service.uploadIOSModel(buffer, 'scene.usdz', 'application/octet-stream');

      expect(storageAdapter.uploadFile).toHaveBeenCalledTimes(1);
      const [passedBuffer, filename, mimetype] = storageAdapter.uploadFile.mock.calls[0];
      expect(passedBuffer).toBe(buffer);
      expect(filename.endsWith('.usdz')).toBe(true);
      expect(mimetype).toBe('model/vnd.usdz+zip');
      expect(result).toBe(uploadResult);
    });

    it('rejects non-USDZ uploads', async () => {
      await expect(
        service.uploadIOSModel(Buffer.from('invalid'), 'model.glb', 'model/gltf-binary'),
      ).rejects.toThrow('Unsupported iOS model format');
    });

    it('appends .usdz extension when missing', async () => {
      const buffer = Buffer.from('data');
      await service.uploadIOSModel(buffer, 'scene', 'model/vnd.usdz+zip');

      const [, filename] = storageAdapter.uploadFile.mock.calls[storageAdapter.uploadFile.mock.calls.length - 1];
      expect(filename.endsWith('.usdz')).toBe(true);
    });
  });
});
