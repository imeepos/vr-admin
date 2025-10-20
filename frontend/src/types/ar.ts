export interface OnModelDownloadSuccessEvent {
  type: 'MODEL_DOWNLOAD_SUCCESS';
  data: {
    modelId: string;
    timestamp: number;
  };
}

export interface SwitchFullscreenEvent {
  type: 'SWITCH_FULLSCREEN';
  data: {
    fullScreen: boolean;
    modelId?: string;
    source?: string;
    timestamp: number;
  };
}

export interface OpenAREvent {
  type: 'OPEN_AR';
  data: {
    modelId: string;
    timestamp: number;
  };
}

export type AREvent = OnModelDownloadSuccessEvent | SwitchFullscreenEvent | OpenAREvent;