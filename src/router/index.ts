import { createRouter, createWebHistory } from 'vue-router';

import homepage from '../Views/Homepage/homepage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homepage,
  },

  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Or createWebHashHistory()
  routes,
});

export default router;