<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Seção da Logo no Topo -->
      <div class="footer-logo-section">
        <img src="../../assets/img/saquecreditologo.png" alt="Logo Saque Crédito" class="footer-logo" />
        <br><br>
      </div>

      <!-- Grid Principal -->
      <div class="footer-grid">
        <!-- Institucional -->
        <div class="footer-section">
          <h3 class="footer-title">INSTITUCIONAL</h3>
          <ul class="footer-links">
            <li><router-link to="/politicas-de-privacidade" class="footer-link">Política de privacidade</router-link>
            </li>
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
          Em acordo com as diretrizes do BACEN, nos termos da Resolução nº 3.954 de 24 de fevereiro de 2011. Somos
          correspondentes bancários autorizados.
        </p>
        <p class="mt-2">
          <span class="font-bold">SAQUE INTERMEDIAÇÃO DE PAGAMENTOS E NEGÓCIOS LTDA</span><br>
          CNPJ: 55.173.878/0001-10<br>
          Rua Gil Veloso, nº11, Loja B, Campo Grande, Cariacica – ES<br>
          Todos os direitos reservados à Saque Crédito #2025
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
  background: linear-gradient(135deg, #1f9b5b 0%, #167a45 100%);
  /* Gradiente para um visual mais dinâmico */
  color: white;
  padding: 4rem 1.5rem;
  /* Aumentei o padding para mais espaço */
  position: relative;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.2);
  /* Sombra suave na parte superior */
}

.footer-container {
  max-width: 1280px;
  /* Aumentei o max-width para um layout mais amplo */
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  /* Aumentei o gap para mais espaçamento */
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
  margin-bottom: 2rem;
  /* Aumentei o margin-bottom para mais separação */
  padding: 1rem;
  /* Adicionei padding para melhor espaçamento interno */
  border-radius: 8px;
  /* Bordas arredondadas para um visual mais moderno */
  background: rgba(255, 255, 255, 0.05);
  /* Fundo sutil para destacar as seções */
  transition: transform 0.3s ease, background 0.3s ease;
  /* Animação suave */
}

.footer-section:hover {
  transform: translateY(-5px);
  /* Efeito de elevação ao passar o mouse */
  background: rgba(255, 255, 255, 0.1);
  /* Fundo mais claro ao hover */
}

.footer-title {
  font-size: 1.25rem;
  /* Aumentei o tamanho da fonte */
  font-weight: 700;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  /* Aumentei o espaçamento entre letras */
  color: #ffffff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  /* Borda mais visível */
  padding-bottom: 0.75rem;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 50px;
  height: 2px;
  background: #ffffff;
  /* Linha decorativa embaixo do título */
  transition: width 0.3s ease;
}

.footer-title:hover::after {
  width: 100%;
  /* Animação de expansão da linha ao hover */
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.9rem;
  /* Aumentei um pouco o tamanho da fonte */
  line-height: 2rem;
  /* Aumentei o espaçamento entre linhas */
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;
  position: relative;
}

.footer-link:hover {
  color: #ffffff;
  transform: translateX(8px);
  /* Aumentei o deslocamento ao hover */
  text-decoration: none;
  /* Removi o sublinhado padrão */
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #ffffff;
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
  /* Efeito de sublinhado animado ao hover */
}

.footer-text {
  font-size: 0.9rem;
  line-height: 1.75rem;
  /* Aumentei o espaçamento entre linhas */
  color: #e0e0e0;
  opacity: 0.9;
  /* Adicionei uma leve transparência */
  transition: opacity 0.3s ease;
}

.footer-text:hover {
  opacity: 1;
  /* Torna o texto mais visível ao hover */
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.75rem;
  /* Aumentei o gap para mais espaçamento */
}

@media (min-width: 1024px) {
  .social-icons {
    justify-content: flex-start;
  }
}

.social-icon {
  color: #ffffff;
  font-size: 2rem;
  /* Aumentei o tamanho dos ícones */
  transition: color 0.3s ease, transform 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  /* Sombra nos ícones */
}

.social-icon:hover {
  color: #f0f0f0;
  /* Cor mais clara ao hover */
  transform: scale(1.2) rotate(10deg);
  /* Efeito de escala e rotação */
}

.footer-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  /* Aumentei a opacidade da linha */
  margin: 3rem 0;
  /* Aumentei o margin para mais separação */
  position: relative;
}

.footer-divider::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: #ffffff;
  /* Detalhe decorativo no centro da linha */
}

.footer-legal {
  text-align: center;
  font-size: 0.8rem;
  color: #e0e0e0;
  line-height: 1.75;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
  /* Fundo sutil para destacar */
  border-radius: 8px;
}

.footer-legal p {
  margin: 0.5rem 0;
}

.whatsapp-float {
  position: fixed;
  bottom: 30px;
  /* Aumentei a distância do fundo */
  right: 30px;
  z-index: 1000;
}

.whatsapp-float img {
  width: 70px;
  /* Aumentei o tamanho do ícone */
  height: 70px;
  border-radius: 50%;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
  /* Sombra mais pronunciada */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  background: #25D366;
  /* Fundo verde do WhatsApp */
  padding: 10px;
  /* Adicionei padding para um visual mais integrado */
}

.whatsapp-float img:hover {
  transform: scale(1.15) rotate(5deg);
  /* Efeito de escala e rotação ao hover */
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
  /* Sombra mais intensa ao hover */
}
</style>