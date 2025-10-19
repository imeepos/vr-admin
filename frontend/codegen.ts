import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/graphql/schema.graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        scalars: {
          DateTime: 'string',
          UUID: 'string'
        },
        skipTypename: true,
        exportTypeOnly: false
      }
    }
  }
};

export default config;