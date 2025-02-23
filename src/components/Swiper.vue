<template>
    <!-- Swiper -->
    <div class="relative overflow-hidden group" 
         @touchstart="handleTouchStart" 
         @touchend="handleTouchEnd">
        <!-- Swiper Wrapper -->
        <div class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentItem * 100}%)` }">
            <div class="min-w-full" v-for="(item, index) in images" :key="item">
                <img :src="item" alt="Swiper Image" class="w-full h-full max-h-128 object-cover">
            </div>
        </div>
        <!-- Swiper Pagination -->
        <div
            class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex bg-white px-2 py-1 rounded-full opacity-80 md:opacity-0 group-hover:opacity-100 transition duration-300">
            <span v-for="(item, index) in images" :key="index" @click="selectSlide(index)" :class="[
                'w-2.5 h-2.5 rounded-full mx-1 cursor-pointer transition duration-300',
                currentItem === index ? 'bg-gray-800' : 'bg-gray-300'
            ]">
            </span>
        </div>
        <!-- Swiper Navigation: Prev -->
        <div class="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
            @click="manualPrevSlide">
            Prev
        </div>
        <!-- Swiper Navigation: Next -->
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
            @click="manualNextSlide">
            Next
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const { images } = defineProps<{
    images: string[];
}>();

const currentItem = ref(0);

let timer: number | undefined;
let touchStartX = 0;

function startAutoSlide() {
    timer = setInterval(() => {
        nextSlide();
    }, 3000);
}

function resetTimer() {
    if (timer) clearInterval(timer);
    startAutoSlide();
}

function nextSlide() {
    currentItem.value = (currentItem.value + 1) % images.length;
}

function prevSlide() {
    currentItem.value =
        (currentItem.value - 1 + images.length) % images.length;
}

function manualNextSlide() {
    nextSlide();
    resetTimer();
}

function manualPrevSlide() {
    prevSlide();
    resetTimer();
}

function selectSlide(index: number) {
    currentItem.value = index;
    resetTimer();
}

function handleTouchStart(e: TouchEvent) {
    touchStartX = e.changedTouches[0].clientX;
}

function handleTouchEnd(e: TouchEvent) {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    const threshold = 50;
    if (diffX > threshold) {
        manualNextSlide();
    } else if (diffX < -threshold) {
        manualPrevSlide();
    }
}

startAutoSlide();
</script>