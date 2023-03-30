import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import clerkAuth from '@/composable/clerkAuth'
import Clerk from '@clerk/clerk-js';

export type UserData = Record<string, any> | null

const publishableKey = "pk_test_YXJyaXZpbmctc3RpbmdyYXktOTYuY2xlcmsuYWNjb3VudHMuZGV2JA";

const clerk = new Clerk(publishableKey);
await clerk.load({
  supportEmail: "support@paritexcyprus.com",
  signInUrl: "https://accounts.paritexcyprus.com/sign-in"
});

const clerisSetted = false
export const useClerk = async () => {
  if (!clerisSetted) {
    await clerk.load({
      supportEmail: "support@paritexcyprus.com",
      signInUrl: "https://accounts.paritexcyprus.com/sign-in"
    });
  }


  return clerk
}

const _clerk = await useClerk()

export const useUserSession = defineStore('userSession', () => {

  const userData = ref(_clerk)
  const isLoggedIn = computed(() => (_clerk.user != null) ? true : false)
  return {
    isLoggedIn,
    userData
  }
})

const ss = useUserSession as any

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(ss, import.meta.hot))
}
