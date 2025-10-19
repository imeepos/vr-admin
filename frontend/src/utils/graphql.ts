import { GraphQLClient } from 'graphql-request';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/';

const getGraphQLUrl = () => {
  if (API_BASE_URL && API_BASE_URL === '/') {
    const origin = window.location.origin;
    return `${origin}/graphql`;
  }
  return `${API_BASE_URL}/graphql`;
};

export const graphqlClient = new GraphQLClient(getGraphQLUrl(), {
  headers: {
    'Content-Type': 'application/json',
  },
});

// 添加认证中间件
export const authenticatedRequest = async (
  document: string,
  variables?: any,
) => {
  const token = localStorage.getItem('auth-token');

  try {
    const headers: Record<string, string> = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return await graphqlClient.request(document, variables, headers);
  } catch (error: any) {
    // 处理 GraphQL 错误和认证错误
    if (
      error.response?.status === 401 ||
      error.message?.includes('UNAUTHENTICATED')
    ) {
      localStorage.removeItem('auth-token');
      // 防止在登录页面时无限重定向
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    throw error;
  }
};

// 用于文件上传的 GraphQL 客户端（如果需要的话）
export const uploadGraphQLClient = new GraphQLClient(getGraphQLUrl(), {
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadRequest = async (document: string, variables?: any) => {
  const token = localStorage.getItem('auth-token');

  try {
    const headers: Record<string, string> = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return await uploadGraphQLClient.request(document, variables, headers);
  } catch (error: any) {
    if (
      error.response?.status === 401 ||
      error.message?.includes('UNAUTHENTICATED')
    ) {
      localStorage.removeItem('auth-token');
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    throw error;
  }
};
