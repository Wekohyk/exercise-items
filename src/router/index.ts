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
      component: () => import('@/views/CreatorProgram/index.vue'),
      meta: { title: 'creatorProgram' },
    },
    {
      path: '/hasWidget',
      component: () => import('@/views/HasWidget.vue'),
      meta: { title: 'hasWidget' },
    },
  ],
});

export default router;
