import { GraphQLClient } from 'graphql-request';
import { createUploadMiddleware } from '@apollo/server/core/uploadMiddleware';
import { extractFiles } from 'extract-files';

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
    // 提取文件
    const { clone, files } = extractFiles(variables);

    if (files.size > 0) {
      // 如果有文件，使用 multipart/form-data
      const formData = new FormData();

      // 添加操作信息
      formData.append('operations', JSON.stringify({
        query: document,
        variables: clone
      }));

      // 添加文件映射
      const map: Record<string, string[]> = {};
      let fileIndex = 0;

      files.forEach((paths, file) => {
        const fileKey = `variables${paths.join('.')}`;
        map[fileIndex.toString()] = [fileKey];
        formData.append(fileIndex.toString(), file);
        fileIndex++;
      });

      formData.append('map', JSON.stringify(map));

      const headers: Record<string, string> = {};
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(getGraphQLUrl(), {
        method: 'POST',
        body: formData,
        headers,
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      return await response.json();
    } else {
      // 如果没有文件，使用普通的 JSON 请求
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
