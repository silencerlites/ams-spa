import { defineRouter } from '#q-app'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import routes from './routes'

export default defineRouter(() => {
  const createHistory = import.meta.env.QUASAR_SERVER
    ? createMemoryHistory
    : import.meta.env.QUASAR_VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({
      left: 0,
      top: 0,
    }),

    routes,

    history: createHistory(
      import.meta.env.QUASAR_VUE_ROUTER_BASE,
    ),
  })

  Router.beforeEach((to) => {
    if (import.meta.env.QUASAR_SERVER) {
      return true
    }

    const token =
      localStorage.getItem('token')

    const mfaToken =
      sessionStorage.getItem('mfa_token')

    /*
     * Protected routes
     * Example: /dashboard
     */
    if (
      to.meta.requiresAuth &&
      !token
    ) {
      return {
        name: 'login',
      }
    }

    /*
     * OTP/MFA route requires
     * an existing MFA token.
     */
    if (
      to.meta.otpRequired &&
      !mfaToken
    ) {
      return {
        name: 'login',
      }
    }

    /*
     * Already authenticated,
     * don't allow OTP page.
     */
    if (
      to.meta.otpRequired &&
      token
    ) {
      return {
        name: 'dashboard',
      }
    }

    /*
     * Already authenticated,
     * don't allow login page.
     */
    if (
      to.meta.guest &&
      token
    ) {
      return {
        name: 'dashboard',
      }
    }

    /*
     * Login completed but MFA
     * verification is pending.
     */
    if (
      to.meta.guest &&
      mfaToken &&
      !token
    ) {
      return {
        name: 'verify-otp',
      }
    }

    return true
  })

  return Router
})