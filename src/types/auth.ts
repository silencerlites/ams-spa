export interface LoginPayload {
  email: string
  password: string
  turnstile_token: string
}

export interface LoginData {
  otp_required: boolean
  challenge_id: string
  expires_at: string
}

export interface LoginResponse {
  success: boolean
  message?: string
  data: LoginData
}

export interface VerifyOtpPayload {
  challenge_id: string
  otp: string
}

export interface Account {
  id: string
  uid: string
  email: string
  is_active: boolean
  roles: number[]
}

export interface VerifyOtpData {
  token_type: 'Firebase'
  custom_token: string
  account: Account
}

export interface VerifyOtpResponse {
  success: boolean
  message?: string
  data: VerifyOtpData
}

export interface ExchangeTokenPayload {
  custom_token: string
}

export interface ExchangeTokenData {
  id_token: string
  refresh_token: string
  expires_in: string
}

export interface ExchangeTokenResponse {
  success: boolean
  message?: string
  data: ExchangeTokenData
}