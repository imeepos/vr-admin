const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 创建 GraphQL schema 导出脚本
const introspectionQuery = `
{
  __schema {
    types {
      kind
      name
      description
      fields {
        name
        type {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
            }
          }
        }
        args {
          name
          type {
            kind
            name
            ofType {
              kind
              name
            }
          }
        }
      }
      inputFields {
        name
        type {
          kind
          name
          ofType {
            kind
            name
          }
        }
      }
      interfaces {
        kind
        name
      }
      enumValues {
        name
        description
      }
      possibleTypes {
        kind
        name
      }
    }
    queryType {
      name
    }
    mutationType {
      name
    }
  }
}
`;

async function exportSchema() {
  try {
    console.log('🔍 正在获取 GraphQL schema...');

    // 使用 curl 发送 introspection 查询
    const response = execSync(
      `curl -s -X POST http://localhost:3002/graphql -H "Content-Type: application/json" -d '${JSON.stringify({ query: introspectionQuery })}'`,
      { encoding: 'utf8', timeout: 10000 }
    );

    const result = JSON.parse(response);

    if (result.errors) {
      console.error('❌ GraphQL 查询错误:', result.errors);
      process.exit(1);
    }

    if (!result.data.__schema) {
      console.error('❌ 未找到 schema 数据');
      process.exit(1);
    }

    // 生成 GraphQL SDL 格式的 schema
    const schemaSDL = generateSDL(result.data.__schema);

    // 确保 frontend 目录存在
    const frontendDir = path.join(__dirname, '../frontend/src/graphql');
    if (!fs.existsSync(frontendDir)) {
      fs.mkdirSync(frontendDir, { recursive: true });
    }

    // 写入 schema 文件
    const schemaFile = path.join(frontendDir, 'schema.graphql');
    fs.writeFileSync(schemaFile, schemaSDL);

    console.log('✅ GraphQL schema 已导出到:', schemaFile);
    console.log(`📊 导出了 ${result.data.__schema.types.length} 个类型`);

  } catch (error) {
    console.error('❌ 导出 schema 失败:', error.message);

    // 如果无法连接到后端，生成一个基础的 schema
    console.log('🔄 正在生成基础 schema...');
    const basicSchema = generateBasicSchema();

    const frontendDir = path.join(__dirname, '../frontend/src/graphql');
    if (!fs.existsSync(frontendDir)) {
      fs.mkdirSync(frontendDir, { recursive: true });
    }

    const schemaFile = path.join(frontendDir, 'schema.graphql');
    fs.writeFileSync(schemaFile, basicSchema);

    console.log('✅ 基础 GraphQL schema 已生成:', schemaFile);
  }
}

function generateSDL(schema) {
  let sdl = '';

  // 添加标量类型
  sdl += '# 标量类型\nscalar DateTime\nscalar UUID\n\n';

  // 生成类型定义
  const types = schema.types.filter(type =>
    !type.name.startsWith('__') &&
    type.kind === 'OBJECT' &&
    ['Query', 'Mutation', 'User', 'Model'].includes(type.name)
  );

  types.forEach(type => {
    sdl += `# ${type.description || type.name}\n`;
    sdl += `type ${type.name} {\n`;

    if (type.fields) {
      type.fields.forEach(field => {
        const fieldType = getFieldType(field.type);
        sdl += `  ${field.name}: ${fieldType}\n`;
      });
    }

    sdl += '}\n\n';
  });

  return sdl;
}

function getFieldType(type, level = 0) {
  if (level > 3) return 'String'; // 防止无限递归

  switch (type.kind) {
    case 'NON_NULL':
      return getFieldType(type.ofType, level + 1) + '!';
    case 'LIST':
      return '[' + getFieldType(type.ofType, level + 1) + ']';
    case 'OBJECT':
    case 'SCALAR':
      return type.name;
    default:
      return 'String';
  }
}

function generateBasicSchema() {
  return `# 基础 GraphQL Schema
# 由系统自动生成，基于后端实体定义

# 标量类型
scalar DateTime
scalar UUID

# 用户类型
type User {
  id: ID!
  username: String!
  email: String
  name: String!
  avatar: String
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

# 模型类型
type Model {
  id: ID!
  uuid: String!
  title: String!
  description: String
  backgroundImage: String
  backgroundVideo: String
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime
  createdBy: User
}

# 输入类型
input CreateUserInput {
  username: String!
  email: String
  name: String!
  password: String!
  avatar: String
}

input UpdateUserInput {
  username: String
  email: String
  name: String
  avatar: String
  isActive: Boolean
}

input CreateModelInput {
  title: String!
  description: String
  backgroundImage: String
  backgroundVideo: String
  isActive: Boolean
}

input UpdateModelInput {
  title: String
  description: String
  backgroundImage: String
  backgroundVideo: String
  isActive: Boolean
}

# 查询类型
type Query {
  users: [User!]!
  user(id: ID!): User
  models: [Model!]!
  model(id: ID!): Model
  modelByUuid(uuid: String!): Model
}

# 变更类型
type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): Boolean!
  createModel(createModelInput: CreateModelInput!): Model!
  updateModel(id: ID!, updateModelInput: UpdateModelInput!): Model
  deleteModel(id: ID!): Boolean!
  hardDeleteModel(id: ID!): Boolean!
}
`;
}

if (require.main === module) {
  exportSchema();
}

module.exports = { exportSchema };