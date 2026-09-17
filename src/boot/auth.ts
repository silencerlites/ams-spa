import { defineBoot } from '#q-app'

export default defineBoot(({ router }) => {
  if (import.meta.env.QUASAR_SERVER) return
  

  window.addEventListener('auth:unauthorized', () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      sessionStorage.removeItem('otp_challenge_id')

      if (router.currentRoute.value.path !== '/login') {
        void router.replace('/login')
      }
    },
  )
})