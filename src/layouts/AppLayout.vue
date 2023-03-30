<script setup lang="ts">
import { useHead } from '@vueuse/head';
import headerMenu from '@/assets/js/header-menu';
import { onMounted } from 'vue';

</script>

<template>
    <div class="outer">
        <PageHeader></PageHeader>

        <slot></slot>

        <DarkModeHidden></DarkModeHidden>
        <BaseInconeSvg></BaseInconeSvg>

        <PageFooter></PageFooter>
    </div>
</template>