<script setup>
    defineProps(['todos'])
</script>
<template>
    <div v-for="todos in todo" :key="todo.id">{{todo.todo}}</div>
</template>