import type { FetchError } from 'ofetch'

interface ApiErrorData {
  message?: string
  errors?: Record<string, string[]>
}

export const getApiErrorMessage = (error: unknown, fallback = 'Something went wrong.'): string => {
  const fetchError = error as FetchError<ApiErrorData>
  const data = fetchError.data

  if (data?.message) return data.message

  if (data?.errors) {
    const firstError = Object.values(data.errors).flat().at(0)
    if (firstError) return firstError
  }

  if (error instanceof Error && error.message) return error.message
  
  return fallback
}