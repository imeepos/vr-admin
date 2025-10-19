import { authenticatedRequest } from '@/utils/graphql'
import {
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
  GET_ME_QUERY,
  REFRESH_TOKEN_MUTATION,
  type LoginInput
} from '@/generated/graphql'

export const authService = {
  async login(credentials: LoginInput) {
    const response = await authenticatedRequest(LOGIN_MUTATION, { input: credentials })

    // Store the token in localStorage for subsequent requests
    if (response.login?.token) {
      localStorage.setItem('auth-token', response.login.token)
    }

    return response.login
  },

  async logout() {
    const response = await authenticatedRequest(LOGOUT_MUTATION)

    // Clear the token from localStorage
    localStorage.removeItem('auth-token')

    return response.logout
  },

  async getCurrentUser() {
    const response = await authenticatedRequest(GET_ME_QUERY)
    return response.me
  },

  async refreshToken() {
    const response = await authenticatedRequest(REFRESH_TOKEN_MUTATION)

    // Update the stored token
    if (response.refreshToken?.token) {
      localStorage.setItem('auth-token', response.refreshToken.token)
    }

    return response.refreshToken
  },
}