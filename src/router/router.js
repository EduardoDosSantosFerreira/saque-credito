import { createRouter, createWebHistory } from 'vue-router'
import SalesPage from '../views/SalesPage.vue';
import termosDeUso from '../views/termosDeUso.vue';
import privacyPolicy from '../views/privacyPolicy.vue';

const routes = [
  {
    path: '/',
    name: 'SalesPage',
    component: SalesPage
  },
  {
    path: '/termos-de-uso',
    name: 'termosDeUso',
    component: termosDeUso
  },
  {
    path: '/politicas-de-privacidade',
    name: 'privacyPolicy',
    component: privacyPolicy
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
