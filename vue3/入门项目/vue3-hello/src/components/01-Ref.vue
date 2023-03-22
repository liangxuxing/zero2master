<template>
    <div>
            helloworld
            <button @click="hdPlus">{{ num }}</button>

            <button @click="num++">{{ num }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue'

export default defineComponent({
  
    setup () {
        // let num=5 非响应式
        // ref()函数是vue3提供的响应式hooks封装，包装后就是响应式数据。
        // 但是需要注意的是返回来的是一个封装好的对象，要取它的值是需要.value
        // 但是html模板不需要.value，因为vue3已经在编译时帮我们.value过了
        // 复杂类型用reactive 可以直接得到复杂类型的对象，然后直接.就可以
        // 
        let num = ref(1)
        const hdPlus=()=>{
            num.value++
        }

        return {
            num,
            hdPlus
        }
    }
})
</script>

<style scoped>

</style>