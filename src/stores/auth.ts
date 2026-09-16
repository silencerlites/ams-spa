import {
  defineStore,
} from 'pinia'

import {
  authApi,
} from '../api/auth.api'

import type {
  LoginPayload,
  User,
} from '../models/auth'

interface AuthState {
  token: string | null
  tokenExpiresAt: string | null

  user: User | null

  mfaToken: string | null
  mfaTokenExpiresAt: string | null

  loading: boolean
  otpLoading: boolean
}

const getStoredUser = (): User | null => {
  const value =
    localStorage.getItem('user')

  if (!value) {
    return null
  }

  try {
    return JSON.parse(value) as User
  } catch {
    localStorage.removeItem('user')

    return null
  }
}

export const useAuthStore =
  defineStore(
    'auth',

    {
      state:
        (): AuthState => ({
          token:
            localStorage.getItem(
              'token',
            ),

          tokenExpiresAt:
            localStorage.getItem(
              'token_expires_at',
            ),

          user:
            getStoredUser(),

          mfaToken:
            sessionStorage.getItem(
              'mfa_token',
            ),

          mfaTokenExpiresAt:
            sessionStorage.getItem(
              'mfa_token_expires_at',
            ),

          loading: false,

          otpLoading: false,
        }),

      getters: {
        isAuthenticated:
          state =>
            Boolean(
              state.token,
            ),

        requiresMfa:
          state =>
            Boolean(
              state.mfaToken,
            ),

        isMfaExpired:
          state => {
            if (
              !state.mfaTokenExpiresAt
            ) {
              return true
            }

            return (
              new Date(
                state.mfaTokenExpiresAt,
              ).getTime() <=
              Date.now()
            )
          },

        isTokenExpired:
          state => {
            if (
              !state.tokenExpiresAt
            ) {
              return false
            }

            return (
              new Date(
                state.tokenExpiresAt,
              ).getTime() <=
              Date.now()
            )
          },
      },

      actions: {
        async login(
          payload: LoginPayload,
        ) {
          this.loading = true

          try {
            const response =
              await authApi.login(
                payload,
              )

            const {
              mfa_token,
              mfa_token_expires_at,
            } = response.data

            this.setMfa(
              mfa_token,
              mfa_token_expires_at,
            )

            return response
          } finally {
            this.loading = false
          }
        },

        async verifyOtp(
          code: string,
        ) {
          if (!this.mfaToken) {
            throw new Error(
              'MFA session not found.',
            )
          }

          if (
            this.isMfaExpired
          ) {
            this.clearMfa()

            throw new Error(
              'MFA session has expired. Please login again.',
            )
          }

          this.otpLoading = true

          try {
            const response =
              await authApi.verifyOtp(
                {
                  mfa_token:
                    this.mfaToken,

                  code,
                },
              )

            const {
              token,
              expires_at,
              user,
            } = response.data

            this.token = token

            this.tokenExpiresAt =
              expires_at

            this.user = user

            localStorage.setItem(
              'token',
              token,
            )

            localStorage.setItem(
              'token_expires_at',
              expires_at,
            )

            localStorage.setItem(
              'user',
              JSON.stringify(
                user,
              ),
            )

            this.clearMfa()

            return response
          } finally {
            this.otpLoading =
              false
          }
        },

        setMfa(
          token: string,
          expiresAt: string,
        ) {
          this.mfaToken =
            token

          this.mfaTokenExpiresAt =
            expiresAt

          sessionStorage.setItem(
            'mfa_token',
            token,
          )

          sessionStorage.setItem(
            'mfa_token_expires_at',
            expiresAt,
          )
        },

        clearMfa() {
          this.mfaToken = null

          this.mfaTokenExpiresAt =
            null

          sessionStorage.removeItem(
            'mfa_token',
          )

          sessionStorage.removeItem(
            'mfa_token_expires_at',
          )
        },

        async fetchUser() {
          const user =
            await authApi.getUser()

          this.user = user

          localStorage.setItem(
            'user',
            JSON.stringify(
              user,
            ),
          )

          return user
        },

        async logout() {
          try {
            if (this.token) {
              await authApi.logout()
            }
          } finally {
            this.clearAuth()
          }
        },

        clearAuth() {
          this.token = null

          this.tokenExpiresAt =
            null

          this.user = null

          localStorage.removeItem(
            'token',
          )

          localStorage.removeItem(
            'token_expires_at',
          )

          localStorage.removeItem(
            'user',
          )

          this.clearMfa()
        },
      },
    },
  )