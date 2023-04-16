<template>
        <TextCard v-for="ele in eleData.data" :key="ele.id" :title="ele.title" :main-body="ele.text"></TextCard>
    </template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import TextCard from '@/components/textCard.vue';
import { getHomepage } from '@/configs/readJson'; 

const eleData = ref<{
    data: {title: string, text: string, id: string}[]
}>(
    {
        data: [
            {
                title: '',
                text: '',
                id:''
            }
        ]
    }
);
getHomepage().then(res => {
    eleData.value = res.data;
});
onMounted(() => {
    console.log("执行了挂载方法");
})
</script>

<style lang='less' scoped>
.box-card {
  width: 100%;
  margin-bottom: 20px;
}

</style>