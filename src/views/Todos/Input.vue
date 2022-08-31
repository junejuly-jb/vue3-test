<script setup>
    defineProps(['task', 'test'])
    const emits = defineEmits(['addTodo', 'update:task'])
</script>
<template>
    <div>
        <input type="text" :value="task" @input="(event) => emits('update:task', event.target.value)">
        <button @click="() => emits('addTodo')">Add</button>
    </div>
</template>