<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  if (!route.path.startsWith('/404')) {
    // window.location.href = `/404${route.fullPath}`
  }
})

useHead({
  meta: [
    {
      name: 'robots',
      content: 'noindex',
    },
  ],
})
</script>


<template></template>
