<template>
    <div class="mdEditor">
        <!-- <div style="margin-left: 20%;"></div> -->
        <div style="height: 100%; width: 100%;">
            <el-input
                size="large"
                maxlength="50"
                placeholder="请输入文章的标题"
                v-model="title"
                show-word-limit
            >
                <template #prepend>文章标题：</template>
            </el-input>
            <el-divider />
            <v-md-editor v-model="text" height="100%" @save="save"></v-md-editor>
            <Notifycation ref="notiRef">
                <template #title>
                    <span style="color: black;">保存</span>
                </template>
                <template #content>
                    <span style="color: green;">成功</span>
                </template>
            </Notifycation>
        </div>
        <div class="right">
            <!-- TODO:这里加上文章的分类之类的扩展框 -->
            <el-button @click="createArticle">发表</el-button>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
import { ref, watch, getCurrentInstance } from 'vue';
import Notifycation from '@/components/notifycation.vue';
import { createDocument } from '@/configs/requests';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
const menuStore = useStore();
const text = ref();
const title = ref();
const notiRef = ref();
const Router = useRouter();
// watch(() => text.value, (oldV, newV) => {
//     console.log(oldV, newV)
// })
const saveNoti = ref(false);
const save = function(text:any, html:any) {
    console.log(text, html);
    notiRef.value.showNotifycation();
};
const createArticle = function() {
    createDocument({
        cate: 'homepage',
        title: title.value,
        text: text.value
    }).then( res => {
        if(res.data == 'success') {
            Router.push('/homepage');
            menuStore.changeMenu('homepage');
        }
    })
    if(title.value.length == 0) {

    }
}
</script>
 
<style lang='less' scoped>
.mdEditor {
    display: flex;
    // justify-content: center;
    // align-items: center;
    height: 100%;
    width: 100%;
    > div:first-child {
        margin-left: 2%;
    }
    text-align: left;
}
.right {
    align-self: flex-end;
    position: fixed;
    right:0;
    bottom: 12%;
    width: 18%;
    height: 50px;
    margin-right: 20px;
    button {
        width: 100%;
        height: 100%;
        font-size: large;
        font-weight: bolder;
        letter-spacing: 10px;
    }
}
</style>