<template>
  <section class="info-section">
    <div class="container">
      <!-- Texto Principal -->
      <h2 class="title fade-in" ref="title">
        Ajudamos pessoas como você a manter seus compromissos financeiros em dia!
      </h2>

      <div class="content">
        <!-- Seção de Imagens -->
        <div class="image-grid slide-in-left" ref="imageGrid">
          <img class="image" src="@/assets/img/foto-saquecredito-1.png" alt="Imagem 1" />
        </div>

        <!-- Estatísticas -->
        <div class="stats">
          <div class="stat-box slide-in-right" ref="statBox1">
            <h3 class="counter" ref="counter1" data-target="80000">0</h3>
            <p>clientes atendidos e satisfeitos</p>
          </div>
          <div class="stat-box slide-in-right" ref="statBox2">
            <h3 class="counter" ref="counter2" data-target="30000000">0</h3>
            <p>de débitos parcelados com a Saque</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoSection",
  methods: {
    // Função para animar os contadores
    animateCounter(counterRef, target) {
      const counter = this.$refs[counterRef];
      let start = 0;
      const duration = 2000; // Duração da animação em milissegundos
      const step = (target - start) / (duration / 60); // Incremento por frame (60 FPS)

      const updateCounter = () => {
        start += step;
        if (start >= target) {
          counter.textContent = target.toLocaleString('pt-BR'); // Formata o número com separadores de milhar
          return;
        }
        counter.textContent = Math.floor(start).toLocaleString('pt-BR');
        requestAnimationFrame(updateCounter);
      };

      updateCounter();
    },
  },
  mounted() {
    // Animação do título
    setTimeout(() => {
      this.$refs.title.classList.add("visible");
    }, 200);

    // Animação da imagem
    setTimeout(() => {
      this.$refs.imageGrid.classList.add("visible");
    }, 400);

    // Animação das estatísticas
    setTimeout(() => {
      this.$refs.statBox1.classList.add("visible");
      this.animateCounter("counter1", 80000); // Inicia a contagem do primeiro número
    }, 600);

    setTimeout(() => {
      this.$refs.statBox2.classList.add("visible");
      this.animateCounter("counter2", 30000000); // Inicia a contagem do segundo número
    }, 800);
  },
};
</script>

<style scoped>
/* Seção principal */
.info-section {
  background-color: #2ebc73;
  padding: 60px 20px;
  text-align: center;
}

/* Container */
.container {
  max-width: 1000px;
  margin: 0 auto;
}

/* Título */
.title {
  color: #ffffff;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 40px;
  line-height: 1.4;
  opacity: 0;
}

/* Layout principal */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Imagens */
.image-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-bottom: 20px;
  opacity: 0;
}

.image {
  width: 100%;
  max-width: 450px;
  border-radius: 10px;
}

/* Estatísticas */
.stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
}

.stat-box {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  opacity: 0;
}

.stat-box h3 {
  font-size: 2rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 10px;
}

.stat-box p {
  font-size: 1.2rem;
  color: #333333;
  line-height: 1.5;
}

/* Animações */

/* Fade-in para o título */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide-in da esquerda para a imagem */
.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide-in da direita para as estatísticas */
.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Responsividade */
@media (min-width: 768px) {
  .content {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
  }

  .image-grid {
    margin-bottom: 0;
  }

  .stats {
    max-width: 550px;
  }
}
</style>