<script setup>
    import { ref } from '@vue/reactivity'
    import Mybutton from './Mybutton.vue'

    const count = ref(1)
    const input = ref(0)

    const increment = () => {
        count.value = count.value + 1
    }

    const decrement = () => {
        count.value = count.value - 1
    }

    const addN = () => {
        count.value = count.value + input.value
    }  
</script>
<template>
    <div>The Count is {{ count }}</div>
    <input type="number" v-model="input">
    <div>
        <Mybutton @increment="increment" @decrement="decrement" @addN="addN" :input="input"/>
    </div>
</template>

  