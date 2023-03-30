<script setup lang="ts">
import logoWhite from '../assets/logo/with-icon-white.svg'
import logoDark from '../assets/logo/with-icon-dark.svg'
import config from '../configs/global'
import { useDarkMode } from '@/stores/darkMode';
import { computed, ref } from 'vue';

const _darkMode = useDarkMode()
const darkMode = computed(() => { console.log(_darkMode.darkModeBoolen()); return _darkMode.darkModeBoolen() })
const siteName = ref(config.siteName)

</script>

<template>
    <div class="outer">
        <!-- header-->
        <!-- container-->
        <div class="outer__inner">
            <div class="login">
                <div class="login__col login__back">
                    <a class="login__logo">
                        <img v-if="!darkMode" class="logo-auth" :src="logoWhite" :alt="siteName">
                        <img v-else :src="logoDark" class="logo-auth" :alt="siteName">
                    </a>
                </div>
                <div class="login__col">
                    <slot></slot>
                </div>
            </div>
        </div>
        <!-- footer-->
    </div>
</template>

<style scoped>
.login__back {
    background-image: url('../assets/img/content/bg-login.png');
}

.logo-auth {
    width: 130px;
    display: block !important;
}
</style>
