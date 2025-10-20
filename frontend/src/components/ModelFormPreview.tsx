import { useEffect, useState, useCallback } from 'react';
import { ModelPreview } from './ModelPreview';
import { MobilePreviewFrame } from './MobilePreviewFrame';
import { ARButton } from './ARButton';
import ARBridge from '@/utils/arBridge';
import { OnModelDownloadSuccessEvent, SwitchFullscreenEvent } from '@/types/ar';

interface ModelFormPreviewProps {
  title?: string;
  description?: string;
  backgroundImageFile?: File | null;
  backgroundVideoFile?: File | null;
  modelFile?: File | null;
  backgroundImagePreview?: string;
  backgroundVideoPreview?: string;
  modelFilePreview?: string;
  isMobilePreview?: boolean;
  onFullscreenModeChange?: (isFullscreen: boolean) => void;
}

export function ModelFormPreview({
  title,
  description,
  backgroundImageFile,
  backgroundVideoFile,
  modelFile,
  backgroundImagePreview,
  backgroundVideoPreview,
  modelFilePreview,
  isMobilePreview = true,
  onFullscreenModeChange,
}: ModelFormPreviewProps) {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>('');
  const [backgroundVideoUrl, setBackgroundVideoUrl] = useState<string>('');
  const [modelUrl, setModelUrl] = useState<string>('');
  const [showViewInAr, setShowViewInAr] = useState<boolean>(false);
  const [isFullscreenMode, setIsFullscreenMode] = useState<boolean>(false);

  // Create object URLs for uploaded files with error handling
  useEffect(() => {
    let mounted = true;

    if (backgroundImageFile) {
      try {
        const url = URL.createObjectURL(backgroundImageFile);
        if (mounted) {
          setBackgroundImageUrl(url);
          console.log('[ModelFormPreview] 背景图片 URL 创建成功:', url);
        }
        return () => {
          URL.revokeObjectURL(url);
          console.log('[ModelFormPreview] 背景图片 URL 已清理');
        };
      } catch (error) {
        console.error('[ModelFormPreview] 创建背景图片 URL 失败:', error);
        if (mounted) setBackgroundImageUrl('');
      }
    } else if (backgroundImagePreview) {
      if (mounted) setBackgroundImageUrl(backgroundImagePreview);
    } else {
      if (mounted) setBackgroundImageUrl('');
    }

    return () => {
      mounted = false;
    };
  }, [backgroundImageFile, backgroundImagePreview]);

  useEffect(() => {
    let mounted = true;

    if (backgroundVideoFile) {
      try {
        const url = URL.createObjectURL(backgroundVideoFile);
        if (mounted) {
          setBackgroundVideoUrl(url);
          console.log('[ModelFormPreview] 背景视频 URL 创建成功:', url);
        }
        return () => {
          URL.revokeObjectURL(url);
          console.log('[ModelFormPreview] 背景视频 URL 已清理');
        };
      } catch (error) {
        console.error('[ModelFormPreview] 创建背景视频 URL 失败:', error);
        if (mounted) setBackgroundVideoUrl('');
      }
    } else if (backgroundVideoPreview) {
      if (mounted) setBackgroundVideoUrl(backgroundVideoPreview);
    } else {
      if (mounted) setBackgroundVideoUrl('');
    }

    return () => {
      mounted = false;
    };
  }, [backgroundVideoFile, backgroundVideoPreview]);

  useEffect(() => {
    let mounted = true;

    if (modelFile) {
      try {
        const url = URL.createObjectURL(modelFile);
        if (mounted) {
          setModelUrl(url);
          console.log('[ModelFormPreview] 模型文件 URL 创建成功:', url);
        }
        return () => {
          URL.revokeObjectURL(url);
          console.log('[ModelFormPreview] 模型文件 URL 已清理');
        };
      } catch (error) {
        console.error('[ModelFormPreview] 创建模型文件 URL 失败:', error);
        if (mounted) setModelUrl('');
      }
    } else if (modelFilePreview) {
      if (mounted) setModelUrl(modelFilePreview);
    } else {
      if (mounted) setModelUrl('');
    }

    return () => {
      mounted = false;
    };
  }, [modelFile, modelFilePreview]);

  const onModelLoad = useCallback((modelUrl: string) => {
    console.log(`[ModelFormPreview] 模型加载完成: ${modelUrl}`);

    const arBridge = ARBridge.getInstance();
    arBridge.simulateModelDownloadSuccess(modelUrl);
  }, []);

  const onModelDownloadSuccess = useCallback(
    (event: OnModelDownloadSuccessEvent) => {
      console.log(
        `[ModelFormPreview] onModelDownloadSuccess ${JSON.stringify(event)} ${event.data.modelId} === ${modelUrl}`,
      );
      if (event && event.data && event.data.modelId === modelUrl) {
        setShowViewInAr(true);
      }
    },
    [modelUrl],
  );

  const handleToggleFullscreen = useCallback(
    (isFullscreen: boolean) => {
      setIsFullscreenMode(isFullscreen);
      onFullscreenModeChange?.(isFullscreen);
    },
    [onFullscreenModeChange],
  );

  const handleSwitchFullscreenEvent = useCallback(
    (event: SwitchFullscreenEvent) => {
      console.log(
        `[ModelFormPreview] 收到切换全屏事件: ${JSON.stringify(event.data)}`,
      );
      const isFullscreen = !!event.data.fullScreen;
      setIsFullscreenMode(isFullscreen);
      onFullscreenModeChange?.(isFullscreen);
    },
    [onFullscreenModeChange],
  );

  useEffect(() => {
    if (!modelUrl) return;

    const arBridge = ARBridge.getInstance();
    arBridge.listen('MODEL_DOWNLOAD_SUCCESS', onModelDownloadSuccess);
    arBridge.listen('SWITCH_FULLSCREEN', handleSwitchFullscreenEvent);

    return () => {
      arBridge.silence('MODEL_DOWNLOAD_SUCCESS', onModelDownloadSuccess);
      arBridge.silence('SWITCH_FULLSCREEN', handleSwitchFullscreenEvent);
    };
  }, [modelUrl, onModelDownloadSuccess, handleSwitchFullscreenEvent]);

  const renderBackground = (isMobile = false) => {
    // 根据预览模式切换背景：!isFullscreenMode && showViewInAr 时显示视频，否则显示图片
    const shouldShowVideo = !isFullscreenMode && showViewInAr;

    // 计算透明区域样式 - 参考 preview.md 的实现
    const transparentAreaStyle = isFullscreenMode
      ? { bottom: '0' }
      : { bottom: '33.33%' }; // 底部1/3透明

    if (shouldShowVideo && backgroundVideoUrl) {
      return (
        <div
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={transparentAreaStyle}
        >
          <video
            src={backgroundVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            preload="metadata"
            className={`w-full h-full object-cover ${isMobile ? 'object-center' : ''}`}
            style={{
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
            }}
            onLoadStart={() => console.log('[VideoBackground] 开始加载')}
            onCanPlay={() => console.log('[VideoBackground] 可以播放')}
            onError={(e) => console.error('[VideoBackground] 加载错误:', e)}
          />
          <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-white/10 to-white/2" />
        </div>
      );
    }

    if (backgroundImageUrl) {
      return (
        <div
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={transparentAreaStyle}
        >
          <img
            src={backgroundImageUrl}
            alt="Background"
            className={`w-full h-full object-cover ${isMobile ? 'object-center' : ''}`}
            style={{
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
            }}
            onLoad={() => console.log('[ImageBackground] 加载完成')}
            onError={(e) => console.error('[ImageBackground] 加载错误:', e)}
          />
        </div>
      );
    }

    // Default gradient background - 为移动端优化
    return (
      <div
        className={`absolute top-0 left-0 right-0 overflow-hidden ${
          isMobile
            ? 'bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600'
            : 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500'
        }`}
        style={transparentAreaStyle}
      />
    );
  };

  const renderMobileContent = () => {
    if (modelUrl) {
      return (
        <div className="relative w-full h-full">
          {/* Background layer - 移动端层级优化 */}
          {renderBackground(true)}

          {/* 3D Model */}
          <ModelPreview
            modelUrl={modelUrl}
            className="w-full h-full relative z-10"
            onModelLoad={onModelLoad}
            transparent={true}
            cameraControls={true}
            autoRotate={true}
          />

          {/* AR Button */}
          {showViewInAr && (
            <ARButton
              modelId={modelUrl}
              isFullscreenMode={isFullscreenMode}
              onToggleFullscreen={handleToggleFullscreen}
            />
          )}
        </div>
      );
    }

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
        {/* Background */}
        {renderBackground(true)}

        {/* Placeholder content - 移动端优化 */}
        <div className="text-center text-white relative z-10">
          <svg
            className="mx-auto h-16 w-16 text-white/60 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <h3 className="text-lg font-semibold mb-2 leading-tight">
            {title || 'VR 模型预览'}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed px-2">
            {description || '上传 3D 模型文件以查看实时预览'}
          </p>
        </div>
      </div>
    );
  };

  const renderDesktopContent = () => {
    if (modelUrl) {
      return (
        <div className="relative w-full h-full">
          {/* Background layer */}
          {renderBackground(false)}

          {/* 3D Model */}
          <ModelPreview
            modelUrl={modelUrl}
            className="w-full h-full relative z-10"
            onModelLoad={onModelLoad}
            transparent={true}
            cameraControls={true}
            autoRotate={true}
          />

          {/* AR Button */}
          {showViewInAr && (
            <ARButton
              modelId={modelUrl}
              isFullscreenMode={isFullscreenMode}
              onToggleFullscreen={handleToggleFullscreen}
            />
          )}

          {/* Model info overlay */}
          {(title || description) && (
            <div className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-sm rounded-lg p-4 text-white">
              {title && <h3 className="text-lg font-semibold">{title}</h3>}
              {description && (
                <p className="text-sm opacity-90 mt-1">{description}</p>
              )}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Background */}
        {renderBackground(false)}

        {/* Placeholder content */}
        <div className="text-center text-white relative z-10">
          <svg
            className="mx-auto h-24 w-24 text-white/60 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2">
            {title || 'VR 模型预览'}
          </h3>
          <p className="text-white/80 max-w-sm">
            {description || '上传 3D 模型文件以查看实时预览'}
          </p>
        </div>
      </div>
    );
  };

  if (isMobilePreview) {
    return <MobilePreviewFrame>{renderMobileContent()}</MobilePreviewFrame>;
  }

  return (
    <div className="w-full h-full min-h-[600px] bg-gray-900 rounded-lg overflow-hidden relative">
      {renderDesktopContent()}
    </div>
  );
}
