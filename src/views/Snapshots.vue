<template>
    <Swiper :images="snapshots" />
</template>

<script setup lang="ts">
import Swiper from '@/components/Swiper.vue'
import { snapshots } from '@/site.config';
</script>

<style>
#app {
    height: 100vh;
}
</style>