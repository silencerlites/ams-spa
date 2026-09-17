import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import type { UseTurnstileOptions } from '@/types/turnstile'

const TURNSTILE_SCRIPT_ID = 'cloudflare-turnstile-script'
const TURNSTILE_SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

export const useTurnstile = (options: UseTurnstileOptions = {}) => {
    const turnstileContainer = useTemplateRef<HTMLElement>('turnstileContainer')
    const errorMessage = ref('')
    const token = ref('')
    const loading = ref(false)

    let widgetId: string | null = null

    const siteKey = import.meta.env.QCLI_TURNSTILE_SITE_KEY

    const loadScript = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            if (window.turnstile) {
                resolve()
                return
            }

            const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID)

            if (existingScript) {
                const interval = window.setInterval(() => {
                    if (window.turnstile) {
                        window.clearInterval(interval)
                        resolve()
                    }
                }, 100)
                return
            }

            const script = document.createElement('script')

            script.id = TURNSTILE_SCRIPT_ID
            script.src = TURNSTILE_SCRIPT_URL

            script.async = true
            script.defer = true

            script.onload = () => { resolve() }
            script.onerror = () => { reject(new Error('Failed to load Cloudflare Turnstile.')) }

            document.head.appendChild(script)
        },
        )
    }

    const renderTurnstile =
        async () => {
            try {
                loading.value = true
                errorMessage.value = ''
                token.value = ''

                if (!siteKey) {
                    throw new Error('QCLI_TURNSTILE_SITE_KEY is missing.')
                }

                if (!turnstileContainer.value) return

                await loadScript()

                if (!window.turnstile) {
                    throw new Error('Cloudflare Turnstile API is unavailable.')
                }

                widgetId = window.turnstile.render(turnstileContainer.value,
                    {
                        sitekey: siteKey,
                        theme: 'light',
                        size: 'normal',
                        callback(generatedToken) {
                            token.value = generatedToken
                            errorMessage.value = ''
                            options.onSuccess?.(generatedToken)
                        },

                        'expired-callback'() {
                            token.value = ''
                            options.onExpired?.()
                        },

                        'error-callback'(errorCode) {
                            token.value = ''
                            errorMessage.value = `Turnstile error: ${errorCode}`
                            options.onError?.(errorCode)
                        },
                    },
                )
            } catch (error) {
                console.error('Turnstile:', error)
                errorMessage.value = error instanceof Error ? error.message : 'Unable to load security verification.'
            } finally {
                loading.value = false
            }
        }

    const reset = () => {
        token.value = ''
        errorMessage.value = ''

        if (widgetId && window.turnstile) {
            window.turnstile.reset(widgetId)
        }
    }

    const remove = () => {
        if (widgetId && window.turnstile) {
            window.turnstile.remove(widgetId)
            widgetId = null
        }
        token.value = ''
    }

    onMounted(() => {
        void renderTurnstile()
    })

    onBeforeUnmount(() => {
        remove()
    })

    return {
        token,
        loading,
        errorMessage,
        renderTurnstile,
        reset,
        remove,
    }
}