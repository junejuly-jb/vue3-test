<script setup>
    defineProps({
        todos: Array
    })
    const emits = defineEmits(['removeTodo'])
</script>
<template>
    <div v-for="(todo, index) in todos">{{todo.id}}. {{todo.task}} <button @click="() => emits('removeTodo', todo.id)">remove</button></div>
</template>