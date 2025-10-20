import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useModels, useModel } from '@/hooks/useModels';
import { FileUpload } from '@/components/FileUpload';
import { ModelFormPreview } from '@/components/ModelFormPreview';
import { EventSimulator } from '@/components/EventSimulator';
import type { CreateModelInput, UpdateModelInput } from '@/generated/graphql';

export function CreateModelPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  const { createModel, updateModel, isCreating, isUpdating } = useModels();
  const { model, isLoading: isLoadingModel } = useModel(id || '');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateModelInput>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  // Watch form values for real-time preview
  const watchedTitle = watch('title');
  const watchedDescription = watch('description');

  const [backgroundImageFile, setBackgroundImageFile] = useState<File | null>(
    null,
  );
  const [backgroundVideoFile, setBackgroundVideoFile] = useState<File | null>(
    null,
  );
  const [modelFile, setModelFile] = useState<File | null>(null);
  const [isFullscreenMode, setIsFullscreenMode] = useState<boolean>(false);

  useEffect(() => {
    if (isEditing && model) {
      setValue('title', model.title);
      setValue('description', model.description || '');
    }
  }, [isEditing, model, setValue]);

  const onSubmit = async (data: CreateModelInput) => {
    try {
      const submitData = {
        ...data,
        backgroundImage: backgroundImageFile || undefined,
        backgroundVideo: backgroundVideoFile || undefined,
        modelFile: modelFile || undefined,
      };

      if (isEditing && id) {
        await updateModel(id, submitData as UpdateModelInput);
      } else {
        await createModel(submitData);
      }

      navigate('/dashboard/models');
    } catch (error) {
      console.error('Save failed:', error);
    }
  };

  const isLoading = isLoadingModel || isCreating || isUpdating;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {isEditing ? '编辑模型' : '创建新模型'}
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              {isEditing
                ? '修改模型的配置和媒体文件。'
                : '创建一个新的 VR 模型并配置相关参数。'}
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <EventSimulator currentFullscreenMode={isFullscreenMode} />
            <button
              type="button"
              onClick={() => navigate('/dashboard/models')}
              className="btn btn-secondary px-4 py-2"
            >
              取消
            </button>
            <button
              type="submit"
              form="model-form"
              disabled={isLoading}
              className="btn btn-primary disabled:opacity-50 px-4 py-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {isEditing ? '更新中…' : '创建中…'}
                </>
              ) : (
                <>{isEditing ? '更新模型' : '创建模型'}</>
              )}
            </button>
          </div>
        </div>
      </div>

      {isLoadingModel ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
          {/* Left Column - Form */}
          <div className="order-2 lg:order-1">
            <form id="model-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">基本信息</h3>
              <p className="card-description">设置模型的基本信息和描述。</p>
            </div>
            <div className="card-content space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  标题 *
                </label>
                <input
                  id="title"
                  type="text"
                  className={`input mt-1 ${errors.title ? 'border-red-500' : ''}`}
                  placeholder="输入模型标题"
                  {...register('title', {
                    required: '请输入模型标题',
                    maxLength: {
                      value: 200,
                      message: '标题不能超过 200 个字符',
                    },
                  })}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  描述
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className={`input mt-1 ${errors.description ? 'border-red-500' : ''}`}
                  placeholder="输入模型描述（可选）"
                  {...register('description', {
                    maxLength: {
                      value: 2000,
                      message: '描述不能超过 2000 个字符',
                    },
                  })}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">背景图片</h3>
              <p className="card-description">
                上传模型的背景图片。支持 JPEG、PNG、GIF、WebP 格式，最大 10MB。
              </p>
            </div>
            <div className="card-content">
              <FileUpload
                accept={['image/jpeg', 'image/png', 'image/gif', 'image/webp']}
                maxSize={10 * 1024 * 1024}
                value={backgroundImageFile}
                onChange={setBackgroundImageFile}
                preview={model?.backgroundImage}
              />
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">背景视频</h3>
              <p className="card-description">
                上传模型的背景视频。支持 MP4、WebM、OGG 格式，最大 100MB。
              </p>
            </div>
            <div className="card-content">
              <FileUpload
                accept={['video/mp4', 'video/webm', 'video/ogg']}
                maxSize={100 * 1024 * 1024}
                value={backgroundVideoFile}
                onChange={setBackgroundVideoFile}
                preview={model?.backgroundVideo}
              />
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">3D 模型文件</h3>
              <p className="card-description">
                上传 3D 模型文件。支持 GLB、GLTF 格式，最大 200MB。
              </p>
            </div>
            <div className="card-content">
              <FileUpload
                accept={['model/gltf+json', 'model/gltf-binary']}
                maxSize={200 * 1024 * 1024}
                value={modelFile}
                onChange={setModelFile}
                preview={model?.modelFile}
              />
              {model?.modelFile && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-600">
                    <div>
                      <strong>文件名：</strong>
                      {model.modelFileName}
                    </div>
                    <div>
                      <strong>文件大小：</strong>
                      {(model.modelFileSize! / 1024 / 1024).toFixed(2)} MB
                    </div>
                    <div>
                      <strong>文件类型：</strong>
                      {model.modelFileType?.toUpperCase()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

            </form>
          </div>

          {/* Right Column - Preview */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-8 lg:h-fit">
            <div className="card h-full">
              <div className="card-content">
                <ModelFormPreview
                  title={watchedTitle}
                  description={watchedDescription}
                  backgroundImageFile={backgroundImageFile}
                  backgroundVideoFile={backgroundVideoFile}
                  modelFile={modelFile}
                  backgroundImagePreview={model?.backgroundImage}
                  backgroundVideoPreview={model?.backgroundVideo}
                  modelFilePreview={model?.modelFile}
                  isMobilePreview={true}
                  onFullscreenModeChange={setIsFullscreenMode}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
