<route lang="yaml">
meta:
  requiresAuth: false
</route>
<script setup lang="ts">
import { reactive, ref, toRefs, watch } from 'vue';

import facebook from '@/assets/icons/facebook.svg'
import google from '@/assets/icons/google.svg'
import twitter from '@/assets/icons/twitter.svg'
import mail from '@/assets/icons/mail.svg'
import { IEvet, useGlobalEvents } from '@/stores/globalEvents';

const status = ref('otpForm')
const globalEvents = useGlobalEvents()
watch(globalEvents, async () => {
  if (globalEvents.eventGlobal?.name == 'showVerifyForm') {
    status.value = 'verifyFrom'
  }
})
</script>

<template>
  <AuthLayout>

    <div class="flex flex-col w-full">

      <div class="grid">
        <h2 class="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">Access account</h2>
        <div class="mt-2 text-left mb-2 intro-x text-slate-400 ">Access your account via magic link with your email below
        </div>
        <OtpEmailForm v-if="status == 'otpForm'"></OtpEmailForm>
        <OtpEmailVerifyForm v-else-if="status == 'verifyFrom'"></OtpEmailVerifyForm>
      </div>

      <div class="divider mt-10">OR</div>

      <div class="flex mt-4 flex-row">

        <div class="basis-auto grow mx-2 intro-x">
          <button class="btn btn-outline ">
            <img :src="google" class="h-10" alt="Google logo">
          </button>
        </div>

        <div class="basis-auto grow mx-2 intro-x">
          <button class="btn btn-outline">
            <img :src="twitter" class=" h-10" alt="Twitter logo">
          </button>
        </div>

        <div class="basis-auto grow mx-2 intro-x">
          <button class="btn btn-outline">
            <img :src="facebook" class="h-10" alt="Fabook logo">
          </button>
        </div>

        <div class="basis-auto grow mx-2 intro-x">
          <button class="btn btn-outline   ml-0 mr-0">
            <img :src="mail" class=" h-10" alt="Fabook logo">
          </button>
        </div>

      </div>


    </div>



  </AuthLayout>
</template>