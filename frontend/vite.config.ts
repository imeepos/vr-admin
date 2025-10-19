import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
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
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:3002',
          changeOrigin: true,
        },
        '/graphql': {
          target: env.VITE_API_URL || 'http://localhost:3002',
          changeOrigin: true,
        },
      },
    },
  }
})