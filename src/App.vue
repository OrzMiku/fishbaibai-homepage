<template>
  <div id="app">
    <Header :navs />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'

const navs = [
  {
    name: '首页',
    link: '/',
  },
  {
    name: '关于',
    link: '/about',
  },
]
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
