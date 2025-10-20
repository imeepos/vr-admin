import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { modelService } from '@/services/models'
import type { CreateModelInput, UpdateModelInput } from '@/generated/graphql'

export function useModels(search?: string) {
  const queryClient = useQueryClient()

  const {
    data: models,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['models', search],
    queryFn: () => modelService.getModels(search),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  const createModelMutation = useMutation({
    mutationFn: (data: CreateModelInput) => modelService.createModel(data),
    onSuccess: () => {
      // Invalidate models query to refetch the updated list
      queryClient.invalidateQueries({ queryKey: ['models'] })
    },
  })

  const updateModelMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateModelInput }) =>
      modelService.updateModel(id, data),
    onSuccess: (_, { id }) => {
      // Invalidate both the list and the specific model
      queryClient.invalidateQueries({ queryKey: ['models'] })
      queryClient.invalidateQueries({ queryKey: ['model', id] })
    },
  })

  const deleteModelMutation = useMutation({
    mutationFn: (id: string) => modelService.deleteModel(id),
    onSuccess: () => {
      // Invalidate models query to refetch the updated list
      queryClient.invalidateQueries({ queryKey: ['models'] })
    },
  })

  const createModel = (data: CreateModelInput) => {
    return createModelMutation.mutateAsync(data)
  }

  const updateModel = (id: string, data: UpdateModelInput) => {
    return updateModelMutation.mutateAsync({ id, data })
  }

  const deleteModel = (id: string) => {
    return deleteModelMutation.mutateAsync(id)
  }

  return {
    models: models || [],
    isLoading,
    error,
    createModel,
    updateModel,
    deleteModel,
    isCreating: createModelMutation.isPending,
    isUpdating: updateModelMutation.isPending,
    isDeleting: deleteModelMutation.isPending,
    createError: createModelMutation.error,
    updateError: updateModelMutation.error,
    deleteError: deleteModelMutation.error,
  }
}

export function useModel(id: string) {
  const {
    data: model,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['model', id],
    queryFn: () => modelService.getModel(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  return {
    model,
    isLoading,
    error,
  }
}