<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card flat bordered class="login-card q-pa-lg">
      <q-card-section class="text-center">
        <q-icon name="lock" size="56px" color="primary" />

        <div class="text-h5 text-weight-bold q-mt-md"> Welcome Back </div>
        <div class="text-grey-7 q-mt-sm"> Sign in to continue </div>
      </q-card-section>

      <q-card-section>
        <q-form class="q-gutter-md" @submit.prevent="submitLogin">

          <q-input v-model="form.email" outlined type="email" label="Email" autocomplete="email" :disable="authStore.loading" :rules="emailRules">
            <template #prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-input v-model="form.password" outlined :type="showPassword ? 'text' : 'password'" label="Password" autocomplete="current-password" :disable="authStore.loading" :rules="passwordRules">
            <template #prepend>
              <q-icon name="lock" />
            </template>

            <template #append>
              <q-icon class="cursor-pointer" :name="showPassword ? 'visibility_off' : 'visibility'" @click="togglePassword"/>
            </template>
          </q-input>

          <TurnstileWidget ref="turnstileRef" @success="setTurnstileToken" @expired="clearTurnstileToken" @error="handleTurnstileError" />

          <q-btn type="submit" color="primary" label="Login" unelevated no-caps size="lg" class="full-width" :loading="authStore.loading" :disable="authStore.loading || !turnstileToken" />

        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import TurnstileWidget from '@/components/auth/TurnstileWidget.vue'
import { ref } from 'vue'
import { useLogin } from '@/composables/auth/useLogin'

const turnstileRef = ref<{reset: () => void} | null>(null)

const {
  form,
  showPassword,
  turnstileToken,
  emailRules,
  passwordRules,
  authStore,
  togglePassword,
  setTurnstileToken,
  clearTurnstileToken,
  handleTurnstileError,
  handleLogin,
} = useLogin()

const submitLogin = async () => { 
    const success = await handleLogin()
    
    if (!success) {
      clearTurnstileToken()
      turnstileRef.value?.reset()
    }
  }
</script>