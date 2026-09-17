export type TurnstileTheme = 'light' | 'dark' | 'auto'
export type TurnstileSize = 'normal' | 'compact' | 'flexible'

export interface TurnstileOptions {
  sitekey: string
  theme?: TurnstileTheme
  size?: TurnstileSize

  callback?: (token: string) => void
  'expired-callback'?: () => void
  'error-callback'?: (errorCode: string) => void
}

export interface TurnstileApi {
  render: ( container: HTMLElement | string, options: TurnstileOptions ) => string
  reset: ( widgetId?: string ) => void
  remove: ( widgetId: string ) => void
}

export interface UseTurnstileOptions {
  onSuccess?: ( token: string ) => void
  onExpired?: () => void
  onError?: ( errorCode: string ) => void
}

declare global { interface Window { turnstile?: TurnstileApi }}