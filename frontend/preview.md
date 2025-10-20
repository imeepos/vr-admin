
const isServer = () => typeof window === `undefined`;

import "@needle-tools/engine";
import { type NeedleEngineAttributes, WebXR } from "@needle-tools/engine";
import { useEffect, useState } from "react";
import ARBridge from "./utils/arBridge";

export type NeedleEngineProps = NeedleEngineAttributes

export default function NeedleEngine({ ...props }: NeedleEngineProps): JSX.Element {
    const [src, setSrc] = useState(props?.src)
    const [webXR, setWebXR] = useState<WebXR>()
    useEffect(() => {
        // import the codgegen to register types
        if (!isServer()) {

            import("@needle-tools/engine").then(res => {
                // 监听引擎初始化完成事件（模型加载完成）
                res.onInitialized((ctx) => {
                    const arBridge = ARBridge.getInstance();
                    console.log('[NeedleEngine] 引擎初始化完成，模型已加载:', src);
                    arBridge.sendToNative({
                        type: 'MODEL_LOADED',
                        data: {
                            modelId: src,
                            success: true,
                            timestamp: Date.now()
                        }
                    });
                });

                res.onStart((ctx) => {
                    console.log(`on start`)
                    if (ctx.menu) {
                        ctx.menu.showNeedleLogo(false)
                        ctx.menu.showFullscreenOption(false)
                    }
                    // ctx.scene.addEventListener()
                    const webXRMenu = ctx.scene.addComponent(res.WebXR, {
                        createARButton: false,
                        createVRButton: false,
                        createQRCode: false,
                        createSendToQuestButton: false,
                        usePlacementAdjustment: false,
                        useQuicklookExport: true,
                    });
                    setWebXR(webXRMenu)
                });

                res.onAfterRender(ctx => {
                    // console.log(`on after render`)
                })

                res.onBeforeRender(ctx => {
                    // console.log(`on before render`)
                })

                res.onInitialized(ctx => {
                    // console.log(`on initialized`)
                })

                res.onUpdate(ctx => {
                    // console.log(`on update`)
                })

                res.onXRSessionStart(ctx => {
                    // console.log(`on xr session start`)
                })


                res.onXRSessionEnd(ctx => {
                    // console.log(`on xr session end`)
                })

            })
        }
    }, [props?.src])

    return (
        <>
            {!isServer() && <needle-engine src={src} {...props as any} />}
        </>
    );
}