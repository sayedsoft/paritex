import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { ref } from 'vue';


export interface IEvet {
  name: string;
  data?: any;
}

export const useGlobalEvents = defineStore('globalEvents', () => {

  const eventGlobal = ref<IEvet>()

  const lastEvetId = ref<string>('')

  function setEvent(event: IEvet) {
    eventGlobal.value = event
    lastEvetId.value = ''
  }

  function getEvent() {
    return eventGlobal.value
  }

  return {
    eventGlobal,
    lastEvetId,
    setEvent,
    getEvent
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalEvents as any, import.meta.hot))
}
