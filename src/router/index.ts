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
    path: '/products_service/crossborder/:pair(kh-la|la-kh|th-la|la-th|vn-la|la-vn|ch-la|la-ch)',
    name: 'crossborder-product',
    component: () => import('../Views/products/product6.vue'),
  },
  //    {
  //   path: '/products_service/crossborder/kh-la',
  //   name: 'crossborder/kh-la', // was "home" before – duplicated
  //   component:vdoproductcrossborderKH_LA ,
  // },
  //    {
  //   path: '/products_service/crossborder/la-kh',
  //   name: 'crossborder/la-kh', // was "home" before – duplicated
  //   component:vdoproductcrossborderLA_KH ,
  // },
  //    {
  //   path: '/products_service/crossborder/th-la',
  //   name: 'crossborder/th-la', // was "home" before – duplicated
  //   component:vdoproductcrossborderTH_LA ,
  // },
  //    {
  //   path: '/products_service/crossborder/la-th',
  //   name: 'crossborder/la-th', // was "home" before – duplicated
  //   component:vdoproductcrossborderLA_TH ,
  // },
  //    {
  //   path: '/products_service/crossborder/vn-la',
  //   name: 'crossborder/la-vn', // was "home" before – duplicated
  //   component:vdoproductcrossborderVN_LA ,
  // },
  //    {
  //   path: '/products_service/crossborder/ch-la',
  //   name: 'crossborder/cn-la', // was "home" before – duplicated
  //   component:vdoproductcrossborderCN_LA ,
  // },
  

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
