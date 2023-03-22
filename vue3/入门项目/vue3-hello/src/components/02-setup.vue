<template>
    <div>
        <p>{{ hell }}</p>
        <p>{{ wtf }}</p>
        <div>
            <button @click="hell++">按钮一</button>
            <button @click="wtf++">按钮一</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,toRefs,reactive } from 'vue';
let hell=ref(2)
let {wtf,shit}=toRefs(reactive({wtf:2,shit:3}))
</script>

<style scoped>

</style>