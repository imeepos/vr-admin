import { useEffect, useRef, useCallback } from 'react';
import { useUSDZExport } from '@/hooks/useUSDZExport';

interface ModelPreviewProps {
  modelUrl?: string;
  modelId?: string;
  className?: string;
  onModelLoad?: (modelUrl: string) => void;
  onIOSModelGenerated?: (iosModelUrl: string) => void;
  transparent?: boolean;
  cameraControls?: boolean;
  autoRotate?: boolean;
  enableIOSExport?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'needle-engine': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          'background-color'?: string;
          transparent?: boolean;
          contactshadows?: boolean;
          'tone-mapping'?: string;
          'tone-mapping-exposure'?: number;
          'camera-controls'?: boolean;
          'auto-rotate'?: boolean;
          'hide-loading-overlay'?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

const isServer = () => typeof window === 'undefined';

export function ModelPreview({
  modelUrl,
  modelId,
  className = '',
  onModelLoad,
  onIOSModelGenerated,
  transparent = true,
  cameraControls = true,
  autoRotate = true,
  enableIOSExport = true
}: ModelPreviewProps) {
  const needleEngineRef = useRef<HTMLElement | null>(null);

  const { exportToUSDZ, isExporting } = useUSDZExport(
    modelId || 'model',
    {
      autoExportAnimations: true,
      autoExportAudioSources: true,
      physics: true,
    }
  );

  const handleModelLoad = useCallback(async () => {
    if (modelUrl && onModelLoad) {
      onModelLoad(modelUrl);
    }

    if (enableIOSExport && modelId && !isExporting) {
      try {
        const result = await exportToUSDZ();

        if (result.success && result.iosModelUrl && onIOSModelGenerated) {
          onIOSModelGenerated(result.iosModelUrl);
          console.log('[ModelPreview] iOS USDZ 模型生成成功:', result.iosModelUrl);
        }
      } catch (error) {
        console.error('[ModelPreview] iOS USDZ 导出失败:', error);
      }
    }
  }, [modelUrl, modelId, onModelLoad, onIOSModelGenerated, enableIOSExport, exportToUSDZ, isExporting]);

  useEffect(() => {
    if (isServer() || !modelUrl) return;

    let mounted = true;

    import('@needle-tools/engine').then((needle) => {
      if (!mounted) return;

      needle.onStart((ctx) => {
        if (ctx.menu) {
          ctx.menu.showNeedleLogo(false);
          ctx.menu.showFullscreenOption(false);
        }
      });

      needle.onInitialized(() => {
        console.log('[ModelPreview] 模型加载完成:', modelUrl);
        handleModelLoad();
      });
    }).catch((error) => {
      console.error('[ModelPreview] 引擎初始化失败:', error);
    });

    return () => {
      mounted = false;
    };
  }, [modelUrl, handleModelLoad]);

  if (isServer() || !modelUrl) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
      >
        <div className="text-center text-gray-500">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <p className="mt-2 text-sm">
            {modelUrl ? '加载中...' : '暂无模型预览'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${transparent ? 'bg-transparent' : 'bg-gray-900'} rounded-lg overflow-hidden ${className}`}>
      <needle-engine
        ref={needleEngineRef as any}
        src={modelUrl}
        background-color={transparent ? 'transparent' : '#1f2937'}
        transparent={transparent}
        contactshadows={true}
        tone-mapping="agx"
        tone-mapping-exposure={1}
        camera-controls={cameraControls}
        auto-rotate={autoRotate}
        hide-loading-overlay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
