import { defineAsyncComponent } from 'vue'
import { START_LOCATION } from 'vue-router'
import { useClerk, useUserSession } from './stores/userSession'
import { useLoading } from './stores/loading'

// Lazy load aditional components
export async function registerGlobalComponents({ app }: any) {

}

export async function registerRouterNavigationGuards({ router, api }: any) {

  const clerk = await useClerk()

  router.beforeEach(async (to: any, from: any) => {
    if (to.name == 'login-admin' || to.name == "all") return

    const isStart = () => { return (from === START_LOCATION) ? true : false }

    const hasRequiresAuth = () => { return (to.meta.requiresAuth == undefined) ? false : to.meta.requiresAuth }

    const hasLoggedIn = (clerk.user != null) ? true : false
    if (hasRequiresAuth() && !hasLoggedIn) {
      return { name: 'auth' }
    } else if (!hasRequiresAuth() && hasLoggedIn) {
      if (!isStart()) return { name: 'page/dashboard' }
    }
  })
}

