import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TaskView.vue'
import TaskView from '../views/TaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskView,
    },
  ],
})

export default router
