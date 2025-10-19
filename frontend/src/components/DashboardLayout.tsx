import { Outlet, Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export function DashboardLayout() {
  const { user, logout } = useAuth()
  const location = useLocation()

  const isActivePath = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">VR 管理系统</h1>
            </div>
            <nav className="flex space-x-8">
              <Link
                to="/dashboard/models"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActivePath('/dashboard/models')
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                模型管理
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                欢迎, {user?.username}
              </span>
              <button
                onClick={logout}
                className="btn btn-outline text-sm"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Outlet />
        </div>
      </main>
    </div>
  )
}