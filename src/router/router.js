import { createRouter, createWebHistory } from 'vue-router';
import SalesPage from '../views/SalesPage.vue';
import TermsOfUse from '../views/terms-of-use.vue';
import PrivacyPolicy from '../views/privacy-policy.vue';
import CookiesPolicy from '../views/cookies-policy.vue';
import SecurityPolicy from '../views/security-policy.vue';

// Definindo as rotas
const routes = [
  {
    path: '/',
    name: 'SalesPage',
    component: SalesPage
  },
  {
    path: '/termos-de-uso',
    name: 'TermsOfUse', // Ajustado para PascalCase
    component: TermsOfUse
  },
  {
    path: '/politicas-de-privacidade',
    name: 'PrivacyPolicy', // Ajustado para PascalCase
    component: PrivacyPolicy
  },
  {
    path: '/politicas-de-cookies',
    name: 'CookiesPolicy', // Ajustado para PascalCase e caminho mais consistente
    component: CookiesPolicy
  },
  {
    path: '/politicas-de-seguranca',
    name: 'SecurityPolicy', // Ajustado para PascalCase e caminho mais consistente
    component: SecurityPolicy
  },
  // Rota 404 (opcional, com componente básico inline)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: {
      template: '<div><h1>404 - Página Não Encontrada</h1><p>Desculpe, a página que você está procurando não existe.</p><router-link to="/">Voltar para a Home</router-link></div>'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;