import { api } from '@/services/api'

import type {
  ExchangeTokenPayload,
  ExchangeTokenResponse,
  LoginPayload,
  LoginResponse,
  VerifyOtpPayload,
  VerifyOtpResponse,
} from '@/types/auth'

export const authApi = {
  login(payload: LoginPayload) {
    return api<LoginResponse>('/api/v1/auth/login', {
        method: 'POST',
        body: payload,
      },
    )
  },

  verifyOtp(payload: VerifyOtpPayload) {
    return api<VerifyOtpResponse>('/api/v1/auth/verify-login-otp', {
        method: 'POST',
        body: payload,
      },
    )
  },

  exchangeToken(payload: ExchangeTokenPayload) {
    return api<ExchangeTokenResponse>('/api/v1/auth/exchange-token', {
        method: 'POST',
        body: payload,
      },
    )
  },

  getUser() {
    return api('/api/v1/admin/auth/user')
  },

  logout() {
    return api('/api/v1/admin/auth/logout', {
        method: 'POST',
      },
    )
  },
}