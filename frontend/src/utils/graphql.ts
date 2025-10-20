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

// 文件上传专用的 GraphQL 客户端
export const uploadGraphQLClient = new GraphQLClient(getGraphQLUrl());

export const uploadRequest = async (document: string, variables?: any) => {
  const token = localStorage.getItem('auth-token');

  try {
    const variableEntries = Object.entries(variables || {});
    const files = variableEntries.filter(([, value]) => value instanceof File);
    const hasFiles = files.length > 0;

    if (hasFiles) {
      const formData = new FormData();
      const normalizedVariables: Record<string, any> = { ...(variables || {}) };
      const map: Record<string, string[]> = {};

      files.forEach(([key], index) => {
        map[index.toString()] = [`variables.${key}`];
        normalizedVariables[key] = null;
      });

      formData.append('operations', JSON.stringify({
        query: document,
        variables: normalizedVariables,
      }));

      formData.append('map', JSON.stringify(map));

      files.forEach(([_key, value], index) => {
        formData.append(index.toString(), value as File);
      });

      const headers: Record<string, string> = {};
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(getGraphQLUrl(), {
        method: 'POST',
        body: formData,
        headers
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      return await response.json();
    } else {
      const headers: Record<string, string> = {};
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      return await uploadGraphQLClient.request(document, variables, headers);
    }
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

