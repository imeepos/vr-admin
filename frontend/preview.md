import dynamic from 'next/dynamic'
import { type NeedleEngineProps } from '@/needleEngine'
import { ARButton } from '@/components/ARButton'

const NeedleEngine = dynamic<NeedleEngineProps>(() => import('@/needleEngine'), { ssr: false })

import { GetStaticPaths, GetStaticProps } from "next";
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ARBridge from '@/utils/arBridge';
import { OnModelDownloadSuccessEvent, SwitchFullscreenEvent } from '@/types/ar';
import Image from 'next/image';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            "demo_02", "demo_03", "demo_04", "demo_05", "demo_06", "demo_07", "demo_08", "demo_09", "demo_10", "demo_11", "demo_12", "demo_13"
        ].map(id => ({ params: { modelId: id } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { modelId } = context.params!;
    return {
        props: {
            modelId
        }
    }
}

const modelIdToUrl = (modelId: string) => `https://r2.howlearnwood.com/${modelId}/${modelId}.glb`

export default function ModelViewer({ modelId }: { modelId: string }) {
    const router = useRouter();
    const screenHeightOffset = router.query.screenHeightOffset ? Number(router.query.screenHeightOffset) : undefined;

    // 在所有环境下都显示AR按钮，但行为会有所不同
    const engineStyle = {
        position: 'absolute' as const,
        left: "0",
        top: "0",
        width: '100%',
        height: '100%',
        zIndex: `10`,
    }

    const [showViewInAr, setShowViewInAr] = useState<boolean>(false)
    const [isFullscreenMode, setIsFullscreenMode] = useState<boolean>(false)

    // 计算透明区域样式
    const transparentAreaStyle = isFullscreenMode
        ? { bottom: '0' }
        : screenHeightOffset
            ? { bottom: `${screenHeightOffset}px` }
            : { bottom: '33.33%' };

    const onModelDownloadSuccess = useCallback((event: OnModelDownloadSuccessEvent) => {
        console.log(`onModelDownloadSuccess ${JSON.stringify(event)} ${event.data.modelId} === ${modelIdToUrl(modelId)}`)
        if (event && event.data && event.data.modelId === modelIdToUrl(modelId)) {
            setShowViewInAr(true)
        }
    }, [modelId])

    const handleToggleFullscreen = useCallback((isFullscreen: boolean) => {
        setIsFullscreenMode(isFullscreen)
    }, [])

    const handleSwitchFullscreenEvent = useCallback((event: SwitchFullscreenEvent) => {
        console.log(`[ModelViewer] 收到切换全屏事件: ${JSON.stringify(event.data)}`)
        setIsFullscreenMode(!!event.data.fullScreen)
    }, [])

    useEffect(() => {
        const arBridge = ARBridge.getInstance();
        arBridge.listen(`MODEL_DOWNLOAD_SUCCESS`, onModelDownloadSuccess)
        arBridge.listen(`SWITCH_FULLSCREEN`, handleSwitchFullscreenEvent)

        return () => {
            arBridge.silence(`MODEL_DOWNLOAD_SUCCESS`, onModelDownloadSuccess)
            arBridge.silence(`SWITCH_FULLSCREEN`, handleSwitchFullscreenEvent)
        }
    }, [modelId, onModelDownloadSuccess, handleSwitchFullscreenEvent])

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between min-[800px]:p-24" style={{ background: "transparent" }}>
            <div className='absolute top-0 left-0 right-0 -z-10 overflow-hidden' style={transparentAreaStyle}>
                <Image
                    src={"https://r2.howlearnwood.com/bg/bg_demo_01.webp"}
                    alt={"background"}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            {(!isFullscreenMode && showViewInAr) && (
                <div className='absolute top-0 left-0 right-0 -z-10 overflow-hidden' style={transparentAreaStyle}>
                    <video
                        src="https://r2.howlearnwood.com/1/demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='w-full h-full object-cover'
                        poster='https://r2.howlearnwood.com/bg/bg_demo_01.webp'
                    />
                    <div className='absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-white/10 to-white/2' />
                </div>
            )}

            <NeedleEngine
                style={engineStyle}
                background-color={"transparent"}
                transparent={true}
                contactshadows={true}
                tone-mapping={"agx"}
                tone-mapping-exposure={1}
                camera-controls={true}
                auto-rotate={true}
                hide-loading-overlay={true}
                src={`https://r2.howlearnwood.com/${modelId}/${modelId}.glb`}
            />

            {showViewInAr && (
                <ARButton
                    modelId={modelId}
                    isFullscreenMode={isFullscreenMode}
                    onToggleFullscreen={handleToggleFullscreen}
                />
            )}

        </main>
    )
}
