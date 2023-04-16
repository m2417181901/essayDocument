<template>
    <KeepAlive>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>{{props.title}}</span>
                </div>
            </template>
            <div class="card-body">
                <!-- {{ props.mainBody }} -->
                <!-- TODO:这里需要加上Markdown展示框 -->
                <v-md-preview :text="props.mainBody"></v-md-preview>
            </div>
        </el-card>
    </KeepAlive>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
const props = defineProps<{
    title: string,
    mainBody: string
    }>()
</script>
 
<style lang='less' scoped>
.card-header {
  display: flex;
  justify-content: center;
  font-size: large;
  font-weight: bold;
}

.text {
  font-size: 14px;
}

.box-card {
  width: 70%;
  margin-left: 20px;
}
.card-body {
    text-align: left;
}
</style>