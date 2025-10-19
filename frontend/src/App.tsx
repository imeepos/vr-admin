import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { ToastProvider } from './hooks/useToast'
import { LoginPage } from './pages/LoginPage'
import { DashboardLayout } from './components/DashboardLayout'
import { ModelListPage } from './pages/ModelListPage'
import { CreateModelPage } from './pages/CreateModelPage'

function App() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <ToastProvider>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" replace />}
        >
          <Route index element={<Navigate to="/dashboard/models" replace />} />
          <Route path="models" element={<ModelListPage />} />
          <Route path="models/create" element={<CreateModelPage />} />
          <Route path="models/:id/edit" element={<CreateModelPage />} />
        </Route>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </ToastProvider>
  )
}

export default App