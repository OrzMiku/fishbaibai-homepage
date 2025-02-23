<template>
  <div id="app">
    <Header :navs />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import { useRouter } from 'vue-router'

// Navs
const router = useRouter()
const navs = router.getRoutes()
  .filter(route => route.meta?.showInNav)
  .map(route => ({
    name: route.meta?.title as string || route.name as string,
    link: route.path
  }))
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
