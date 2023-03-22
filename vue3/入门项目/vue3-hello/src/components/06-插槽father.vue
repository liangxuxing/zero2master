<template>
    <div>
        这是父亲区域
        <div>
            <Child>
                <template v-slot:link>
                    <a href="./">点击跳转</a>
                </template>
                这是子区域
                <template v-slot:button="scope">
                    <button>按钮一个 {{ scope.aliasName }}</button>
                </template>
            </Child>
        </div>
    </div>
</template>

<script setup lang="ts">
import Child from './06-插槽child.vue'
</script>

<style scoped>

</style>