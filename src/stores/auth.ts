import { defineStore } from 'pinia'
import { authApi } from '../api/auth.api'
import type { Account, LoginPayload } from '../types/auth'


interface AuthState {
  token: string | null
  tokenExpiresAt: string | null
  user: Account | null
  challengeId: string | null
  challengeExpiresAt: string | null
  loading: boolean
  otpLoading: boolean
}


const getStoredUser = (): Account | null => {
  const value = localStorage.getItem('user')

  if (!value) return null

  try {
    return JSON.parse(value) as Account
  } catch {
    localStorage.removeItem('user')
    return null
  }
}


export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('token'),
    tokenExpiresAt: localStorage.getItem('token_expires_at'),
    user: getStoredUser(),
    challengeId: sessionStorage.getItem('challenge_id'),
    challengeExpiresAt: sessionStorage.getItem('challenge_expires_at'),
    loading: false,
    otpLoading: false,
  }),

  getters: {
    isAuthenticated: state => {
      if (!state.token) return false
      if (!state.tokenExpiresAt) return true
      return (new Date(state.tokenExpiresAt).getTime() > Date.now())
    },

    requiresOtp: state => Boolean(state.challengeId),
    isChallengeExpired: state => {
      if (!state.challengeExpiresAt) return true
      return (new Date(state.challengeExpiresAt).getTime() <= Date.now())
    },

    isTokenExpired: state => {
      if (!state.tokenExpiresAt) return false
      return (new Date(state.tokenExpiresAt).getTime() <= Date.now())
    },
  },


  actions: {

    /*
     * ==========================================
     * LOGIN
     * ==========================================
     */

    async login(payload: LoginPayload) {
      this.loading = true

      try {
        const response = await authApi.login(payload)
        if (!response.success || !response.data) {
          throw new Error('Invalid login response.')
        }

        const {otp_required, challenge_id, expires_at} = response.data

        if (!otp_required || !challenge_id) {
          throw new Error('OTP challenge was not created.')
        }

        this.setChallenge( challenge_id, expires_at)
        return response

      } finally {
        this.loading = false
      }
    },

    /*
     * ==========================================
     * VERIFY OTP
     * ==========================================
     */

    async verifyOtp(otp: string) {
      if (!this.challengeId) {
        throw new Error('OTP challenge not found.')
      }

      if (this.isChallengeExpired) {
        this.clearChallenge()

        throw new Error('OTP session has expired. Please login again.')
      }

      this.otpLoading = true

      try {
        const response = await authApi.verifyOtp({
              challenge_id: this.challengeId,
              otp,
            })

        if (!response.success || !response.data) throw new Error('Invalid OTP verification response.')
        const {custom_token, account} = response.data
        if (!custom_token) throw new Error('Authentication token was not generated.')
      
        /*
         * Step 2:
         * Exchange Firebase custom
         * token for Firebase ID token.
         */
        const tokenResponse = await authApi.exchangeToken({custom_token})

        if (!tokenResponse.success || !tokenResponse.data) throw new Error('Unable to create authentication session.')

        const {id_token, expires_in} = tokenResponse.data
        const expiresAt = new Date(Date.now() + Number(expires_in) * 1000).toISOString()

        /*
         * Store authenticated state.
         */
        this.token = id_token
        this.tokenExpiresAt = expiresAt
        this.user = account

        localStorage.setItem('token', id_token)
        localStorage.setItem('token_expires_at', expiresAt)
        localStorage.setItem('user', JSON.stringify(account))

        /*
         * OTP challenge is no
         * longer needed.
         */
        this.clearChallenge()
        return response

      } finally {
        this.otpLoading = false
      }
    },

    /*
     * ==========================================
     * OTP CHALLENGE
     * ==========================================
     */

    setChallenge(challengeId: string, expiresAt: string) {
      this.challengeId = challengeId
      this.challengeExpiresAt = expiresAt

      sessionStorage.setItem('challenge_id', challengeId)
      sessionStorage.setItem('challenge_expires_at', expiresAt)
    },

    clearChallenge() {
      this.challengeId = null
      this.challengeExpiresAt = null

      sessionStorage.removeItem('challenge_id')
      sessionStorage.removeItem('challenge_expires_at')
    },


    /*
     * ==========================================
     * USER
     * ==========================================
     */

    async fetchUser() {
      const user = await authApi.getUser()
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      return user
    },


    /*
     * ==========================================
     * LOGOUT
     * ==========================================
     */

    async logout() {
      try {
        if (this.token) {
          await authApi.logout()
        }

      } finally {
        this.clearAuth()
      }
    },


    /*
     * ==========================================
     * CLEAR AUTH
     * ==========================================
     */

    clearAuth() {
      this.token = null
      this.tokenExpiresAt = null
      this.user = null

      localStorage.removeItem('token')
      localStorage.removeItem('token_expires_at')
      localStorage.removeItem('user')
      
      this.clearChallenge()
    },
  },
}
)