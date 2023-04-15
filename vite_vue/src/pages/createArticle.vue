<template>
    <div class="mdEditor">
        <div style="margin-left: 20%;"></div>
        <div style="height: 100%; width: 80%;">
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
        <div>
            <!-- TODO:这里加上文章的分类之类的扩展框 -->
        </div>
    </div>
    
</template>

<script lang="ts" setup>
import { ref, watch, getCurrentInstance } from 'vue';

import Notifycation from '@/components/notifycation.vue';

const { appContext } = getCurrentInstance()!
const text = ref();
const title = ref();
const notiRef = ref();
// watch(() => text.value, (oldV, newV) => {
//     console.log(oldV, newV)
// })
const saveNoti = ref(false);
const save = function(text:any, html:any) {
    console.log(text, html);
    notiRef.value.showNotifycation();
}

</script>
 
<style lang='less' scoped>
.mdEditor {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    > div:first-child {
        margin-left: 2%;
    }
}
</style>