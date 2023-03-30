<script setup lang="ts">
import { useDarkMode } from '../../stores/darkMode';
import { computed, ref } from 'vue';
import logoWhite from '../../assets/logo/with-icon-white.svg'
import logoDark from '../../assets/logo/with-icon-dark.svg'
import globalConfig from '../../configs/global';
const siteName = ref(globalConfig.siteName)
const _darkMode = useDarkMode()
const darkMode = computed(() => { console.log(_darkMode.darkModeBoolen()); return _darkMode.darkModeBoolen() })
</script>
<template>
    <!-- footer-->
    <footer class="footer">
        <div class="footer__body">
            <div class="footer__center center">
                <div class="footer__col">
                    <RouterLink to="/page/dashboard" class="header__logo" href="">
                        <img v-if="!darkMode" class="header__pic header__pic_desktop" :src="logoWhite" :alt="siteName">
                        <img v-else class="header__pic header__pic_desktop" :src="logoDark" :alt="siteName">


                    </RouterLink>
                    <div class="footer__item">
                        <div class="footer__category">footer nav
                            <svg class="icon icon-arrow-down">
                                <use xlink:href="#icon-arrow-down"></use>
                            </svg>
                        </div>
                        <div class="footer__menu"><a class="footer__link" href="exchange.html">Exchange</a><a
                                class="footer__link" href="buy-crypto.html">Buy crypto</a><a class="footer__link"
                                href="market.html">Market</a><a class="footer__link" href="learn-crypto.html">Learn
                                crypto</a><a class="footer__link" href="contact.html">Contact</a></div>
                    </div>
                </div>
                <div class="footer__col">
                    <div class="footer__category">contact</div>
                    <div class="footer__info">
                        <p>43252 Borer Mountains</p>
                        <p>Zackerychester</p>
                        <p>Bahamas</p>
                        <p>732-528-4945</p>
                    </div>
                </div>
                <div class="footer__col">
                    <div class="footer__category">newsletter</div>
                    <div class="footer__info">Subscribe our newsletter to get more free design course and resource.</div>
                    <form class="subscription">
                        <input class="subscription__input" type="email" name="email" placeholder="Enter your email" />
                        <button class="subscription__btn">
                            <svg class="icon icon-arrow-next">
                                <use xlink:href="#icon-arrow-next"></use>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="footer__foot">
            <div class="footer__center center">
                <div class="footer__copyright">Copyright © 2021 UI8 LLC. All rights reserved</div>
                <div class="footer__socials"><a class="footer__social" href="https://www.facebook.com/ui8.net/"
                        target="_blank">
                        <svg class="icon icon-facebook">
                            <use xlink:href="#icon-facebook"></use>
                        </svg></a><a class="footer__social" href="https://twitter.com/ui8" target="_blank">
                        <svg class="icon icon-twitter">
                            <use xlink:href="#icon-twitter"></use>
                        </svg></a><a class="footer__social" href="https://www.instagram.com/ui8net/" target="_blank">
                        <svg class="icon icon-instagram">
                            <use xlink:href="#icon-instagram"></use>
                        </svg></a><a class="footer__social" href="https://dribbble.com/ui8" target="_blank">
                        <svg class="icon icon-dribbble">
                            <use xlink:href="#icon-dribbble"></use>
                        </svg></a><a class="footer__social" href="https://www.behance.net/ui8" target="_blank">
                        <svg class="icon icon-behance">
                            <use xlink:href="#icon-behance"></use>
                        </svg></a></div>
            </div>
        </div>
    </footer>
</template>