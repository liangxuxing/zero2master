<template>
    <div>
        <button @click="hdChild">按钮子传父</button>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
const emit=defineEmits<{(event:'childFn',params:number):void}>()

const hdChild=()=>{
    emit('childFn',2)
}
</script>

<style lang="scss" scoped>

</style>