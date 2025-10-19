import { GraphQLClient } from 'graphql-request'

const API_BASE_URL = import.meta.env.VITE_API_URL || ''

// 动态构造 GraphQL URL，支持 Docker 容器和本地开发环境
const getGraphQLUrl = () => {
  // 如果明确设置了 API_BASE_URL 且不是根路径，优先使用
  if (API_BASE_URL && API_BASE_URL !== '/') {
    return `${API_BASE_URL}/graphql`
  }

  // 在生产环境中直接使用相对路径
  // 这样可以让 nginx 代理正确处理请求
  if (import.meta.env.PROD) {
    return '/graphql'
  }

  // 开发环境使用当前页面的 origin 自动构造 GraphQL URL
  const origin = window.location.origin
  return `${origin}/graphql`
}

export const graphqlClient = new GraphQLClient(getGraphQLUrl(), {
  headers: {
    'Content-Type': 'application/json',
  },
})

// 添加认证中间件
export const authenticatedRequest = async (document: string, variables?: any) => {
  const token = localStorage.getItem('auth-token')

  try {
    const headers: Record<string, string> = {}
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    return await graphqlClient.request(document, variables, headers)
  } catch (error: any) {
    // 处理 GraphQL 错误和认证错误
    if (error.response?.status === 401 || error.message?.includes('UNAUTHENTICATED')) {
      localStorage.removeItem('auth-token')
      // 防止在登录页面时无限重定向
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login'
      }
    }
    throw error
  }
}

// 用于文件上传的 GraphQL 客户端（如果需要的话）
export const uploadGraphQLClient = new GraphQLClient(getGraphQLUrl(), {
  headers: {
    'Content-Type': 'application/json',
  },
})

export const uploadRequest = async (document: string, variables?: any) => {
  const token = localStorage.getItem('auth-token')

  try {
    const headers: Record<string, string> = {}
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    return await uploadGraphQLClient.request(document, variables, headers)
  } catch (error: any) {
    if (error.response?.status === 401 || error.message?.includes('UNAUTHENTICATED')) {
      localStorage.removeItem('auth-token')
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login'
      }
    }
    throw error
  }
}