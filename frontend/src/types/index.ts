export interface LoginInput {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: Error | null;
}

export interface Model {
  id: string;
  name: string;
  description: string;
  fileUrl?: string;
  thumbnailUrl?: string;
  createdAt: string;
  updatedAt: string;
}