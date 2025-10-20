import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div className=" bg-gray-50">
      <div className="flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <div className=" bg-blue-600 rounded-lg flex items-center justify-center px-2 py-1">
                    <span className="text-white font-bold text-lg">VR</span>
                  </div>
                  <h1 className="text-xl font-bold text-gray-900">管理系统</h1>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user?.username?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {user?.username}
                    </p>
                    <p className="text-xs text-gray-500">管理员</p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors border border-red-200"
                >
                  退出
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 flex flex-row h-full">
          <aside className="w-60 bg-white border-r border-gray-200 flex flex-col">
            <nav className="flex-1 p-4">
              <Link
                to="/dashboard/models"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  isActivePath('/dashboard/models')
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center ${
                    isActivePath('/dashboard/models')
                      ? 'bg-blue-600'
                      : 'bg-gray-400'
                  }`}
                >
                  <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="font-medium">模型管理</span>
              </Link>
              <Link
                to="/dashboard/models/create"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  isActivePath('/dashboard/models/create')
                    ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center ${
                    isActivePath('/dashboard/models/create')
                      ? 'bg-green-600'
                      : 'bg-gray-400'
                  }`}
                >
                  <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                </div>
                <span className="font-medium">创建模型</span>
              </Link>
            </nav>
          </aside>
          <main className="flex-1 flex flex-col">
            <div className="flex-1 p-4 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
