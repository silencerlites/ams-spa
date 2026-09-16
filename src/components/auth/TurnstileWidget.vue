<template>
  <div class="turnstile-wrapper">
    <div
      ref="turnstileContainer"
      class="turnstile-container"
    />

    <div
      v-if="errorMessage"
      class="text-negative text-caption q-mt-sm"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'

interface TurnstileOptions {
  sitekey: string

  theme?: 'light' | 'dark' | 'auto'

  size?:
    | 'normal'
    | 'compact'
    | 'flexible'

  callback?: (
    token: string,
  ) => void

  'expired-callback'?:
    () => void

  'error-callback'?:
    (
      errorCode: string,
    ) => void
}

interface TurnstileApi {
  render: (
    container:
      | HTMLElement
      | string,
    options: TurnstileOptions,
  ) => string

  reset: (
    widgetId?: string,
  ) => void

  remove: (
    widgetId: string,
  ) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const emit = defineEmits<{
  success: [token: string]
  expired: []
  error: [errorCode: string]
}>()

const turnstileContainer =
  ref<HTMLElement | null>(null)

const errorMessage =
  ref('')

let widgetId:
  | string
  | null = null

const siteKey =
  import.meta.env
    .QCLI_TURNSTILE_SITE_KEY

const loadTurnstileScript =
  (): Promise<void> => {
    return new Promise(
      (resolve, reject) => {
        if (
          window.turnstile
        ) {
          resolve()

          return
        }

        const existingScript =
          document.getElementById(
            'cloudflare-turnstile-script',
          )

        if (existingScript) {
          const interval =
            window.setInterval(
              () => {
                if (
                  window.turnstile
                ) {
                  window.clearInterval(
                    interval,
                  )

                  resolve()
                }
              },
              100,
            )

          return
        }

        const script =
          document.createElement(
            'script',
          )

        script.id =
          'cloudflare-turnstile-script'

        script.src =
          'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

        script.async = true
        script.defer = true

        script.onload = () => {
          resolve()
        }

        script.onerror = () => {
          reject(
            new Error(
              'Failed to load Cloudflare Turnstile.',
            ),
          )
        }

        document.head.appendChild(
          script,
        )
      },
    )
  }

const renderTurnstile =
  async () => {
    try {
      errorMessage.value = ''

      if (!siteKey) {
        throw new Error(
          'QCLI_TURNSTILE_SITE_KEY is missing.',
        )
      }

      if (
        !turnstileContainer.value
      ) {
        return
      }

      await loadTurnstileScript()

      if (
        !window.turnstile
      ) {
        throw new Error(
          'Cloudflare Turnstile API is unavailable.',
        )
      }

      widgetId =
        window.turnstile.render(
          turnstileContainer.value,
          {
            sitekey:
              siteKey,

            theme:
              'light',

            size:
              'normal',

            callback(
              token,
            ) {
              errorMessage.value =
                ''

              emit(
                'success',
                token,
              )
            },

            'expired-callback'() {
              emit(
                'expired',
              )
            },

            'error-callback'(
              errorCode,
            ) {
              errorMessage.value =
                `Turnstile error: ${errorCode}`

              emit(
                'error',
                errorCode,
              )
            },
          },
        )
    } catch (error) {
      console.error(
        'Turnstile:',
        error,
      )

      errorMessage.value =
        error instanceof Error
          ? error.message
          : 'Unable to load security verification.'
    }
  }

onMounted(() => {
  void renderTurnstile()
})

onBeforeUnmount(() => {
  if (
    widgetId &&
    window.turnstile
  ) {
    window.turnstile.remove(
      widgetId,
    )
  }
})
</script>

<style scoped>
.turnstile-wrapper {
  width: 100%;
}

.turnstile-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>