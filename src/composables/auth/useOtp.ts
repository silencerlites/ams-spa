import { computed, onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import { getApiErrorMessage } from '../../utils/api-error'

const OTP_LENGTH = 6

export const useOtp = () => {
  const $q = useQuasar()
  const router = useRouter()
  const authStore = useAuthStore()
  const otp = ref('')

  const otpRules = [
    (value: string) => Boolean(value) || 'OTP is required',
    (value: string) => /^\d+$/.test(value) || 'OTP must contain numbers only',
    (value: string) => value.length === OTP_LENGTH || `OTP must be ${OTP_LENGTH} digits`,
  ]

  const isOtpValid = computed(() => { return /^\d{6}$/.test(otp.value)})
  const sanitizeOtp = (value: | string | number | null) => { otp.value = String(value ?? '').replace(/\D/g, '').slice(0, OTP_LENGTH)}

  const handleVerifyOtp = async () => {
    if (!isOtpValid.value) {

      $q.notify({
        type: 'negative',
        message: 'Enter a valid 6-digit OTP.',
      })

      return
    }

    if (authStore.otpLoading) return

    try {
      await authStore.verifyOtp(otp.value)

      $q.notify({
        type: 'positive',
        message: 'Verification successful.'
      })

      await router.replace({ name: 'dashboard' })

    } catch (error) {
      $q.notify({
        type: 'negative',
        message: getApiErrorMessage(error, 'Invalid or expired verification code.'),
      })
    }
  }

  const handleBackToLogin = async () => {
    authStore.clearMfa()
    await router.replace({ name: 'login' })
  }

  onMounted(() => {
    if (!authStore.mfaToken) {
      void router.replace({ name: 'login' })
    }
  })

  return {
    otp,
    otpRules,
    isOtpValid,
    authStore,
    sanitizeOtp,
    handleVerifyOtp,
    handleBackToLogin,
  }
}