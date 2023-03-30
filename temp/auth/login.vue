<route lang="yaml">
meta:
  requiresAuth: false
</route>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useClerk } from '../../stores/userSession';
import { ref } from 'vue';

const loaded = ref(false);
const clerk = await useClerk()
const router = useRouter()
if (clerk.user != null) {
  router.push('/app')
  loaded.value = false
} else {
  loaded.value = true

  setTimeout(() => {
    const div = document.querySelector('#auth-form');
    clerk.mountUserProfile(div as any)
  }, 1000);

}


</script>

<template>
  <AuthLayout>



    <div class="login__wrap" v-if="loaded">
      <div class="entry">
        <div class="entry__top">
          <h3 class="entry__title h3">Sign in to BitCloud</h3>
          <div class="entry__info">Please ensure you are visiting the correct url.</div>
          <div class="entry__correct">
            <svg class="icon icon-lock">
              <use xlink:href="#icon-lock"></use>
            </svg>
            <div class="entry__url">https://<span>accounts.bitcloud.com/login</span></div>
          </div>
        </div>
        <div class="entry__form">
          <div id="auth-form"></div>
        </div>
        <div class="entry__wrap">
          <div class="entry__box">
            <div class="entry__details">
              <div class="entry__code"><img src="img/content/qr-code.jpg" alt="Qr code"></div>
              <button class="button-stroke entry__button">Download app</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loading-v" v-else>
      <LoadingAnimation class="an-i"></LoadingAnimation>
    </div>


  </AuthLayout>
</template>

<style scoped>
.loading-v {
  width: 100%;
}

.an-i {
  display: block;
  margin: auto;
  margin-top: 22%;
}
</style>