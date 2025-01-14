import Index from '@/views/Index.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Dashboard from '@/views/Dashboard/Dashboard.vue'
import Sales from '@/views/Dashboard/Sales/Index.vue'
import DashboardLayout from '@/layout/DashboardLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'vendas',
        component: Sales
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
