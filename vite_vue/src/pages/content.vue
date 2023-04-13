<template>
    <div class="content">
        <div class="leftContent">
            <TextCard v-for="ele in fakedata" :key="ele.id" :title="ele.title" :main-body="ele.mainBody"></TextCard>
        </div>
        <div class="avitor">
            <el-card :body-style="{ padding: '0px' }">
                <img
                src="https://tupian.qqw21.com/article/UploadPic/2021-3/202132721124233200.jpeg"
                class="image"
                />
                <div style="padding: 14px">
                <span>马泽伟||Mazewei</span>
                </div>
            </el-card>
        </div>
    </div>
    <!-- <div>
        <v-md-preview :text="text"></v-md-preview>
    </div> -->
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import TextCard from '@/components/textCard.vue';
const fakedata = reactive([
    {
        id: 0,
        title: '拼多多前端一面面经',
        mainBody: `如何一次性判断js的全部类型\nwebpack是做什么的，怎么优化\ncss 元素不可见的类型\n手写一个input组件`
    },
    {
        id: 1,
        title: '哔哩哔哩前端面经分享',
        mainBody: `说一下useState什么时候同步什么时候异步，为什么？原理是啥？\n 说一下react class和hooks的优缺点\n说一下react fiber\n说一下 proxy和object.defineProperty()的区别`
    },
    {
        id: 2,
        title: '这是一个随机的题目',
        mainBody: '这是一个随机的题目'
    }
])
</script>
 
<style lang='less' scoped>
.content {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 90%;
    background-color: #e7e7e7;
    display: flex;
    justify-content: center;
    > div {
        margin-top: 20px;
    }
    > div:first-child {
        margin-right: 80px;
    }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.leftContent{
    width: 70%;
    > div {
        margin-bottom: 20px;
    }
}
.avitor {
    width: 20%;
    
}
.box-card {
  width: 100%;
}

</style>