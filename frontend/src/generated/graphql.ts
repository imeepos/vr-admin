// Auto-generated GraphQL types for VR Admin Frontend
// This file contains the essential types needed for GraphQL operations

export interface User {
  id: string;
  username: string;
  email?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Model {
  id: string;
  uuid: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  createdBy?: User;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface CreateModelInput {
  title: string;
  description?: string;
  backgroundImage?: string | File;
  backgroundVideo?: string | File;
}

export interface UpdateModelInput {
  title?: string;
  description?: string;
  backgroundImage?: string | File;
  backgroundVideo?: string | File;
}

export interface LoginInput {
  username: string;
  password: string;
}

export interface CreateUserInput {
  username: string;
  email?: string;
  password: string;
}

export interface UpdateUserInput {
  username?: string;
  email?: string;
  password?: string;
}

// GraphQL Query and Mutation types
export interface GetModelsQuery {
  models: Model[];
}

export interface GetModelQuery {
  model: Model | null;
}

export interface GetModelByUuidQuery {
  modelByUuid: Model | null;
}

export interface GetUsersQuery {
  users: User[];
}

export interface GetUserQuery {
  user: User | null;
}

export interface GetMeQuery {
  me: User | null;
}

export interface CreateModelMutation {
  createModel: Model;
}

export interface UpdateModelMutation {
  updateModel: Model;
}

export interface DeleteModelMutation {
  deleteModel: Model;
}

export interface HardDeleteModelMutation {
  hardDeleteModel: boolean;
}

export interface CreateUserMutation {
  createUser: User;
}

export interface UpdateUserMutation {
  updateUser: User;
}

export interface DeleteUserMutation {
  deleteUser: User;
}

export interface LoginMutation {
  login: AuthResponse;
}

export interface LogoutMutation {
  logout: boolean;
}

export interface RefreshTokenMutation {
  refreshToken: AuthResponse;
}

// GraphQL Operations (as strings)
export const GET_MODELS_QUERY = `
  query GetModels {
    models {
      id
      uuid
      title
      description
      backgroundImage
      backgroundVideo
      createdAt
      updatedAt
      deletedAt
      createdBy {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_MODEL_QUERY = `
  query GetModel($id: ID!) {
    model(id: $id) {
      id
      uuid
      title
      description
      backgroundImage
      backgroundVideo
      createdAt
      updatedAt
      deletedAt
      createdBy {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_MODEL_BY_UUID_QUERY = `
  query GetModelByUuid($uuid: String!) {
    modelByUuid(uuid: $uuid) {
      id
      uuid
      title
      description
      backgroundImage
      backgroundVideo
      createdAt
      updatedAt
      deletedAt
      createdBy {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_USERS_QUERY = `
  query GetUsers {
    users {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_QUERY = `
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const GET_ME_QUERY = `
  query GetMe {
    me {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_MODEL_MUTATION = `
  mutation CreateModel($input: CreateModelInput!) {
    createModel(input: $input) {
      id
      uuid
      title
      description
      backgroundImage
      backgroundVideo
      createdAt
      updatedAt
      deletedAt
      createdBy {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const UPDATE_MODEL_MUTATION = `
  mutation UpdateModel($id: ID!, $input: UpdateModelInput!) {
    updateModel(id: $id, input: $input) {
      id
      uuid
      title
      description
      backgroundImage
      backgroundVideo
      createdAt
      updatedAt
      deletedAt
      createdBy {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const DELETE_MODEL_MUTATION = `
  mutation DeleteModel($id: ID!) {
    deleteModel(id: $id) {
      id
      uuid
      title
      description
      backgroundImage
      backgroundVideo
      createdAt
      updatedAt
      deletedAt
      createdBy {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const HARD_DELETE_MODEL_MUTATION = `
  mutation HardDeleteModel($id: ID!) {
    hardDeleteModel(id: $id)
  }
`;

export const CREATE_USER_MUTATION = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_USER_MUTATION = `
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_USER_MUTATION = `
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const LOGIN_MUTATION = `
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const LOGOUT_MUTATION = `
  mutation Logout {
    logout
  }
`;

export const REFRESH_TOKEN_MUTATION = `
  mutation RefreshToken {
    refreshToken {
      token
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;