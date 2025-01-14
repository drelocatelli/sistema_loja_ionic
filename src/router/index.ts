import Index from '@/views/Index.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Dashboard from '@/views/Dashboard/Dashboard.vue'
import Sales from '@/views/Dashboard/Sales/Sales.vue'
import DashboardRouteWrapper from '@/views/Dashboard/RouteWrapper.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
    name: 'Index'
  },
  {
    path: '/dashboard',
    component: DashboardRouteWrapper,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Dashboard
      },
      {
        name: 'sales',
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
