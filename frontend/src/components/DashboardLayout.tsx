import { Outlet, Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export function DashboardLayout() {
  const { user, logout } = useAuth()
  const location = useLocation()

  const isActivePath = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="flex">
        <aside className="w-64 bg-white shadow-xl border-r border-gray-100 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VR</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                管理系统
              </h1>
            </div>

            <nav className="space-y-2">
              <Link
                to="/dashboard/models"
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActivePath('/dashboard/models')
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm border border-blue-100'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:translate-x-1'
                }`}
              >
                <div className={`w-5 h-5 rounded transition-colors ${
                  isActivePath('/dashboard/models')
                    ? 'bg-blue-500'
                    : 'bg-gray-400 group-hover:bg-gray-600'
                }`} />
                <span className="font-medium">模型管理</span>
                {isActivePath('/dashboard/models') && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                )}
              </Link>
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {user?.username?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{user?.username}</p>
                  <p className="text-xs text-gray-500">管理员</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="w-full bg-gradient-to-r from-red-50 to-pink-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:from-red-100 hover:to-pink-100 transition-all duration-200 border border-red-100 hover:shadow-sm"
              >
                退出登录
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <header className="bg-white shadow-sm border-b border-gray-100 backdrop-blur-lg bg-opacity-90">
            <div className="px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {isActivePath('/dashboard/models') ? '模型管理' : '控制台'}
                  </h2>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-500">
                    {new Date().toLocaleDateString('zh-CN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      weekday: 'long'
                    })}
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600">在线</span>
                </div>
              </div>
            </div>
          </header>

          <div className="p-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 min-h-[calc(100vh-200px)]">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}