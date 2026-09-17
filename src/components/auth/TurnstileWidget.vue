<template>
  <div class="turnstile-wrapper">
    <div ref="turnstileContainer" class="turnstile-container"></div>
    <div v-if="errorMessage" class="text-negative text-caption q-mt-sm text-center">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useTurnstile} from '@/composables/auth/useTurnstile'

const emit = defineEmits<{
  success: [token: string]
  expired: []
  error: [errorCode: string]
}>()

const {errorMessage, reset} = useTurnstile({
  onSuccess(token) {
    emit('success', token)
  },

  onExpired() {
    emit('expired')
  },

  onError(errorCode) {
    emit('error', errorCode)
  },
})

defineExpose({ reset })
</script>

