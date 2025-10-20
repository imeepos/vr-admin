import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      __NEEDLE_ENGINE_VERSION__: JSON.stringify(env.VITE_NEEDLE_ENGINE_VERSION),
      __NEEDLE_ENGINE_GENERATOR__: JSON.stringify(env.VITE_NEEDLE_ENGINE_GENERATOR),
      __NEEDLE_PROJECT_BUILD_TIME__: JSON.stringify(env.VITE_NEEDLE_PROJECT_BUILD_TIME),
      __NEEDLE_PUBLIC_KEY__: JSON.stringify(env.VITE_NEEDLE_PUBLIC_KEY),
    },
    build: {
      outDir: '../public',
      sourcemap: true,  // 开启 sourceMap
      minify: false,    // 禁用代码压缩
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      headers: {
        'Access-Control-Max-Age': '86400'
      },
      proxy: {
        '/api': {
          target: 'http://localhost:3002/api',
          changeOrigin: true,
          headers: {
            'Connection': 'keep-alive'
          }
        },
        '/graphql': {
          target: 'http://localhost:3002/graphql',
          changeOrigin: true,
          headers: {
            'Connection': 'keep-alive'
          }
        },
      },
    },
  }
})