<template>
    <div class="w-full max-w-7xl mx-auto py-10 px-4 flex gap-8">
        <img class="w-32 rounded-full shadow-md" src="images/avater.webp" alt="avater">
        <div>
            <h1 class="relative inline-block text-4xl group">
                {{ personalInfos.name }}
                <span
                    class="block absolute left-0 bottom-[-0.5rem] h-1 bg-current w-0 transition-all duration-300 group-hover:w-full"></span>
            </h1>
            <p class="text-gray-500 mt-4">{{ personalInfos.description }}</p>
        </div>
    </div>
    <div class="w-full max-w-7xl mx-auto py-10 px-4">
        <div>
            <h2 class="relative inline-block text-4xl group">
                作品集
                <span
                    class="block absolute left-0 bottom-[-0.5rem] h-1 bg-current w-0 transition-all duration-300 group-hover:w-full"></span>
            </h2>
            <p class="text-gray-500 mt-4">{{ personalInfos.name }} 最新力作</p>
        </div>
        <div class="flex flex-wrap gap-4 mt-8">
            <Card class="grow max-w-md" v-for="project in projects" :key="project.title" v-bind="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue';
import { projects, personalInfos } from '@/site.config';
</script>