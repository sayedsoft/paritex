import { createApp as createClientApp, h, Suspense } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter } from './router'
import alltcApp from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import LoadScript from "vue-plugin-load-script";

import './styles'

export type alltcAppContext = Awaited<ReturnType<typeof createApp>>

import { registerGlobalComponents, registerRouterNavigationGuards } from './app-custom'
import { createApi } from './composable/useApi'



export async function createApp() {
  const head = createHead()
  const router = createRouter()
  const pinia = createPinia()
  const api = createApi()


  const app = createClientApp({
    // This is the global app setup function
    setup() {
      return () => {
        return h(Suspense, null, {
          default: () => h(alltcApp),
        })
      }
    },
  })

  const alltc = {
    app,
    api,
    router,
    head,
    pinia,
  }


  await registerGlobalComponents(alltc)
  app.use(alltc.pinia)
  app.use(alltc.head)
  app.use(LoadScript)

  await registerRouterNavigationGuards(alltc)
  app.use(alltc.router)
  app.use(Vue3Lottie, { name: 'LottieAnimation' })


  return alltc
}
