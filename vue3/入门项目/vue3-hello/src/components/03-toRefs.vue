<template>
    <div>
        <p>{{ a }}</p>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
        let a=toRefs({a:2})
    //   toRefs顾名思义，就是要将某个对象转成响应式的，一般搭配reactive使用
        return {
            a,  
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>