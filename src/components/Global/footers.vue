<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Grid Principal -->
      <div class="footer-grid">
        <!-- Institucional -->
        <div class="footer-section">
          <h3 class="footer-title">INSTITUCIONAL</h3>
          <ul class="footer-links">
            <li><router-link to="/politicas-de-privacidade" class="footer-link">Política de privacidade</router-link></li>
            <li><router-link to="/politicas-de-cookies" class="footer-link">Política de cookies</router-link></li>
            <li><router-link to="/politicas-de-seguranca" class="footer-link">Política de segurança</router-link></li>
            <li><router-link to="/termos-de-uso" class="footer-link">Termos de Uso</router-link></li>
          </ul>
        </div>

        <!-- Endereço e Contato -->
        <div class="footer-section">
          <h3 class="footer-title">ENDEREÇO</h3>
          <p class="footer-text">Rua Gil Veloso, nº 11, Loja B,<br>Campo Grande, Cariacica - ES</p>
          <h3 class="footer-title mt-4">CONTATO</h3>
          <p class="footer-text">(27) 3127-3000</p>
        </div>

        <!-- Redes Sociais -->
        <div class="footer-section">
          <h3 class="footer-title">NOSSAS REDES SOCIAIS</h3>
          <div class="social-icons">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" class="social-icon">
              <font-awesome-icon :icon="['fab', link.icon]" />
            </a>
          </div>
        </div>
      </div>

      <!-- Linha Divisória -->
      <div class="footer-divider"></div>

      <!-- Informações Legais -->
      <div class="footer-legal">
        <p>
          Em acordo com as diretrizes do BACEN, nos termos da Resolução nº 3.954 de 24 de fevereiro de 2011. Somos correspondentes bancários autorizados.
        </p>
        <p class="mt-2">
          <span class="font-bold">SAQUE INTERMEDIAÇÃO DE PAGAMENTOS E NEGÓCIOS LTDA</span><br>
          CNPJ: 55.173.878/0001-10<br>
          Rua Gil Veloso, nº11, Loja B, Campo Grande, Cariacica – ES<br>
          Todos os direitos reservados à Saque Crédito #2024
        </p>
      </div>
    </div>

    <!-- WhatsApp Icon -->
    <a class="whatsapp-float" href="https://wa.me/5521983192355" target="_blank">
      <img alt="WhatsApp" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
    </a>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebookF, faInstagram, faYoutube);

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      socialLinks: [
        { name: 'Facebook', url: 'https://www.facebook.com/starconsignados/', icon: 'facebook-f' },
        { name: 'Instagram', url: 'https://www.instagram.com/starconsignados', icon: 'instagram' },
        { name: 'YouTube', url: 'https://www.youtube.com/', icon: 'youtube' }
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: #1f9b5b;
  color: white;
  padding: 3rem 1.5rem;
  position: relative;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
  }
}

.footer-section {
  margin-bottom: 1.5rem;
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #ffffff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.75rem;
  transition: color 0.3s ease, transform 0.2s ease;
  display: inline-block;
}

.footer-link:hover {
  color: #ffffff;
  transform: translateX(5px);
  text-decoration: underline;
}

.footer-text {
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #e0e0e0;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .social-icons {
    justify-content: flex-start;
  }
}

.social-icon {
  color: #ffffff;
  font-size: 1.75rem;
  transition: color 0.3s ease, transform 0.2s ease;
}

.social-icon:hover {
  color: #d1d1d1;
  transform: scale(1.1);
}

.footer-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 2rem 0;
}

.footer-legal {
  text-align: center;
  font-size: 0.75rem;
  color: #e0e0e0;
  line-height: 1.5;
  padding: 0 1rem;
}

.footer-legal p {
  margin: 0;
}

.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-float img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
}

.whatsapp-float img:hover {
  transform: scale(1.1);
}
</style>