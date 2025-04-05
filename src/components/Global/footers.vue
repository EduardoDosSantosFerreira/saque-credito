<template>
<footer class="bg-green-500 text-white px-6 pt-10 pb-4">
  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
    <div>
      <h3 class="font-bold mb-2">INSTITUCIONAL</h3>
      <ul class="space-y-1 text-sm">
        <li>Sobre nós</li>
        <li>Política de privacidade</li>
        <li>Política de cookies</li>
        <li>Política de segurança</li>
        <li>Diretrizes BACEN</li>
        <li>Termos de Uso</li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold mb-2">SERVIÇOS</h3>
      <ul class="space-y-1 text-sm">
        <li>PIX parcelado</li>
        <li class="font-bold mt-2">SEJA NOSSO PARCEIRO</li>
        <li>Como Funciona</li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold mb-2">BLOG</h3>
      <ul class="space-y-1 text-sm">
        <li>O que é score ?</li>
        <li>Como aumentar score ?</li>
        <li>Como BC cria dinheiro ?</li>
        <li>Concurso BACEN</li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold mb-2">ENDEREÇO</h3>
      <p class="text-sm">Rua Gil Veloso, nº 11, Loja B,<br>Campo Grande, Cariacica - ES</p>
      <h3 class="font-bold mt-4 mb-1">CONTATO</h3>
      <p class="text-sm">(27) 3127-3000</p>
    </div>

    <div>
      <h3 class="font-bold mb-2">NOSSAS REDES SOCIAIS</h3>
      <div class="flex justify-center md:justify-start space-x-4 text-2xl">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
      </div>
    </div>
  </div>

  <div class="border-t border-white/20 my-6"></div>

  <div class="flex flex-wrap justify-center gap-6 mb-6">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" class="h-6">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Mastercard-logo.png" alt="MasterCard" class="h-6">
    <img src="https://logodownload.org/wp-content/uploads/2019/08/hipercard-logo-0.png" alt="Hipercard" class="h-6">
    <img src="https://logodownload.org/wp-content/uploads/2017/04/elo-logo-0.png" alt="Elo" class="h-6">
    <img src="https://www.gstatic.com/identity/branding/product/1x/googleg_64dp.png" alt="Google Site Seguro" class="h-6">
    <img src="https://img.icons8.com/external-flat-icons-inmotus-design/67/external-security-cyber-security-flat-icons-inmotus-design.png" alt="Reclame Aqui" class="h-6">
  </div>

  <div class="text-center text-xs text-white/90 px-4 leading-relaxed">
    Em acordo com as diretrizes do BACEN, nos termos da Resolução nº 3.954 de 24 de fevereiro de 2011. Somos correspondentes bancários autorizados.<br><br>

    <span class="font-bold">SAQUE INTERMEDIAÇÃO DE PAGAMENTOS E NEGÓCIOS LTDA</span><br>
    CNPJ: 55.173.878/0001-10<br>
    Rua Gil Veloso, nº11, Loja B, Campo Grande, Cariacica – ES<br>
    Todos os direitos reservados à Saque Crédito #2024
  </div>
    <!-- Whatsapp Icon -->
    <a class="whatsapp-float" href="https://wa.me/5521983192355" target="_blank">
      <img alt="WhatsApp" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
    </a>
  </footer>
</template>

<script>
// Importar o Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Adicionar os ícones à biblioteca
library.add(faPhone, faEnvelope, faMapMarkerAlt, faFacebook, faInstagram)

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      socialLinks: [
        { name: 'Facebook', url: 'https://www.facebook.com/starconsignados/', icon: 'facebook' },
        { name: 'Instagram', url: 'https://www.instagram.com/starconsignados', icon: 'instagram' }
      ]
    };
  }
};
</script>

<style scoped>
/* Estilo base do footer */
footer {
  background-color: #1f9b5b;
}

/* Ícone do WhatsApp flutuante */
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-float img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
}

.whatsapp-float img:hover {
  transform: scale(1.1);
}
</style>