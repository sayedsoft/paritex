import { useStorage } from '@vueuse/core';
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue';


export const useDarkMode = defineStore('darkMode', () => {

  const darkmodeStorage = useStorage('darkMode', 'false')

  const darkmode = ref('false')

  function updateDarkMode(_mode) {
    darkmode.value = _mode
    darkmodeStorage.value = _mode

    let _className = "dark"

    if (darkmodeStorage.value !== 'true') {
      _className = 'dark'
    } else {
      _className = 'light'
    }

    document.body.classList.remove('dark');
    document.body.classList.remove('light');

    document.body.classList.add(_className);
  }

  function setupDarkMode() {
    let _mode = 'false'

    if (darkmodeStorage.value !== 'true') {
      _mode = 'false'
    }
    else { _mode = 'true'; }



    updateDarkMode(_mode)
    return _mode
  }

  function setDarkMode(mode: string) {
    updateDarkMode(mode)
    console.log('darkMode', mode)
  }


  function darkModeBoolen() {
    return (darkmode.value == "true") ? true : false

  }

  return {
    setDarkMode,
    darkmodeStorage,
    setupDarkMode,
    darkModeBoolen,
    darkmode
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
  import.meta.hot.accept(acceptHMRUpdate(useDarkMode as any, import.meta.hot))
}
