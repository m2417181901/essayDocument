<template>
    <teleport to='body'>
        <transition name="notify">
            <div class="msgBox" v-if="state">
                <div class="header">
                        <slot name="title"></slot>
                        <el-icon><Close /></el-icon>
                        <!-- TODO:此处需要添加关闭按钮 目前有bug -->
                </div>
                <div class='Hr'></div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { Close } from '@element-plus/icons-vue'
// const props = defineProps<{
//     showState: boolean
// }>()
const state = ref(false);
// onMounted(() => {
//     const timer = setTimeout(() => {
//         state.value = false;
//     }, 4000);
//     console.log("触发了通知窗口");
// })
watch(() => state.value, (newV: boolean, oldV: boolean) => {
    console.log(oldV, newV)
    if(newV == true) {
        const timer = setTimeout(() => {
        state.value = false;
        }, 2000);
        console.log("触发了watch窗口");
    }
})
function showNotifycation() {
    state.value = true;
}
defineExpose({
    showNotifycation
});
</script>
 
<style lang='less' scoped>
.msgBox {
    height: 100px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 0;
    top: 20%;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgb(171, 171, 171);
    border-radius: 5px;
    z-index: 1;
    font-family: Arial, Helvetica, sans-serif;
}
.Hr {
    width: 80%;
    border: 1px solid rgb(103, 103, 103);
}
.header {
    margin-left: 10px;
    font-size: large;
    height: 33px;
    line-height: 33px;
    display: flex;
    justify-content: space-between;
}
.content {
    text-align: center;
    height: 66px;
    line-height: 66px;
}

.notify-leave-active {
    transition: transform 0.2s ease;
}
.notify-enter-active {
    transition: transform 0.4s ease;
}

.notify-enter-from,
.notify-leave-to {
    transform: translateX(300px);
}
</style>