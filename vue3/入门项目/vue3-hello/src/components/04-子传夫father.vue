<template>
    <div>
  <Child @childFn="hdChild"></Child>
  <p>{{ num }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child from './04-子传父child.vue'
let num=ref(1)
const hdChild=(a:number)=>{
    console.log('子传给父了');
    num.value+=a
}
</script>

<style scoped>

</style>