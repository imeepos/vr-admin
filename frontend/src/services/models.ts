import { authenticatedRequest, uploadRequest } from '@/utils/graphql'
import {
  GET_MODELS_QUERY,
  GET_MODEL_QUERY,
  CREATE_MODEL_MUTATION,
  UPDATE_MODEL_MUTATION,
  DELETE_MODEL_MUTATION,
  UPLOAD_IMAGE_MUTATION,
  UPLOAD_VIDEO_MUTATION,
  UPLOAD_MODEL_MUTATION,
  UPLOAD_IOS_MODEL_MUTATION,
  type CreateModelInput,
  type UpdateModelInput
} from '@/generated/graphql'

export const modelService = {
  async getModels(search?: string) {
    const response = await authenticatedRequest(GET_MODELS_QUERY, { search })
    return response.models
  },

  async getModel(id: string) {
    const response = await authenticatedRequest(GET_MODEL_QUERY, { id })
    return response.model
  },

  async createModel(data: CreateModelInput) {
    // Handle file uploads by using the dedicated upload endpoint
    const input: any = {
      title: data.title,
      description: data.description
    }

    // Handle file uploads using GraphQL
    if (data.backgroundImage) {
      if (typeof data.backgroundImage === 'string') {
        input.backgroundImage = data.backgroundImage
      } else {
        // Upload image file using GraphQL mutation
        const uploadResult = await uploadRequest(UPLOAD_IMAGE_MUTATION, {
          file: data.backgroundImage
        })
        if (uploadResult.data?.uploadImage?.success) {
          input.backgroundImage = uploadResult.data.uploadImage.file.url
        } else {
          throw new Error('Image upload failed')
        }
      }
    }

    if (data.backgroundVideo) {
      if (typeof data.backgroundVideo === 'string') {
        input.backgroundVideo = data.backgroundVideo
      } else {
        // Upload video file using GraphQL mutation
        const uploadResult = await uploadRequest(UPLOAD_VIDEO_MUTATION, {
          file: data.backgroundVideo
        })
        if (uploadResult.data?.uploadVideo?.success) {
          input.backgroundVideo = uploadResult.data.uploadVideo.file.url
        } else {
          throw new Error('Video upload failed')
        }
      }
    }

    if (data.modelFile) {
      if (typeof data.modelFile === 'string') {
        input.modelFile = data.modelFile
      } else {
        // Upload 3D model file using GraphQL mutation
        const uploadResult = await uploadRequest(UPLOAD_MODEL_MUTATION, {
          file: data.modelFile
        })
        if (uploadResult.data?.uploadModel?.success) {
          const file = uploadResult.data.uploadModel.file
          input.modelFile = file.url
          input.modelFileName = file.originalName
          input.modelFilePath = file.path
          input.modelFileSize = file.size
          input.modelFileType = file.filename.split('.').pop()
          input.modelFileMimeType = file.mimetype
        } else {
          throw new Error('3D model upload failed')
        }
      }
    }

    if (data.iosModelFile) {
      if (typeof data.iosModelFile === 'string') {
        input.iosModelFile = data.iosModelFile
      } else {
        const uploadResult = await uploadRequest(UPLOAD_IOS_MODEL_MUTATION, {
          file: data.iosModelFile
        })
        if (uploadResult.data?.uploadIOSModel?.success) {
          const file = uploadResult.data.uploadIOSModel.file
          input.iosModelFile = file.url
        } else {
          throw new Error('USDZ model upload failed')
        }
      }
    }

    const response = await uploadRequest(CREATE_MODEL_MUTATION, { createModelInput: input })
    return response.createModel
  },

  async updateModel(id: string, data: UpdateModelInput) {
    const input: any = {}

    if (data.title) input.title = data.title
    if (data.description) input.description = data.description

    // Handle file updates using GraphQL
    if (data.backgroundImage) {
      if (typeof data.backgroundImage === 'string') {
        input.backgroundImage = data.backgroundImage
      } else {
        // Upload image file using GraphQL mutation
        const uploadResult = await uploadRequest(UPLOAD_IMAGE_MUTATION, {
          file: data.backgroundImage
        })
        if (uploadResult.data?.uploadImage?.success) {
          input.backgroundImage = uploadResult.data.uploadImage.file.url
        } else {
          throw new Error('Image upload failed')
        }
      }
    }

    if (data.backgroundVideo) {
      if (typeof data.backgroundVideo === 'string') {
        input.backgroundVideo = data.backgroundVideo
      } else {
        // Upload video file using GraphQL mutation
        const uploadResult = await uploadRequest(UPLOAD_VIDEO_MUTATION, {
          file: data.backgroundVideo
        })
        if (uploadResult.data?.uploadVideo?.success) {
          input.backgroundVideo = uploadResult.data.uploadVideo.file.url
        } else {
          throw new Error('Video upload failed')
        }
      }
    }

    if (data.modelFile) {
      if (typeof data.modelFile === 'string') {
        input.modelFile = data.modelFile
      } else {
        // Upload 3D model file using GraphQL mutation
        const uploadResult = await uploadRequest(UPLOAD_MODEL_MUTATION, {
          file: data.modelFile
        })
        if (uploadResult.data?.uploadModel?.success) {
          const file = uploadResult.data.uploadModel.file
          input.modelFile = file.url
          input.modelFileName = file.originalName
          input.modelFilePath = file.path
          input.modelFileSize = file.size
          input.modelFileType = file.filename.split('.').pop()
          input.modelFileMimeType = file.mimetype
        } else {
          throw new Error('3D model upload failed')
        }
      }
    }

    if (data.iosModelFile) {
      if (typeof data.iosModelFile === 'string') {
        input.iosModelFile = data.iosModelFile
      } else {
        const uploadResult = await uploadRequest(UPLOAD_IOS_MODEL_MUTATION, {
          file: data.iosModelFile
        })
        if (uploadResult.data?.uploadIOSModel?.success) {
          const file = uploadResult.data.uploadIOSModel.file
          input.iosModelFile = file.url
        } else {
          throw new Error('USDZ model upload failed')
        }
      }
    }

    // Handle 3D model metadata fields (if passed as strings)
    if (data.modelFileName) input.modelFileName = data.modelFileName
    if (data.modelFilePath) input.modelFilePath = data.modelFilePath
    if (data.modelFileSize) input.modelFileSize = data.modelFileSize
    if (data.modelFileType) input.modelFileType = data.modelFileType
    if (data.modelFileMimeType) input.modelFileMimeType = data.modelFileMimeType

    // Use the appropriate request method based on whether we're uploading files
    const hasFiles = (data.backgroundImage && typeof data.backgroundImage !== 'string') ||
                   (data.backgroundVideo && typeof data.backgroundVideo !== 'string') ||
                   (data.modelFile && typeof data.modelFile !== 'string') ||
                   (data.iosModelFile && typeof data.iosModelFile !== 'string')

    if (hasFiles) {
      const response = await uploadRequest(UPDATE_MODEL_MUTATION, { id, updateModelInput: input })
      return response.updateModel
    } else {
      const response = await authenticatedRequest(UPDATE_MODEL_MUTATION, { id, updateModelInput: input })
      return response.updateModel
    }
  },

  async deleteModel(id: string) {
    const response = await authenticatedRequest(DELETE_MODEL_MUTATION, { id })
    return response.deleteModel
  },
}
