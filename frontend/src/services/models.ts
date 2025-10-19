import { authenticatedRequest, uploadRequest } from '@/utils/graphql'
import {
  GET_MODELS_QUERY,
  GET_MODEL_QUERY,
  CREATE_MODEL_MUTATION,
  UPDATE_MODEL_MUTATION,
  DELETE_MODEL_MUTATION,
  type CreateModelInput,
  type UpdateModelInput
} from '@/generated/graphql'

export const modelService = {
  async getModels() {
    const response = await authenticatedRequest(GET_MODELS_QUERY)
    return response.models
  },

  async getModel(id: string) {
    const response = await authenticatedRequest(GET_MODEL_QUERY, { id })
    return response.model
  },

  async createModel(data: CreateModelInput) {
    // Handle file uploads by converting File objects to base64 or using upload endpoint
    const input: any = {
      title: data.title,
      description: data.description
    }

    // Handle file uploads
    if (data.backgroundImage) {
      if (typeof data.backgroundImage === 'string') {
        input.backgroundImage = data.backgroundImage
      } else {
        // In a real implementation, you would upload the file first and get the URL
        input.backgroundImage = data.backgroundImage.name
      }
    }

    if (data.backgroundVideo) {
      if (typeof data.backgroundVideo === 'string') {
        input.backgroundVideo = data.backgroundVideo
      } else {
        input.backgroundVideo = data.backgroundVideo.name
      }
    }

    const response = await uploadRequest(CREATE_MODEL_MUTATION, { input })
    return response.createModel
  },

  async updateModel(id: string, data: UpdateModelInput) {
    const input: any = {}

    if (data.title) input.title = data.title
    if (data.description) input.description = data.description

    // Handle file updates
    if (data.backgroundImage) {
      if (typeof data.backgroundImage === 'string') {
        input.backgroundImage = data.backgroundImage
      } else {
        input.backgroundImage = data.backgroundImage.name
      }
    }

    if (data.backgroundVideo) {
      if (typeof data.backgroundVideo === 'string') {
        input.backgroundVideo = data.backgroundVideo
      } else {
        input.backgroundVideo = data.backgroundVideo.name
      }
    }

    // Use the appropriate request method based on whether we're uploading files
    const hasFiles = (data.backgroundImage && typeof data.backgroundImage !== 'string') ||
                   (data.backgroundVideo && typeof data.backgroundVideo !== 'string')

    if (hasFiles) {
      const response = await uploadRequest(UPDATE_MODEL_MUTATION, { id, input })
      return response.updateModel
    } else {
      const response = await authenticatedRequest(UPDATE_MODEL_MUTATION, { id, input })
      return response.updateModel
    }
  },

  async deleteModel(id: string) {
    const response = await authenticatedRequest(DELETE_MODEL_MUTATION, { id })
    return response.deleteModel
  },
}