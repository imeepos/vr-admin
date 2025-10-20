import { ReactNode } from 'react';

interface MobilePreviewFrameProps {
  children: ReactNode;
  className?: string;
}

export function MobilePreviewFrame({ children, className = '' }: MobilePreviewFrameProps) {
  return (
    <div className={`flex justify-center items-center p-8 ${className}`}>
      <div className="relative">
        {/* 手机外壳 */}
        <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
          {/* 手机屏幕区域 */}
          <div className="relative bg-black rounded-[2rem] overflow-hidden">
            {/* 状态栏 */}
            <div className="relative bg-black h-6 flex items-center justify-between px-6 text-white text-xs">
              <div className="flex items-center space-x-1">
                <div className="text-white">9:41</div>
              </div>
              <div className="flex items-center space-x-1">
                {/* 信号图标 */}
                <div className="flex space-x-1">
                  <div className="w-1 h-2 bg-white rounded-full"></div>
                  <div className="w-1 h-3 bg-white rounded-full"></div>
                  <div className="w-1 h-4 bg-white rounded-full"></div>
                  <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                </div>
                {/* WiFi 图标 */}
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.24 0 1 1 0 01-1.415-1.414 5 5 0 017.07 0 1 1 0 01-1.415 1.414zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                {/* 电池图标 */}
                <div className="relative">
                  <div className="w-6 h-3 border border-white/60 rounded-sm">
                    <div className="w-4 h-1.5 bg-white rounded-sm m-0.5"></div>
                  </div>
                  <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/60 rounded-r-sm"></div>
                </div>
              </div>
            </div>

            {/* 屏幕内容区域 */}
            <div
              className="relative w-full bg-red-500 overflow-hidden"
              style={{
                aspectRatio: '9 / 19.5',
                minHeight: '600px',
                maxHeight: '800px',
                width: '320px'
              }}
            >
              {children}
            </div>

            {/* 底部导航区域 - 透明背景 */}
            <div className="h-8 flex items-center justify-center">
              <div className="w-32 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>

          {/* 手机按键 */}
          <div className="absolute -right-1 top-20 w-1 h-8 bg-gray-700 rounded-r-lg"></div>
          <div className="absolute -right-1 top-32 w-1 h-12 bg-gray-700 rounded-r-lg"></div>
          <div className="absolute -right-1 top-48 w-1 h-12 bg-gray-700 rounded-r-lg"></div>
        </div>

        {/* 手机阴影效果 */}
        <div className="absolute inset-0 rounded-[2.5rem] shadow-lg opacity-20 pointer-events-none"></div>
      </div>
    </div>
  );
}