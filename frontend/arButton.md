import { useState, useEffect, useCallback } from 'react'
import ARBridge from '@/utils/arBridge'

interface ARButtonProps {
    modelId: string;
    isFullscreenMode?: boolean;
    onToggleFullscreen?: (isFullscreen: boolean) => void;
}

// AR按钮组件
export function ARButton({ modelId, isFullscreenMode = false, onToggleFullscreen }: ARButtonProps) {
    const [isLoading, setIsLoading] = useState(false)
    const handleViewInAr = useCallback(() => {
        setIsLoading(true)

        try {
            const arBridge = ARBridge.getInstance()
            // WebView环境：发送事件给原生应用
            arBridge.sendToNative({
                type: 'OPEN_AR',
                data: {
                    modelId,
                    timestamp: Date.now(),
                }
            })
            // 通知父组件切换状态
            onToggleFullscreen?.(!isFullscreenMode)
        } catch (error) {
            console.error('[ARButton] 切换全屏失败:', error)
        } finally {
            setIsLoading(false)
        }
    }, [modelId])
    const handleSwitchFullscreen = useCallback(() => {
        setIsLoading(true)

        try {
            const arBridge = ARBridge.getInstance()
            const isWebView = arBridge.isWebViewConnected()
            const source = isWebView ? 'webview' : 'browser'

            // WebView环境：发送事件给原生应用
            arBridge.sendToNative({
                type: 'SWITCH_FULLSCREEN',
                data: {
                    modelId,
                    source,
                    timestamp: Date.now(),
                    fullScreen: !isFullscreenMode
                }
            })

            // 通知父组件切换状态
            onToggleFullscreen?.(!isFullscreenMode)
        } catch (error) {
            console.error('[ARButton] 切换全屏失败:', error)
        } finally {
            setIsLoading(false)
        }
    }, [isFullscreenMode, isLoading])

    return (
        <div className="ar-button-container fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            {!isFullscreenMode ? (
                // AR模式：显示3D按钮
                <button
                    onClick={handleSwitchFullscreen}
                    disabled={isLoading}
                    className="ar-button-enhanced text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="flex items-center gap-3">
                        {isLoading ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                <span>切换中...</span>
                            </>
                        ) : (
                            <>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                                <span className="font-semibold">3D</span>
                            </>
                        )}
                    </span>
                </button>
            ) : (
                // 3D模式：显示VIEW IN AR按钮
                <button
                    onClick={handleViewInAr}
                    disabled={isLoading}
                    className="ar-button-enhanced text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="flex items-center gap-3">
                        {isLoading ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                <span>启动中...</span>
                            </>
                        ) : (
                            <>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <span className="font-semibold">VIEW IN AR</span>
                            </>
                        )}
                    </span>
                </button>
            )}
        </div>
    )
}

export default ARButton