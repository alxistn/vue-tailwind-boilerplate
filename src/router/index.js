import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/login.vue'),
      meta: { requiresUnauth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/not-found.vue'),
    },
  ]
});

export default router
