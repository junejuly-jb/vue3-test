<script setup>
    import { ref } from 'vue';
    import TodoList from './TodoList.vue';
    import Input from './Input.vue';

    const todos = ref([
        { id: 1, task: 'Clean up', complete: false },
        { id: 2, task: 'Review code', complete: false },
        { id: 3, task: 'Check for code pull request', complete: false }
    ])
    const task = ref('')

    const addTodo = () => {
        const newTodo = {
            id: todos.value.length + 1,
            task: task.value,
            complete: false
        }
        todos.value.push(newTodo)
    }

    const removeTodo = (id) => {
        todos.value = todos.value.filter(el => el.id !== id );
    
    }

</script>
<template>
    <div>
        <h2>Todos</h2>
        <TodoList :todos="todos" @removeTodo="removeTodo"/>
        <Input v-model:task="task" @addTodo="addTodo"/>
    </div>
</template>