import { useCallback, useState } from 'react';
import { uploadRequest } from '@/utils/graphql';
import { UPLOAD_IOS_MODEL_MUTATION } from '@/generated/graphql';
import { Context, USDZExporter } from '@needle-tools/engine';

export interface USDZExportOptions {
  autoExportAnimations?: boolean;
  autoExportAudioSources?: boolean;
  physics?: boolean;
}

export interface USDZExportResult {
  success: boolean;
  iosModelUrl?: string;
  blob?: Blob;
  filename?: string;
  error?: Error;
}

export interface USDZBlobResult {
  blob: Blob;
  filename: string;
}

export function useUSDZExport(
  modelId: string,
  options: USDZExportOptions = {
    autoExportAnimations: true,
    autoExportAudioSources: true,
    physics: true,
  },
) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<Error | null>(null);

  const generateFilename = useCallback(() => {
    const fallback = 'model';
    const normalized = (modelId || fallback)
      .trim()
      .replace(/[^a-zA-Z0-9_-]+/g, '_');
    return `${normalized || fallback}.usdz`;
  }, [modelId]);

  const generateUSDZBlob = useCallback(
    async (context: Context): Promise<USDZBlobResult> => {
      if (!context || !context.scene) {
        throw new Error('Needle Engine context not initialized');
      }

      const exporter: USDZExporter =
        context.scene.getOrAddComponent(USDZExporter);
      console.log('usdzExporter', exporter);
      console.log('usdzExporter scene', exporter.scene);
      const blob = await exporter.exportAndOpen();
      if (!blob || blob.size === 0) {
        throw new Error('USDZ export failed - empty file generated');
      }

      if (blob.size < 1024) {
        console.warn(
          `[USDZExport] Exported USDZ size is only ${blob.size} bytes. Verify the scene contents are fully loaded.`,
        );
      }

      return {
        blob,
        filename: generateFilename(),
      };
    },
    [
      options.autoExportAnimations,
      options.autoExportAudioSources,
      options.physics,
      generateFilename,
    ],
  );

  const exportUSDZBlob = useCallback(
    async (context: Context): Promise<USDZBlobResult> => {
      setIsExporting(true);
      setExportError(null);

      try {
        const result = await generateUSDZBlob(context);
        return result;
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        setExportError(err);
        throw err;
      } finally {
        setIsExporting(false);
      }
    },
    [generateUSDZBlob],
  );

  const exportToUSDZ = useCallback(
    async (context: Context): Promise<USDZExportResult> => {
      setIsExporting(true);
      setExportError(null);

      try {
        const { blob, filename } = await generateUSDZBlob(context);
        const file = new File([blob], filename, {
          type: 'model/vnd.usdz+zip',
        });

        const uploadResult = await uploadRequest(UPLOAD_IOS_MODEL_MUTATION, {
          file,
        });

        if (!uploadResult.data?.uploadIOSModel?.success) {
          throw new Error('USDZ upload failed');
        }

        const iosModelUrl = uploadResult.data.uploadIOSModel.file.url;
        return {
          success: true,
          iosModelUrl,
          blob,
          filename,
        };
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        setExportError(err);
        return {
          success: false,
          error: err,
        };
      } finally {
        setIsExporting(false);
      }
    },
    [generateUSDZBlob],
  );

  return {
    exportToUSDZ,
    exportUSDZBlob,
    isExporting,
    exportError,
  };
}
