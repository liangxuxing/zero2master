<template>
    <div>
      <input type="checkbox" name="" id="" v-model="checkFlag" >全选/全不选
      <div>
        <li v-for="(item,index) in pdListItems" :key="index">
         <input type="checkbox" name="" id="" v-model="listItemBool[index]"><span>{{ item }}</span>
        </li>
      </div>
    </div>
</template>

<script setup lang="ts">
import {reactive,computed,toRefs} from 'vue' 
let pdList=reactive({
    pdListItems:['李白','李清照','辛弃疾'],
    listItemBool:[false,false,false]
})
let {pdListItems,listItemBool}=toRefs(pdList)
let checkFlag=computed({
    get(){
        return !pdList.listItemBool.includes(false)
    },
    set(newVal:boolean){
      pdList.listItemBool=  pdList.listItemBool.map(()=>newVal)
    }
})

</script>

<style scoped>

</style>