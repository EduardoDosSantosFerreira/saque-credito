<template>
  <section class="hero-section">
    <div class="container">
      <div class="grid">
        <!-- Texto e Call to Action -->
        <div class="text-content">
          <h1 class="fade" ref="title">Precisando de <br> dinheiro?</h1>
          <h4 class="fade" ref="subtitle">
            Faça seu Limite do Cartão de Crédito virar DINHEIRO na sua Conta Agora Mesmo
          </h4>

          <!-- Avaliações -->
          <div class="review">
            <span class="reviews-count">(+ de 10.000 clientes satisfeitos)</span>
          </div>

          <!-- Botão de Call to Action -->
          <a href="https://api.whatsapp.com/send/?phone=5521983192355&text=Olá,%20gostaria%20de%20simular%20meu%20crédito%20consignado!" target="_blank">
            <button class="cta-button">FALE CONOSCO</button>
          </a>
        </div>

        <!-- Imagem -->
        <div class="image-wrapper">
          <img class="hero-image fade" ref="heroImage" src="@/assets/img/muie.png" alt="Imagem do Hero Section" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  mounted() {
    setTimeout(() => {
      this.$refs.title.classList.add("visible");
    }, 200);

    setTimeout(() => {
      this.$refs.subtitle.classList.add("visible");
    }, 400);

    setTimeout(() => {
      this.$refs.heroImage.classList.add("visible");
    }, 600);
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
  height: 80vh;
  padding: 4rem 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
  text-align: center;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
}

/* Textos */
h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #000000;
}

h4 {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #000000;
}

/* Reviews */
.review {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .review {
    justify-content: flex-start;
  }
}

.reviews-count {
  font-size: 1rem;
  color: #000000;
  font-weight: 500;
}

/* Botão de Ação */
.cta-button {
  background-color: #2ebc73;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  background-color: #188f53;
  transform: scale(1.05);
}

.cta-button:active {
  transform: scale(0.98);
}

/* Imagem */
.image-wrapper {
  display: flex;
  justify-content: center;
}

.hero-image {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  transition: transform 0.5s ease-in-out, opacity 1s ease-in-out;
}

.hero-image:hover {
  transform: scale(1.05);
}

/* Fade-in animation */
.fade {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.fade.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-section {
    height: auto;
    padding: 2rem 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  .cta-button {
    width: 100%;
    padding: 12px 0;
  }
}
</style>
