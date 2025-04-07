<template>
  <section class="hero-section">
    <div class="container">
      <div class="grid">
        <!-- Texto e Call to Action -->
        <div class="text-content">
          <h1 class="fade title-animation" ref="title">Precisando de <br> dinheiro?</h1>
          <h4 class="fade subtitle-animation" ref="subtitle">
            Faça seu <span class="highlight-green">Limite do Cartão de Crédito</span> virar <span class="highlight-bold">DINHEIRO na sua Conta Agora Mesmo</span>
          </h4>

          <!-- Benefícios -->
          <div class="benefits">
            <div class="benefit-item slide-in" ref="benefit1">
              <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p>Em poucos minutos, sem burocracia e sem precisar ter o nome limpo.</p>
            </div>
            <div class="benefit-item slide-in" ref="benefit2">
              <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p>Basta ter Limite Disponível no Seu Cartão de Crédito.</p>
            </div>
          </div>

          <!-- Botão de Call to Action -->
          <a :href="whatsappLink" target="_blank">
            <button class="cta-button pulse-animation" ref="ctaButton">
              <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              Ver como funciona
            </button>
          </a>
        </div>

        <!-- Imagem -->
        <div class="image-wrapper">
          <img class="hero-image fade-image" ref="heroImage" src="@/assets/img/muie.png" alt="Imagem do Hero Section" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      whatsappNumber: '5521983192355',
      whatsappMessage: 'Olá, gostaria de solicitar meu crédito',
    };
  },
  computed: {
    whatsappLink() {
      return `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodeURIComponent(this.whatsappMessage)}`;
    },
  },
  mounted() {
    // Animação do título
    setTimeout(() => {
      this.$refs.title.classList.add("visible");
    }, 200);

    // Animação do subtítulo
    setTimeout(() => {
      this.$refs.subtitle.classList.add("visible");
    }, 400);

    // Animação dos benefícios
    setTimeout(() => {
      this.$refs.benefit1.classList.add("visible");
    }, 600);
    setTimeout(() => {
      this.$refs.benefit2.classList.add("visible");
    }, 800);

    // Animação da imagem
    setTimeout(() => {
      this.$refs.heroImage.classList.add("visible");
    }, 1000);

    // Animação do botão
    setTimeout(() => {
      this.$refs.ctaButton.classList.add("visible");
    }, 1200);
  },
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem 0;
  overflow: hidden;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Textos */
.text-content {
  text-align: left;
  padding: 1rem;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 1rem;
  display: inline-block;
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }
}

h4 {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 1.5rem;
}

.highlight-green {
  color: #2ebc73;
}

.highlight-bold {
  font-weight: 700;
}

/* Benefícios */
.benefits {
  margin-bottom: 2rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333;
  opacity: 0;
}

.check-icon {
  width: 24px;
  height: 24px;
  color: #2ebc73;
}

/* Botão de Ação */
.cta-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #2ebc73;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  opacity: 0;
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

/* Imagem */
.image-wrapper {
  display: flex;
  justify-content: center;
}

.hero-image {
  width: 100%;
  max-width: 550px;
  border-radius: 10px;
}

/* Animações */

/* Fade para a imagem */
.fade-image {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.fade-image.visible {
  opacity: 1;
  transform: scale(1);
}

/* Animação de "typing" para o título */
.title-animation {
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #2ebc73;
  animation: typing 2s steps(30, end) forwards, blink 0.5s step-end infinite;
}

.title-animation.visible {
  opacity: 1;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

/* Slide-in para o subtítulo e benefícios */
.subtitle-animation,
.slide-in {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.subtitle-animation.visible,
.slide-in.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Pulse para o botão */
.pulse-animation {
  opacity: 0;
  animation: pulse 1.5s infinite ease-in-out;
}

.pulse-animation.visible {
  opacity: 1;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding: 2rem 0;
  }

  .text-content {
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  .benefit-item {
    font-size: 0.9rem;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
    padding: 0.75rem 0;
  }

  .hero-image {
    max-width: 300px;
  }
}
</style>