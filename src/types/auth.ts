export interface RolePivot {
  model_type: string
  model_id: number
  role_id: number
}

export interface Role {
  id: number
  name: string
  pivot?: RolePivot
}

export interface User {
  id: number
  email: string
  active: boolean
  email_verified_at: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  roles: Role[]
}

export interface LoginPayload {
  email: string
  password: string
  turnstile_token: string
}

export interface MfaStep {
  name: string
  completed: boolean
  type: string
  enrolled: boolean
}

export interface LoginData {
  mfa_token: string
  mfa_token_expires_at: string
  mfa_steps: MfaStep[]
}

export interface LoginResponse {
  success: boolean
  message?: string
  data: LoginData
}

export interface VerifyOtpPayload {
  mfa_token: string
  code: string
}

export interface VerifyOtpData {
  token: string
  token_name: string
  expires_at: string
  user: User
}

export interface VerifyOtpResponse {
  success: boolean
  message?: string
  data: VerifyOtpData
}