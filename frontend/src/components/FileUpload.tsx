import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudArrowUpIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ModelPreview } from './ModelPreview';

interface FileUploadProps {
  accept?: string[];
  maxSize?: number;
  maxFiles?: number;
  value?: File | null;
  onChange?: (file: File | null) => void;
  preview?: string;
  className?: string;
}

const VIDEO_REGEX = /\.(mp4|webm|ogg)(?:[?#].*)?$/i;
const MODEL_REGEX = /\.(glb|gltf)(?:[?#].*)?$/i;
const USDZ_REGEX = /\.usdz(?:[?#].*)?$/i;

const isVideoSource = (source: string) => VIDEO_REGEX.test(source);

const isModelSource = (source: string) => MODEL_REGEX.test(source);
const isUSDZSource = (source: string) => USDZ_REGEX.test(source);

export function FileUpload({
  accept = ['image/*'],
  maxSize = 10 * 1024 * 1024, // 10MB
  maxFiles = 1,
  value,
  onChange,
  preview,
  className = '',
}: FileUploadProps) {
  const [error, setError] = useState<string>('');
  const [dragActive, setDragActive] = useState(false);
  const [objectUrl, setObjectUrl] = useState<string>('');

  useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value);
      setObjectUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setObjectUrl('');
    }
  }, [value]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any[]) => {
      setError('');

      if (rejectedFiles.length > 0) {
        const rejection = rejectedFiles[0];
        if (rejection.errors.some((e: any) => e.code === 'file-too-large')) {
          setError('文件大小超过限制');
        } else if (
          rejection.errors.some((e: any) => e.code === 'file-invalid-type')
        ) {
          setError('文件类型不支持');
        } else {
          setError('文件上传失败');
        }
        return;
      }

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        onChange?.(file);
      }
    },
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept.reduce(
      (acc, type) => {
        acc[type] = [];
        return acc;
      },
      {} as Record<string, string[]>,
    ),
    maxSize,
    maxFiles,
    multiple: maxFiles > 1,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
  });

  const removeFile = () => {
    onChange?.(null);
    setError('');
  };

  const renderPreview = () => {
    if (preview) {
      if (isVideoSource(preview)) {
        return (
          <video
            src={preview}
            controls
            className="w-full h-full object-cover rounded-lg"
          />
        );
      }

      if (isModelSource(preview)) {
        return (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
            <ModelPreview modelUrl={preview} enableIOSExport={true} className="w-full h-[600px]" />
          </div>
        );
      }

      if (isUSDZSource(preview)) {
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 border border-dashed border-gray-300 rounded-lg px-6 text-center text-gray-600">
            <svg
              className="w-12 h-12 text-gray-400 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5v-9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 12l9-4.5M12 12v9m0-9L3 7.5"
              />
            </svg>
            <p className="font-medium">USDZ preview not available</p>
            <p className="text-sm text-gray-500 mt-1">Linked iOS AR asset will be used.</p>
          </div>
        );
      }

      return (
        <img
          src={preview}
          alt="Preview"
          className="w-full h-full object-cover rounded-lg"
        />
      );
    }

    if (value && objectUrl) {
      if (value.type.startsWith('video/')) {
        return (
          <video
            src={objectUrl}
            controls
            className="w-full h-full object-cover rounded-lg"
          />
        );
      }

      const isGLTFModel =
        MODEL_REGEX.test(value.name) ||
        value.type === 'model/gltf+json' ||
        value.type === 'model/gltf-binary';

      if (isGLTFModel) {
        return (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
            <ModelPreview modelUrl={objectUrl} enableIOSExport={true} className="w-full h-[600px]" />
          </div>
        );
      }

      const isUSDZFile =
        USDZ_REGEX.test(value.name) || value.type === 'model/vnd.usdz+zip';

      if (isUSDZFile) {
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 border border-dashed border-gray-300 rounded-lg px-6 text-center text-gray-600">
            <svg
              className="w-12 h-12 text-gray-400 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5v-9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 12l9-4.5M12 12v9m0-9L3 7.5"
              />
            </svg>
            <p className="font-medium">USDZ file ready</p>
            <p className="text-sm text-gray-500 mt-1">Test on an iOS device to verify AR.</p>
          </div>
        );
      }

      return (
        <img
          src={objectUrl}
          alt="Preview"
          className="w-full h-full object-cover rounded-lg"
        />
      );
    }

    return null;
  };

  const hasFile = value || preview;

  return (
    <div className={`w-full ${className}`}>
      {hasFile ? (
        <div className="relative group">
          <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            {renderPreview()}
          </div>
          <button
            type="button"
            onClick={removeFile}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
          <div className="mt-2 text-sm text-gray-600">
            {value?.name || '已上传文件'}
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            dragActive
              ? 'border-primary-500 bg-primary-50'
              : isDragActive
                ? 'border-gray-400 bg-gray-50'
                : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4">
            <p className="text-lg font-medium text-gray-900">
              点击或拖拽文件到此处上传
            </p>
            <p className="text-sm text-gray-500 mt-1">
              支持 {accept.join(', ')} 格式，最大{' '}
              {Math.round(maxSize / 1024 / 1024)}MB
            </p>
          </div>
        </div>
      )}

      {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
    </div>
  );
}
