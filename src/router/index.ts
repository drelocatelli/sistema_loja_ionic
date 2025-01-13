import Index from '@/views/Index.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Dashboard from '@/views/Dashboard/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
