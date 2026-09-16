<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card
      flat
      bordered
      class="otp-card q-pa-lg"
    >
      <q-card-section class="text-center">
        <q-icon
          name="mark_email_read"
          size="64px"
          color="primary"
        />

        <div class="text-h5 text-weight-bold q-mt-md">
          Verify OTP
        </div>

        <div class="text-grey-7 q-mt-sm">
          Enter the 6-digit verification code
          sent to your email.
        </div>
      </q-card-section>

      <q-card-section>
        <q-form
          class="q-gutter-md"
          @submit.prevent="handleVerifyOtp"
        >
          <q-input
            :model-value="otp"
            outlined
            autofocus
            type="text"
            inputmode="numeric"
            maxlength="6"
            label="OTP Code"
            placeholder="000000"
            class="otp-input"
            :disable="authStore.otpLoading"
            :rules="otpRules"
            @update:model-value="sanitizeOtp"
          >
            <template #prepend>
              <q-icon name="password" />
            </template>
          </q-input>

          <q-btn
            type="submit"
            color="primary"
            label="Verify OTP"
            unelevated
            no-caps
            size="lg"
            class="full-width"
            :loading="authStore.otpLoading"
            :disable="!isOtpValid"
          />

          <q-btn
            flat
            no-caps
            color="grey-7"
            label="Back to login"
            class="full-width"
            :disable="authStore.otpLoading"
            @click="handleBackToLogin"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import {
  useOtp,
} from '../../composables/auth/useOtp'

const {
  otp,
  otpRules,
  isOtpValid,
  authStore,
  sanitizeOtp,
  handleVerifyOtp,
  handleBackToLogin,
} = useOtp()
</script>

<style scoped>
.otp-card {
  width: 100%;
  max-width: 420px;
}

.otp-input :deep(input) {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 8px;
}
</style>