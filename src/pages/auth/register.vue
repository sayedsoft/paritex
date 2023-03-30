<route lang="yaml">
meta:
  requiresAuth: false
</route>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const router = useRouter()


</script>

<template>
  <AuthLayout>


    <div class="space-y-4 space-m-0">

      <AppLogo :forceWhiteMode="true" loading="lazy" class="w-40 m-0	cnt -intro-x m-auto"></AppLogo>
      <h2 class="mb-8 text-1xl text-cyan-900 text-center -intro-x">Investrator Hesabınıza giriş yapın.</h2>
    </div>

    <div class="mt-2 grid space-y-4">

      <RegisterForm></RegisterForm>


    </div>


  </AuthLayout>
</template>