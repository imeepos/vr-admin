import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useState, useRef, useEffect } from 'react';

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActivePath = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  const handleGraphQLDocs = () => {
    window.open('/graphql', '_blank');
    setIsDropdownOpen(false);
  };

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
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user?.username?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-900">
                      {user?.username}
                    </p>
                    <p className="text-xs text-gray-500">管理员</p>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <button
                      onClick={handleGraphQLDocs}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>开发文档</span>
                    </button>
                    <hr className="my-1 border-gray-200" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span>退出登录</span>
                    </button>
                  </div>
                )}
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
