<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect"
    ellipsis="false"
    v-model="index"
  >
    <el-menu-item index="0" ><el-text  type="primary" class="title">博客</el-text></el-menu-item>
    <div class="flex-grow"></div>
    <el-menu-item index="homePage">首页</el-menu-item>
    <el-menu-item index="createArticle"><el-icon><Plus /></el-icon>创作</el-menu-item>
    <el-sub-menu index="3">
      <template #title>文档</template>
      <el-menu-item index="3-1">JavaScript</el-menu-item>
      <el-menu-item index="3-2">Vue</el-menu-item>
      <el-menu-item index="3-3">React</el-menu-item>
      <el-sub-menu index="3-4">
        <template #title>其他</template>
        <el-menu-item index="3-4-1">Vite</el-menu-item>
        <el-menu-item index="3-4-2">Webpack</el-menu-item>
        <el-menu-item index="3-4-3">暂无</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="4" disabled>随笔</el-menu-item>
    <el-menu-item index="5" disabled>个人介绍</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
    Plus,
  } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store/index';

const activeIndex = ref('1');
const activeIndex2 = ref('1');
const Router = useRouter();
const menuStore = useStore();
const index = ref();
const handleSelect = (key: string, keyPath: string[]) => {
  if(keyPath.length == 1) {
    Router.push(key); 
    menuStore.changeMenu(key);
  }
  console.log(index);
  

}
</script>

<style lang="less" scoped>

.flex-grow {
  flex-grow: 1;
}
.el-menu {
  position: fixed;
  width: 100%;
  height: 8%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(50%) blur(8px);
}
.title {
  font-size: 30px;
}
</style>
  