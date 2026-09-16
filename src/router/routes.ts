import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // Authentication pages
  {
    path: '/',
    component: () => import('@/layouts/AuthLayout.vue'),

    children: [
      {
        path: 'login',
        name: 'login',

        component: () =>
          import('@/pages/auth/LoginPage.vue'),

        meta: {
          guest: true,
        },
      },

      {
        path: 'verify-otp',
        name: 'verify-otp',

        component: () =>
          import('@/pages/auth/OtpPage.vue'),

        meta: {
          otpRequired: true,
        },
      },
    ],
  },

  // Authenticated application
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),

    children: [
      {
        path: '',
        redirect: '/dashboard',
      },

      {
        path: 'dashboard',
        name: 'dashboard',

        component: () =>
          import('@/pages/IndexPage.vue'),

        meta: {
          requiresAuth: true,
        },
      },

      {
        path: 'second',
        name: 'second',

        component: () =>
          import('@/pages/SecondPage.vue'),

        meta: {
          requiresAuth: true,
        },
      },
    ],
  },

  // 404
  {
    path: '/:catchAll(.*)*',
    name: 'not-found',

    component: () =>
      import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes