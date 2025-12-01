import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../Views/Homepage/homepage.vue'
import Product1 from '../Views/products/product1.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/products_service/product1',
    name: 'product1', // was "home" before – duplicated
    component: Product1,
  },
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Or createWebHashHistory()
  routes,
})

export default router
