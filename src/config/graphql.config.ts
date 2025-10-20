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

  // 简化的 playground 配置以避免头部过大
  const playgroundConfig: any = isDevelopment ? {
    settings: {
      'editor.theme': 'dark',
      'editor.reuseHeaders': true,
    }
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
    // 确保请求体解析器正确配置
    formatError: (error) => {
      // 在开发环境中提供详细的错误信息
      if (isDevelopment) {
        console.error('GraphQL Error:', error);
        return {
          message: error.message,
          locations: error.locations,
          path: error.path,
          extensions: error.extensions,
        };
      }
      // 在生产环境中隐藏敏感错误信息
      return {
        message: error.message,
        locations: error.locations,
        path: error.path,
        extensions: error.extensions,
      };
    },
  };
};