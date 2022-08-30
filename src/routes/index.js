import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/todos',
        component: () => import('../views/Todos/Todos.vue')
    },
    {
        path: '/',
        component: () => import('../views/Home/home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router