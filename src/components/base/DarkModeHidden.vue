<script setup lang="ts">
import { useDarkMode } from '@/stores/darkMode';
import { watch } from 'vue';

const darkMode = useDarkMode()
const setDarkMode = () => {

    darkMode.setupDarkMode()
}

watch(darkMode, () => {
    console.log('Theme mode : ' + darkMode)
})

setDarkMode()
</script>

<template></template>
