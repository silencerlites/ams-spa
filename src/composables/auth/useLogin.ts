import { reactive, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import { getApiErrorMessage } from '../../utils/api-error'

export const useLogin = () => {
  const $q = useQuasar()
  const router = useRouter()
  const authStore = useAuthStore()

  const showPassword = ref(false)
  const turnstileToken = ref('')

  const form = reactive({
    email: '',
    password: '',
  })

  const emailRules = [
    (value: string) => Boolean(value) || 'Email is required',
    (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Enter a valid email address',
  ]

  const passwordRules = [(value: string) => Boolean(value) || 'Password is required']
  const togglePassword = () => { showPassword.value = !showPassword.value }
  const setTurnstileToken = (token: string) => { turnstileToken.value = token }

  const clearTurnstileToken = () => { turnstileToken.value = '' }

  const handleTurnstileError = (errorCode: string) => {
    turnstileToken.value = ''
    console.error('Turnstile error:', errorCode)

    $q.notify({
      type: 'negative',
      message: 'Security verification failed. Please try again.' })
  }

  const handleLogin = async () => {
      if (authStore.loading) return
    
      if (!turnstileToken.value) {
        $q.notify({
          type: 'negative',
          message: 'Please complete the security verification.',
        })
        return
      }

      try {
        const response =
          await authStore.login({
            email: form.email.trim(),
            password: form.password,
            turnstile_token: turnstileToken.value,
          })

        if (response.success && response.data?.mfa_token) {
          $q.notify({
            type: 'positive',
            message: 'Verification code sent to your email.',
          })

          await router.push({
            name: 'verify-otp',
          })
        }
      } catch (error) {
        clearTurnstileToken()

        $q.notify({
          type: 'negative',
          message: getApiErrorMessage(error, 'Invalid email or password.'),
        })
      }
    }

  return {
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
  }
}