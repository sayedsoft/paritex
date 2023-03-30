import { createApp } from './app'
import * as NProgress from 'nprogress'
import * as dotenv from 'dotenv'


createApp().then(async (alltc) => {
  /**
   * Handle NProgress display on page changes
   */
  alltc.router.beforeEach((router) => {
    NProgress.start()
  })
  alltc.router.afterEach(() => {
    NProgress.done()
  })

  // wait for the app to be ready
  await alltc.router.isReady()


  // finaly mount the app to the DOM
  alltc.app.mount('#app')
})
