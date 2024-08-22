import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/myFlame',
      component: () => import('@/views/MyFlame.vue'),
      meta: { title: 'myFlame' },
    },
    {
      path: '/creatorProgram',
      component: () => import('@/views/CreatorProgram.vue'),
      meta: { title: 'creatorProgram' },
    },
  ],
});

export default router;
