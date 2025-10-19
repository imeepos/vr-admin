import { Outlet, Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export function DashboardLayout() {
  const { user, logout } = useAuth()
  const location = useLocation()

  const isActivePath = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside className="w-60 bg-white border-r border-gray-200 min-h-screen flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VR</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                管理系统
              </h1>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <Link
              to="/dashboard/models"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActivePath('/dashboard/models')
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <div className={`w-5 h-5 rounded ${
                isActivePath('/dashboard/models')
                  ? 'bg-blue-600'
                  : 'bg-gray-400'
              }`} />
              <span className="font-medium">模型管理</span>
            </Link>
          </nav>

          <div className="p-4 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {user?.username?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{user?.username}</p>
                  <p className="text-xs text-gray-500">管理员</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="w-full bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors border border-red-200"
              >
                退出登录
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="bg-white border-b border-gray-200">
            <div className="px-8 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {isActivePath('/dashboard/models') ? '模型管理' : '控制台'}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    管理和维护系统功能
                  </p>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-sm text-gray-600">
                    {new Date().toLocaleDateString('zh-CN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-600">在线</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 p-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 min-h-full">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}