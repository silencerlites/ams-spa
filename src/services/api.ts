import { ofetch } from 'ofetch'

const baseURL = import.meta.env.QCLI_API_URL

if (!baseURL) {
  throw new Error(
    'QCLI_API_URL is not configured.',
  )
}

export const api = ofetch.create({
  baseURL,

  headers: {
    Accept: 'application/json',
  },

  retry: 0,

  onRequest({ options }) {
    const token =
      localStorage.getItem('token')

    const headers =
      new Headers(options.headers)

    headers.set(
      'Accept',
      'application/json',
    )

    if (token) {
      headers.set(
        'Authorization',
        `Bearer ${token}`,
      )
    }

    options.headers = headers
  },

  onResponseError({ response }) {
    const token =
      localStorage.getItem('token')

    if (
      response.status === 401 &&
      token
    ) {
      window.dispatchEvent(
        new CustomEvent(
          'auth:unauthorized',
        ),
      )
    }
  },
})