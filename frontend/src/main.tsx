import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import './styles/globals.css'

// Initialize Needle Engine globals
declare global {
  interface Window {
    NEEDLE_ENGINE_VERSION: string
    NEEDLE_ENGINE_GENERATOR: string
    NEEDLE_PROJECT_BUILD_TIME: string
    NEEDLE_PUBLIC_KEY: string
  }
}

window.NEEDLE_ENGINE_VERSION = __NEEDLE_ENGINE_VERSION__
window.NEEDLE_ENGINE_GENERATOR = __NEEDLE_ENGINE_GENERATOR__
window.NEEDLE_PROJECT_BUILD_TIME = __NEEDLE_PROJECT_BUILD_TIME__
window.NEEDLE_PUBLIC_KEY = __NEEDLE_PUBLIC_KEY__

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)