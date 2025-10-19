import { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
// import { ApolloServerPluginLandingPageGraphQLPlaygroundOptions } from '@apollo/server-plugin-landing-page-graphql-playground';

/**
 * 现代化 Apollo Sandbox 配置
 * 为 GraphQL Playground 提供优雅的开发体验
 */
export const createGraphQLConfig = (config: ConfigService): ApolloDriverConfig => {
  const nodeEnv = config.get('NODE_ENV', 'development');
  const isDevelopment = nodeEnv === 'development';
  const isProduction = nodeEnv === 'production';
  const graphqlPath = config.get('app.graphqlPath', 'graphql');

  // 根据环境配置不同的 playground 设置
  const playgroundConfig: any = isDevelopment ? {
    settings: {
      'request.credentials': 'include',
      'schema.polling.enable': false,
      'editor.theme': 'dark',
      'editor.cursorShape': 'line' as const,
      'editor.reuseHeaders': true,
      'tracing.hideTracingResponse': false,
      'editor.fontSize': 14,
      'editor.fontFamily': "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    },

    // 多环境标签页配置
    tabs: [
      {
        endpoint: `/${graphqlPath}`,
        name: '🚀 Development',
        headers: {
          'X-Environment': 'development',
          'X-Client-Version': '1.0.0'
        },
        query: `# 🎯 VR Admin GraphQL API - 开发环境
#
# 欢迎使用现代化的 GraphQL Playground！
# 这里有一些示例查询来帮助你开始探索 API

# 🔍 用户查询示例
query GetUserProfile {
  users {
    id
    username
    email
    createdAt
  }
}

# 📊 模型查询示例
query GetModels {
  models {
    id
    name
    description
    createdAt
  }
}

# 💡 提示：
# • 点击右侧 "Documentation" 查看完整的 Schema 文档
# • 使用 Ctrl+Space (或 Cmd+Space) 获取智能提示
# • 点击 "History" 查看查询历史记录
# • 使用主题切换按钮在深色/浅色模式间切换
`,
        variables: JSON.stringify({
          "userId": "example-id-here"
        })
      },
      {
        endpoint: `/${graphqlPath}`,
        name: '🧪 Testing',
        headers: {
          'X-Environment': 'testing',
          'X-Client-Version': '1.0.0'
        },
        query: `# 🧪 测试环境
#
# 此标签页连接到测试环境
# 用于 API 测试和验证
`,
        variables: JSON.stringify({})
      }
    ],

    } : false;

  return {
    autoSchemaFile: true,
    sortSchema: true,
    introspection: true,
    csrfPrevention: false,
    graphiql: true,
    path: `/${graphqlPath}`,
    includeStacktraceInErrorResponses: isDevelopment,
    playground: playgroundConfig,
    context: ({ req, res }) => ({ req, res }),
    resolvers: { Upload: GraphQLUpload },
  };
};