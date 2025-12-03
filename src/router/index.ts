import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../Views/Homepage/homepage.vue'
import product1 from '../Views/products/product1.vue'
import product2 from '../Views/products/product2.vue'
import product3 from '../Views/products/product3.vue'
import product4 from '../Views/products/product4.vue'
import product5 from '../Views/products/product5.vue'
import product6 from '../Views/products/product6.vue'
import companystructure from '../Views/Aboutus/companystructure/companystructure.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/products_service/atm-inquiry',
    name: 'atm-inquiry', // was "home" before – duplicated
    component: product1,
  },
  {
    path: '/products_service/atm-cash-withdraw',
    name: 'atm-cash-withdraw', // was "home" before – duplicated
    component: product2,
  },
  {
    path: '/products_service/atm-transfer',
    name: 'atm-transfer', // was "home" before – duplicated
    component: product3,
  },
  {
    path: '/products_service/mobile-transfer',
    name: 'mobile-transfer', // was "home" before – duplicated
    component: product4,
  },
  {
    path: '/products_service/qr-payment',
    name: 'qr-payment', // was "home" before – duplicated
    component: product5,
  },
   {
    path: '/products_service/crossborder',
    name: 'crossborder', // was "home" before – duplicated
    component: product6,
  },

  {
    path: '/aboutus/companystructure',
    name: 'companystructure', // was "home" before – duplicated
    component: companystructure,
  },
  

  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Or createWebHashHistory()
  routes,
})

export default router
