<template>
    <Swiper :images="swiperImages" />
</template>

<script setup lang="ts">
import Swiper from '@/components/Swiper.vue'

const swiperImages = [
    "images/egretta_snapshots/img0.webp",
    "images/egretta_snapshots/img1.webp",
    "images/egretta_snapshots/img2.webp",
    "images/egretta_snapshots/img3.webp",
    "images/egretta_snapshots/img4.webp",
];
</script>

<style>
#app {
    height: 100vh;
}
</style>