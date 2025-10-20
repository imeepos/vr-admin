/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Vite build-time constants
declare const __NEEDLE_ENGINE_VERSION__: string
declare const __NEEDLE_ENGINE_GENERATOR__: string
declare const __NEEDLE_PROJECT_BUILD_TIME__: string
declare const __NEEDLE_PUBLIC_KEY__: string