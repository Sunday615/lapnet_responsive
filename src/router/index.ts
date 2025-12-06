import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../Views/Homepage/homepage.vue'
import product1 from '../Views/products/product1.vue'
import product2 from '../Views/products/product2.vue'
import product3 from '../Views/products/product3.vue'
import product4 from '../Views/products/product4.vue'
import product5 from '../Views/products/product5.vue'
import product6 from '../Views/products/product6.vue'
import companystructure from '../Views/Aboutus/companystructure/companystructure.vue'
import membercardATM from '../Views/member/membercard/membercardATM.vue'
import membermobile_banking from '../Views/member/membercard/membermobile_banking.vue'
import membercrossborder from '../Views/member/membercard/membercrossborder.vue'
import Joinus from '../Views/joinus/joinus.vue'
import bloggrid from '../Views/blog/bloggrid/bloggrid.vue'
import Board_director from '../Views/Aboutus/board_director/board_director.vue'
import Role from '../Views/Aboutus/role/role.vue'
import Vision from '../Views/Aboutus/vision/vision.vue'
import History from '../Views/Aboutus/history/history.vue'
import Contactus from '../Views/contact/contactus.vue'

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
  // ############################### member path #####################################





   {
    path: '/member/membercardATM',
    name: 'membercardATM', // was "home" before – duplicated
    component: membercardATM,
  },

    {
    path: '/member/mobile_banking',
    name: 'mobile_banking', // was "home" before – duplicated
    component: membermobile_banking,
  },

     {
    path: '/member/crossborder',
    name: 'crossborder', // was "home" before – duplicated
    component:membercrossborder,
  },


  // ######################### Joinus ##########################

     {
    path: '/joinus',
    name: 'joinus', // was "home" before – duplicated
    component:Joinus,
  },

  // ######################### Blog and news ##########################

 {
    path: '/bloggrid',
    name: 'bloggrid', // was "home" before – duplicated
    component:bloggrid,
  },

    // ######################### About us  ##########################

  {
    path: '/aboutus/companystructure',
    name: 'companystructure', // was "home" before – duplicated
    component: companystructure,
  },
  {
    path: '/aboutus/board_director',
    name: 'board_director', // was "home" before – duplicated
    component: Board_director,
  },
    {
    path: '/aboutus/role',
    name: 'role', // was "home" before – duplicated
    component: Role,
  },
     {
    path: '/aboutus/vision',
    name: 'vision', // was "home" before – duplicated
    component: Vision,
  },
     {
    path: '/aboutus/history',
    name: 'history', // was "home" before – duplicated
    component: History,
  },

   // ######################### Contact us  ##########################

  {
    path: '/contactus',
    name: 'contactus', // was "home" before – duplicated
    component: Contactus,
  },


  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Or createWebHashHistory()
  routes,
})

export default router
