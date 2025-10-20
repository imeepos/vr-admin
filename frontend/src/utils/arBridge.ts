interface ARBridgeEvent {
  type: string;
  data: any;
}

interface ARBridgeListener {
  (event: any): void;
}

class ARBridge {
  private static instance: ARBridge;
  private listeners: Map<string, Set<ARBridgeListener>> = new Map();

  private constructor() {
    if (typeof window !== 'undefined') {
      this.setupWebViewCommunication();
    }
  }

  static getInstance(): ARBridge {
    if (!ARBridge.instance) {
      ARBridge.instance = new ARBridge();
    }
    return ARBridge.instance;
  }

  private setupWebViewCommunication() {
    if (typeof window !== 'undefined' && (window as any).webkit?.messageHandlers?.arBridge) {
      console.log('[ARBridge] WebView 环境检测成功');
    }
  }

  isWebViewConnected(): boolean {
    return typeof window !== 'undefined' &&
           !!(window as any).webkit?.messageHandlers?.arBridge;
  }

  sendToNative(event: ARBridgeEvent): void {
    try {
      if (this.isWebViewConnected()) {
        (window as any).webkit.messageHandlers.arBridge.postMessage(event);
        console.log('[ARBridge] 发送事件到原生应用:', event);
      } else {
        console.log('[ARBridge] 浏览器环境，模拟发送事件:', event);
        this.emit(event.type, event);
      }
    } catch (error) {
      console.error('[ARBridge] 发送事件失败:', error);
    }
  }

  listen(eventType: string, listener: ARBridgeListener): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }
    this.listeners.get(eventType)?.add(listener);
    console.log(`[ARBridge] 添加监听器: ${eventType}`);
  }

  silence(eventType: string, listener: ARBridgeListener): void {
    this.listeners.get(eventType)?.delete(listener);
    console.log(`[ARBridge] 移除监听器: ${eventType}`);
  }

  emit(eventType: string, event: ARBridgeEvent): void {
    const listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.forEach(listener => {
        try {
          listener(event);
        } catch (error) {
          console.error(`[ARBridge] 事件监听器执行失败 ${eventType}:`, error);
        }
      });
    }
  }

  simulateModelDownloadSuccess(modelId: string): void {
    const event: ARBridgeEvent = {
      type: 'MODEL_DOWNLOAD_SUCCESS',
      data: { modelId, timestamp: Date.now() }
    };
    this.emit('MODEL_DOWNLOAD_SUCCESS', event);
  }

  simulateFullscreenSwitch(fullScreen: boolean): void {
    const event: ARBridgeEvent = {
      type: 'SWITCH_FULLSCREEN',
      data: { fullScreen, timestamp: Date.now() }
    };
    this.emit('SWITCH_FULLSCREEN', event);
  }

  simulateOpenAR(modelId: string): void {
    const event: ARBridgeEvent = {
      type: 'OPEN_AR',
      data: { modelId, timestamp: Date.now() }
    };
    console.log('[ARBridge] 模拟启动 AR 模式:', event);
    this.emit('OPEN_AR', event);
  }
}

export default ARBridge;

export type { ARBridgeEvent, ARBridgeListener };