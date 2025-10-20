import { useCallback } from 'react';
import ARBridge from '@/utils/arBridge';

interface EventSimulatorProps {
  currentFullscreenMode?: boolean;
}

export function EventSimulator({ currentFullscreenMode = false }: EventSimulatorProps) {
  const arBridge = ARBridge.getInstance();

  const handleSimulateFullscreenToggle = useCallback(() => {
    arBridge.simulateFullscreenSwitch(!currentFullscreenMode);
  }, [currentFullscreenMode]);

  return (
    <button
      onClick={handleSimulateFullscreenToggle}
      className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
      切换全屏模式
    </button>
  );
}

export default EventSimulator;