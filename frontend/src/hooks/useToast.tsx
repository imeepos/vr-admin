import { useState, useCallback, createContext, useContext, ReactNode } from 'react'
import { Toast, ToastType } from '@/components/Toast'

interface ToastMessage {
  id: string
  message: string
  type: ToastType
  duration?: number
}

interface ToastContextType {
  show: (message: string, type?: ToastType, duration?: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const show = useCallback((message: string, type: ToastType = 'info', duration?: number) => {
    const toast: ToastMessage = {
      id: generateId(),
      message,
      type,
      duration
    }
    setToasts(prev => [...prev, toast])
  }, [])

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}