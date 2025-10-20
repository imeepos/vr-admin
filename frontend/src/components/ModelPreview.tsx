import { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { useUSDZExport } from '@/hooks/useUSDZExport';
import { Context } from '@needle-tools/engine';

interface ModelPreviewProps {
  modelUrl?: string;
  modelId?: string;
  iosModelUrl?: string;
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
  iosModelUrl,
  className = '',
  onModelLoad,
  onIOSModelGenerated: _onIOSModelGenerated,
  transparent = true,
  cameraControls = true,
  autoRotate = true,
  enableIOSExport = true,
}: ModelPreviewProps) {
  const needleEngineRef = useRef<HTMLElement | null>(null);
  const [isSceneReady, setIsSceneReady] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const [downloadMessage, setDownloadMessage] = useState<string | null>(null);
  const [context, setContext] = useState<Context | null>(null);

  const canDownloadIosModel = Boolean(iosModelUrl);

  const usdzExportOptions = useMemo(
    () => ({
      autoExportAnimations: true,
      autoExportAudioSources: true,
      physics: true,
    }),
    [],
  );

  const { exportUSDZBlob, isExporting, exportError } = useUSDZExport(
    modelId ?? 'model',
    usdzExportOptions,
  );

  useEffect(() => {
    setIsSceneReady(false);
    setDownloadError(null);
    setDownloadMessage(null);
  }, [modelUrl]);

  useEffect(() => {
    if (!downloadMessage) {
      return;
    }
    const timer = window.setTimeout(() => setDownloadMessage(null), 4000);
    return () => window.clearTimeout(timer);
  }, [downloadMessage]);

  useEffect(() => {
    if (!downloadError) {
      return;
    }
    const timer = window.setTimeout(() => setDownloadError(null), 5000);
    return () => window.clearTimeout(timer);
  }, [downloadError]);

  const handleDownloadUSDZ = useCallback(async () => {
    setDownloadError(null);
    setDownloadMessage(null);

    if (!context) {
      setDownloadError('Needle context is not ready yet.');
      return;
    }

    try {
      const { blob, filename } = await exportUSDZBlob(context);

      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);

      setDownloadMessage('USDZ export ready. Download started.');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'USDZ export failed.';
      setDownloadError(message);
      console.error('[ModelPreview] USDZ export failed:', error);
    }
  }, [exportUSDZBlob, context]);

  useEffect(() => {
    if (isServer() || !modelUrl) {
      return;
    }

    let mounted = true;

    import('@needle-tools/engine')
      .then((needle) => {
        if (!mounted) {
          return;
        }

        needle.onStart((ctx) => {
          if (ctx.menu) {
            ctx.menu.showNeedleLogo(false);
            ctx.menu.showFullscreenOption(false);
          }
          setContext(ctx);
          setIsSceneReady(true);
          onModelLoad?.(modelUrl);
        });

        needle.onInitialized(() => {
          console.log('[ModelPreview] Model loaded:', modelUrl);
        });
      })
      .catch((error) => {
        console.error('[ModelPreview] Engine init failed:', error);
      });

    return () => {
      mounted = false;
    };
  }, [modelUrl, onModelLoad]);

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
            {modelUrl ? 'Loading preview...' : 'No model preview'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${transparent ? 'bg-transparent' : 'bg-gray-900'} rounded-lg overflow-hidden ${className}`}
    >
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

      {enableIOSExport && (
        <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
          {canDownloadIosModel && (
            <a
              href={iosModelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-medium bg-white/85 text-gray-900 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Open USDZ
            </a>
          )}
          <button
            type="button"
            onClick={handleDownloadUSDZ}
            disabled={!isSceneReady || isExporting}
            className="px-4 py-2 rounded-md text-sm font-medium bg-white/85 text-gray-900 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isExporting ? 'Exporting...' : 'Export USDZ'}
          </button>
          {!isSceneReady && (
            <span className="rounded bg-gray-900/75 px-2 py-1 text-xs text-white/90 shadow">
              Export is available once the scene loads.
            </span>
          )}
        </div>
      )}

      {(downloadMessage || downloadError || exportError) && (
        <div className="absolute bottom-4 left-4 max-w-xs text-xs leading-relaxed space-y-2">
          {downloadMessage && (
            <div className="rounded bg-emerald-500/90 px-3 py-2 text-white shadow">
              {downloadMessage}
            </div>
          )}
          {(downloadError || exportError) && (
            <div className="rounded bg-red-500/90 px-3 py-2 text-white shadow">
              {downloadError || exportError?.message}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ModelPreview;
