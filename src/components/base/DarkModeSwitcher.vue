
<script setup lang="ts">
import { useDarkMode } from '@/stores/darkMode';
import { ref, watch, computed } from 'vue';


const _darkMode = useDarkMode()
const darkMode = computed(() => { console.log(_darkMode.darkModeBoolen()); return _darkMode.darkModeBoolen() })

const switchDarkMode = (mode) => {
    _darkMode.setDarkMode(mode.toString())
}

</script>
<template>
    <label class="theme js-theme">
        <input class="theme__input" type="checkbox" /><span class="theme__icon">
            <svg v-if="darkMode" @click="switchDarkMode(false)" class="icon icon-theme-light">
                <use xlink:href="#icon-theme-light"></use>
            </svg>
            <svg v-else @click="switchDarkMode(true)" class="icon icon-theme-dark">
                <use xlink:href="#icon-theme-dark"></use>
            </svg></span>
    </label>
</template>