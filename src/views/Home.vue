<template>
    <Swiper :images="swiperImages" />
    <div class="w-7xl mx-auto py-10 px-4">
        <div>
            <h1 class="relative inline-block text-4xl group">
                作品集
                <span
                    class="block absolute left-0 bottom-[-0.5rem] h-1 bg-current w-0 transition-all duration-300 group-hover:w-full"></span>
            </h1>
            <p class="text-gray-500 mt-4">Fish 鱼摆摆最新力作</p>
        </div>
        <div class="flex flex-wrap gap-4 mt-8">
            <Card class="grow max-w-md" v-for="project in projects" :key="project.title" v-bind="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Swiper from '@/components/Swiper.vue'
import Card from '@/components/Card.vue'

const projects = [
    {
        title: 'Egretta 高清写实',
        description: '国产最新高清分辨率材质包，以写实的材质风格来描述现实的诗篇。',
        image: 'images/egretta_snapshots/img0.webp',
        tags: ['128x', '256x', '512x'],
        link: {
            link: 'https://minegraph.cn/resourcepacks/59',
            target: '_blank'
        }
    },
    {
        title: "VOXT PBR 创想体素",
        description: "立体像素，优秀的PBR体验。",
        image: "images/covers/voxt_1.webp",
        tags: ["16x"],
        link: {
            link: "https://minegraph.cn/resourcepacks/14",
            target: "_blank"
        }
    }
]

const swiperImages = [
    "images/egretta_snapshots/img0.webp",
    "images/egretta_snapshots/img1.webp",
    "images/egretta_snapshots/img2.webp",
    "images/egretta_snapshots/img3.webp",
    "images/egretta_snapshots/img4.webp",
];
</script>