import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router.js';

// Importações do Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBirthdayCake, faUserTie, faHeadset } from '@fortawesome/free-solid-svg-icons';

// Adicione os ícones à biblioteca
library.add(faBirthdayCake, faUserTie, faHeadset);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');