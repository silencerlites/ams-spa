import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/AuthLayout.vue'),

    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
      },

      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/auth/LoginPage.vue'),

        meta: {
          guest: true,
        },
      },

      {
        path: 'verify-otp',
        name: 'verify-otp',
        component: () => import('@/pages/auth/OtpPage.vue'),

        meta: {
          otpRequired: true,
        },
      },

      /*
       * 404
       *
       * Keep this LAST.
       */
      {
        path: ':catchAll(.*)*',
        name: 'not-found',
        component: () => import('@/pages/ErrorNotFound.vue'),
      },
    ],
  },

  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),

    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/IndexPage.vue'),

        meta: {
          requiresAuth: true,
        },
      },

      {
        path: 'second',
        name: 'second',
        component: () => import('@/pages/SecondPage.vue'),

        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
]

export default routes