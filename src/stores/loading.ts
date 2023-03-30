import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

export const useLoading = defineStore('loading', () => {

    const loadingStatus = useStorage('loadingStatus', '')

    const isLloading = computed(() => loadingStatus.value !== undefined && loadingStatus.value == 'loading')

    const load = () => {
        loadingStatus.value = "loading"
        return loadingStatus.value
    }

    const dissmisLoad = () => {
        loadingStatus.value = ""
        return loadingStatus.value
    }

    return {
        loadingStatus,
        isLloading,
        load,
        dissmisLoad
    }
})

const ss = useLoading as any

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
