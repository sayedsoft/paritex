
<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue';
import globalConfig from '../../configs/global';
import logoWhite from '../../assets/logo/with-icon-white.svg'
import logoDark from '../../assets/logo/with-icon-dark.svg'
import iconWhite from '../../assets/logo/icon-white.svg'
import iconDark from '../../assets/logo/icon-dark.svg'
import { useDarkMode } from '../../stores/darkMode';
import { useUserSession, useClerk } from '../../stores/userSession';
import headerMenu from '@/assets/js/header-menu';



const siteName = ref(globalConfig.siteName)

const _darkMode = useDarkMode()
const darkMode = computed(() => { console.log(_darkMode.darkModeBoolen()); return _darkMode.darkModeBoolen() })
const _useUserSession = useUserSession()
const clerk = await useClerk()
const userSession = ref(_useUserSession)

onMounted(() => {
    headerMenu('.js-header')
})

</script>

<template>
    <header class="header js-header" data-id="#header">
        <div class="header__center center">
            <RouterLink to="/page/dashboard" class="header__logo" href="">
                <img v-if="!darkMode" class="header__pic header__pic_desktop" :src="logoWhite" :alt="siteName">
                <img v-else class="header__pic header__pic_desktop" :src="logoDark" :alt="siteName">

                <img v-if="!darkMode" class="header__pic header__pic_mobile" :src="iconWhite" :alt="siteName">
                <img v-else class="header__pic header__pic_mobile " :src="iconDark" :alt="siteName">
            </RouterLink>
            <div class="header__wrapper">

                <div class="header__wrap js-header-wrap">
                    <HeaderNav></HeaderNav>
                    <div v-if="!userSession.isLoggedIn" class="header__btns">
                        <a @click="clerk.openSignUp()" class="button-small header__button">Sign Up</a>
                        <a @click="clerk.openSignIn()" class="button-stroke button-small header__button">Login
                        </a>
                    </div>

                </div>

                <LangSwitcher></LangSwitcher>

                <div class="header__btns" v-if="!userSession.isLoggedIn">
                    <a class="button-small crp header__button" @click="clerk.openSignIn()">Login</a>
                    <a class="button-stroke crp button-small header__button" @click="clerk.openSignUp()">SignUp</a>
                </div>

                <div v-else class="header__item header__item_user js-header-item">
                    <button class="header__head js-header-head">
                        <img :src="clerk.user?.profileImageUrl" alt="Avatar">
                    </button>
                    <div class="header__body js-header-body">


                        <RouterLink to="/page/user/profile" class="header__el">
                            <div class="header__icon">
                                <svg class="icon icon-user">
                                    <use xlink:href="#icon-user"></use>
                                </svg>
                            </div>
                            <div class="header__details">
                                <div class="header__title">Profile</div>
                                <div class="header__content">Important account details</div>
                            </div>
                        </RouterLink>



                        <div class="header__el">
                            <div class="header__icon">
                                <svg class="icon icon-theme-dark">
                                    <use xlink:href="#icon-theme-dark"></use>
                                </svg>
                            </div>
                            <div class="header__details">
                                <div class="header__line">
                                    <div class="header__title">Dark mode</div>
                                    <label class="theme js-theme">
                                        <input class="theme__input" type="checkbox" /><span class="theme__inner"><span
                                                class="theme__box"></span></span>
                                    </label>
                                </div>
                                <div class="header__content">Switch dark/light mode</div>
                            </div>
                        </div><a class="header__el" href="#">
                            <div class="header__icon">
                                <svg class="icon icon-exit">
                                    <use xlink:href="#icon-exit"></use>
                                </svg>
                            </div>
                            <div class="header__details">
                                <div class="header__title">Log out</div>
                            </div>
                        </a>
                    </div>
                </div>

                <button class="header__burger js-header-burger"></button>

                <DarkModeSwitcher v-if="!userSession.isLoggedIn" class="mrl"></DarkModeSwitcher>
            </div>
        </div>
    </header>
</template>

<style>
.mrl {
    margin-left: 10px;
}

.crp {
    cursor: pointer;
}
</style>