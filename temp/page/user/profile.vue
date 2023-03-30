<route lang="yaml">
meta:
  requiresAuth: true
</route>
<script setup lang="ts">
import { dark } from '@clerk/themes';
import { useClerk } from '@/stores/userSession';
import { useTemplateRefsList } from '@vueuse/core'
import { ref, onMounted } from 'vue';

const loaded = ref(false);
const clerk = await useClerk()
loaded.value = true
onMounted(() => {
    const div = document.querySelector('#user-profile');

    clerk.mountUserProfile(div as any, {
        appearance: {
            baseTheme: dark
        }
    })
})

</script>

<template>
    <div class="outer__inner">
        <div class="bidding js-bidding">
            <div class="bidding__head">
                <div class="bidding__center center">
                    <h2 class="bidding__title h6">Buy crypto</h2>
                    <div class="bidding__info">How to buy crypto on Bitcloud<a class="bidding__link"
                            href="learn-crypto.html">Learn now
                            <svg class="icon icon-arrow-right">
                                <use xlink:href="#icon-arrow-right"></use>
                            </svg></a></div>
                </div>
            </div>
            <div class="bidding__body">
                <div class="bidding__center center">
                    <div v-if="loaded" id="user-profile"></div>
                    <div class="loading-v" v-else>
                        <LoadingAnimation class="an-i"></LoadingAnimation>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>
<style >
.cl-rootBox>.div {
    width: 100% !important;
}

.cl-rootBox,
.cl-card {
    width: 100% !important;
}

.cl-internal-rx251b {
    width: 100% !important;
}

.cl-internal-1hsozea {
    background-color: rgb(12 13 14);
}

.loading-v {
    width: 100%;
}

.an-i {
    display: block !important;
    margin: auto;
    margin-top: 15%;
}
</style>
  