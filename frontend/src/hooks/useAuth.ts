import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { authService } from '@/services/auth'
import type { LoginInput } from '@/generated/graphql'

export function useAuth() {
  const queryClient = useQueryClient()

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['auth', 'user'],
    queryFn: () => authService.getCurrentUser(),
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 5 * 60 * 1000,
    enabled: !!localStorage.getItem('auth-token'),
  })

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginInput) => authService.login(credentials),
    onSuccess: (response) => {
      if (response?.token) {
        queryClient.setQueryData(['auth', 'user'], response.user)
        // Invalidate auth queries to refetch user data
        queryClient.invalidateQueries({ queryKey: ['auth', 'user'] })
      }
    },
  })

  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      queryClient.setQueryData(['auth', 'user'], null)
      queryClient.clear()
      window.location.href = '/login'
    },
  })

  const login = (credentials: LoginInput) => {
    return loginMutation.mutateAsync(credentials)
  }

  const logout = () => {
    logoutMutation.mutate()
  }

  const isAuthenticated = !!user
  const isLoadingAuth = isLoading || loginMutation.isPending || logoutMutation.isPending

  return {
    user,
    isAuthenticated,
    isLoading: isLoadingAuth,
    error,
    login,
    logout,
    loginError: loginMutation.error,
  }
}