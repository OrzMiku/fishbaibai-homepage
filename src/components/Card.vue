<script setup lang="ts">

export interface Link {
    link: string,
    target: "_blank" | "_self"
}

export interface CardProps {
    image: string
    title: string
    description: string
    tags: string[]
    link: Link | string | undefined 
}

const props = defineProps<CardProps>()

function handleCardClick() {
    if (typeof props.link === 'object') {
        window.open(props.link.link, props.link.target)
    } else if (typeof props.link === 'string') {
        window.open(props.link, '_self')
    }
}
</script>

<template>
    <div :class="['flex flex-col rounded overflow-hidden shadow-lg bg-white', { 'cursor-pointer': props.link }]"
        @click="handleCardClick">
        <div class="relative h-48 w-full">
            <img :src="image" :alt="title" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="px-6 py-4 grow">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base">{{ description }}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span v-for="(tag, index) in tags" :key="index"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{{ tag }}
            </span>
        </div>
    </div>
</template>