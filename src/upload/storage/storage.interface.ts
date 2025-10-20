export interface UploadedFile {
  filename: string;
  originalName: string;
  mimetype: string;
  size: number;
  path: string;
  url: string;
}

export interface IStorageAdapter {
  uploadFile(buffer: Buffer, filename: string, mimetype: string): Promise<UploadedFile>;
  deleteFile(filename: string): Promise<boolean>;
}