import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/todos',
        component: () => import('../views/todos.vue')
    },
    {
        path: '/',
        component: () => import('../views/home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router