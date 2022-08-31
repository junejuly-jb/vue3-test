<script setup>
    const emit = defineEmits(['increment', 'decrement', 'addN'])
    defineProps(['input'])
</script>
<template>
    <button @click="() => emit('increment')">Increment</button>
    <button @click="() => emit('decrement')">Decrement</button>
    <button @click="() => emit('addN')">Add {{ input }}</button>
</template>