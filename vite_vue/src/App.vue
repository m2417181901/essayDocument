<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Menu from '@/pages/menu.vue';
import LeftMenu from '@/pages/leftMenu.vue';
import Content from '@/pages/content.vue';
</script>

<template>
  <Menu></Menu>
  <Content></Content>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
