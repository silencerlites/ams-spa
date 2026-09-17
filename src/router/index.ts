import { defineRouter } from '#q-app'
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import routes from './routes'
import { useAuthStore } from '@/stores/auth'

export default defineRouter(() => {
  const createHistory = import.meta.env.QUASAR_SERVER ? createMemoryHistory : import.meta.env.QUASAR_VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory
  const Router = createRouter({
    scrollBehavior: () => ({left: 0, top: 0}),
    routes,
    history: createHistory(
      import.meta.env.QUASAR_VUE_ROUTER_BASE,
    ),
  })

  Router.beforeEach((to) => {
    if (import.meta.env.QUASAR_SERVER) return true
    const authStore = useAuthStore()

    const isAuthenticated = authStore.isAuthenticated
    const challengeId = sessionStorage.getItem('challenge_id')

    /*
     * Protected routes
     * Example: /dashboard
     */
    if (to.meta.requiresAuth && !isAuthenticated) {
      return { name: 'login' }
    }

    /*
     * OTP/MFA route requires
     * an existing MFA token.
     */
    if (to.meta.otpRequired &&!challengeId) {
      return { name: 'login' }
    }

    /*
     * Already authenticated,
     * don't allow OTP page.
     */
    if (to.meta.otpRequired && isAuthenticated) {
      return { name: 'dashboard' }
    }

    /*
     * Already authenticated,
     * don't allow login page.
     */
    if (to.meta.guest && isAuthenticated) {
      return { name: 'dashboard' }
    }

    /*
     * Login completed but MFA
     * verification is pending.
     */
    if (to.meta.guest && challengeId && !isAuthenticated) {
      return { name: 'verify-otp' }
    }

    return true
  })

  return Router
})