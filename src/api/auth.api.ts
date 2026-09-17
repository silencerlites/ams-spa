import { api } from '@/services/api'

import type { LoginPayload, LoginResponse, VerifyOtpPayload, VerifyOtpResponse } from '@/types/auth'

export const authApi = {
  login(payload: LoginPayload) {
    return api<LoginResponse>('/api/v1/auth/login',
      {
        method: 'POST',
        body: payload,
      },
    )
  },

  verifyOtp(payload: VerifyOtpPayload) {
    return api<VerifyOtpResponse>('/api/v1/admin/auth/verify-mfa',
      {
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
    })
  },
}