<script lang="ts" setup>
import { useHead } from '@vueuse/head';
useHead({

  script: [
    { type: 'text/javascript', src: '/js/lib/slick.min.js', body: true },
    { type: 'text/javascript', src: '/js/lib/jquery.nice-select.min.js', body: true },
    { type: 'text/javascript', src: '/js/app.js', body: true },
    { type: 'text/javascript', src: '/js/demo.js', body: true }

  ]
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade-slow" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>