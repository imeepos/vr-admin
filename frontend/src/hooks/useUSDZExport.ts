import { useCallback, useState } from 'react';
import { uploadRequest } from '@/utils/graphql';
import { UPLOAD_IOS_MODEL_MUTATION } from '@/generated/graphql';

interface USDZExportOptions {
  autoExportAnimations?: boolean;
  autoExportAudioSources?: boolean;
  physics?: boolean;
}

interface USDZExportResult {
  success: boolean;
  iosModelUrl?: string;
  error?: Error;
}

export function useUSDZExport(
  modelId: string,
  options: USDZExportOptions = {
    autoExportAnimations: true,
    autoExportAudioSources: true,
    physics: true,
  }
) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<Error | null>(null);

  const exportToUSDZ = useCallback(async (): Promise<USDZExportResult> => {
    setIsExporting(true);
    setExportError(null);

    try {
      const { Context } = await import('@needle-tools/engine');
      const context = Context.Current;

      if (!context) {
        throw new Error('Needle Engine context not initialized');
      }

      const { USDZExporter } = await import('@needle-tools/engine');
      const exporter = new USDZExporter();

      exporter.autoExportAnimations = options.autoExportAnimations ?? true;
      exporter.autoExportAudioSources = options.autoExportAudioSources ?? true;
      exporter.physics = options.physics ?? true;

      const usdzBlob = await exporter.export(context.scene);

      if (!usdzBlob) {
        throw new Error('USDZ export failed - no blob returned');
      }

      const file = new File([usdzBlob], `${modelId}.usdz`, {
        type: 'model/vnd.usdz+zip',
      });

      const uploadResult = await uploadRequest(UPLOAD_IOS_MODEL_MUTATION, {
        file,
      });

      if (uploadResult.data?.uploadIOSModel?.success) {
        const iosModelUrl = uploadResult.data.uploadIOSModel.file.url;

        setIsExporting(false);
        return {
          success: true,
          iosModelUrl,
        };
      } else {
        throw new Error('USDZ upload failed');
      }
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setExportError(err);
      setIsExporting(false);

      return {
        success: false,
        error: err,
      };
    }
  }, [modelId, options]);

  return {
    exportToUSDZ,
    isExporting,
    exportError,
  };
}
