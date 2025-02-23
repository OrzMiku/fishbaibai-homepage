<template>
    <header :class="[
        'sticky top-0 flex items-center justify-center w-full h-16 bg-white shadow z-1000 transition duration-300',
        showHeader ? 'opacity-100' : 'opacity-0',
        showHeader ? 'translate-y-0' : '-translate-y-full'
    ]"> 
        <nav class="flex items-center space-x-8 container p-4">
            <div class="text-2xl font-bold">FishBai</div>
            <RouterLink v-for="nav in navs" :key="nav.name" :class="[
                'hover:text-blue-500',
                route.path === nav.link ? 'active' : ''
            ]" :to="nav.link" :target="nav.external ? '_blank' : ''">{{ nav.name }}</RouterLink>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

interface HeaderProps {
    forceShowHeader?: boolean
    navs: {
        name: string,
        link: string,
        external?: boolean
    }[]
}

const props = defineProps<HeaderProps>()
const route = useRoute()

const forceShowHeader = props.forceShowHeader || false
const navs = props.navs
const showHeader = ref(true)
let lastScrollY = 0

const handleScroll = () => {
    if (forceShowHeader) return
    const currentScrollY = window.scrollY
    showHeader.value = currentScrollY < lastScrollY || currentScrollY < 100
    lastScrollY = currentScrollY
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
a {
    transform: translateY(1px);
}

a.active {
    color: #3182ce;
}

a.active::after {
    width: 100%;
}

a:hover {
    color: #3182ce;
    transition: color 0.3s;
}

a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: #3182ce;
    margin-top: 2px;
    transition: width 0.3s;
}

a:hover::after {
    width: 100%;
}
</style>