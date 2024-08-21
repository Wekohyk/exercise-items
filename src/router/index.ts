import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/myFlame',
      component: () => import('@/views/MyFlame.vue'),
      meta: { title: 'myFlame' },
    },
  ],
});

export default router;
