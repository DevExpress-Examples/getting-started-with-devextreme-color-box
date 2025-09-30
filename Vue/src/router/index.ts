import { createRouter, createWebHistory } from 'vue-router';
import ColorBoxView from '../views/ColorBoxView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ColorBoxView,
    },
  ],
});

export default router;
