<template>
    <div>The Count is {{ count }}</div>
    <input type="number" v-model="input">
    <div>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="addN">Add {{input}}</button>
    </div>
    <div>
      
    </div>
</template>
  
<script>
    import { ref } from '@vue/reactivity'
    export default{
        setup(){
        const count = ref(0)
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

        return { count, increment, decrement, input, addN }
        }
    }
</script>
  