<template>
    <div>Todos</div>
</template>
<script>
import { ref } from '@vue/reactivity'
    export default{
        setup(){
            const todos = ref([
                { id: 1, todo: 'Clean up', complete: false },
                { id: 2, todo: 'Code pull request', complete: false },
            ])
        }
    }
</script>