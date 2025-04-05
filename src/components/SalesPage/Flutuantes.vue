<template>
  <section class="py-12 bg-gradient-to-br from-gray-50 to-gray-100 sm:py-16 lg:py-20 xl:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
        <!-- Conteúdo -->
        <div class="lg:order-1">
          <h2 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Como obter meu empréstimo?
          </h2>
          <ul role="list" class="mt-8 space-y-4 sm:mt-10 xl:mt-12">
            <li v-for="(step, index) in steps" :key="index"
              class="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <span
                class="flex items-center justify-center w-10 h-10 mr-4 text-lg font-semibold text-white rounded-full bg-green-700 shrink-0">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <p class="text-base text-gray-600 sm:text-lg">
                <span v-if="index === 0" class="font-semibold text-gray-800">{{ step }}</span>
                <span v-else>{{ step }}</span>
              </p>
            </li>
          </ul>
          <div class="mt-8 sm:mt-10 flex items-center space-x-4">
            <p class="text-xl font-bold text-green-600 sm:text-2xl flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Dinheiro na conta!
            </p>
            <a href="https://api.whatsapp.com/send/?phone=555521983192355&text=Ol%C3%A1,%20gostaria%20de%20simular%20meu%20saldo%20FGTS!"
              class="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-black bg-gray-300 rounded-lg shadow-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
              role="button" aria-label="Fale com um consultor para obter seu empréstimo">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Falar com consultor
            </a>
          </div>
        </div>

        <!-- Imagem -->
        <div class="lg:order-2 flex justify-center">
          <div class="relative w-full max-w-md">
            <img class="object-cover w-full rounded-2xl shadow-xl border border-gray-200" :src="imageSrc"
              alt="Ilustração de uma pessoa acessando o FGTS para empréstimo" loading="lazy"
              @error="handleImageError" />
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorksSection',
  data() {
    return {
      steps: [
        'Ser maior de 18 anos ou emancipado',
        'CPF em situação regular na Receita',
        'Ter conta-corrente ou poupança',
        'Optar pelo saque de aniversário',
        'Autorizar o banco a acessar seus dados e valores do FGTS',
        'Aprovação da simulação',
      ],
      imageSrc: '/homem.webp',
    };
  },
  methods: {
    handleImageError(event) {
      event.target.src = 'https://via.placeholder.com/600x400?text=Imagem+Indisponível';
    },
  },
};
</script>

<style scoped>
/* Estilos base */
section {
  background: linear-gradient(to bottom right, #f9fafb, #f3f4f6);
  /* Gradiente sutil */
}

/* Transições e animações */
ul li {
  animation: fadeInUp 0.5s ease-out forwards;
  animation-delay: calc(var(--index) * 0.1s);
  /* Animação escalonada */
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade */
@media (max-width: 639px) {
  section {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  h2 {
    font-size: 1.875rem;
    /* text-3xl */
  }

  ul {
    margin-top: 1.5rem;
    /* space-y-4; Removido para corrigir erro */
  }

  li {
    padding: 1rem;
  }

  li span {
    width: 2.25rem;
    /* w-9 */
    height: 2.25rem;
    /* h-9 */
    font-size: 1rem;
    /* text-base */
  }

  li p {
    font-size: 0.875rem;
    /* text-sm */
  }

  .mt-8 {
    margin-top: 1.5rem;
    flex-direction: column;
    /* space-x-0; Removido para corrigir erro */
    /* space-y-4; Removido para corrigir erro */
  }

  a {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    /* text-sm */
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  h2 {
    font-size: 2.25rem;
    /* text-4xl */
  }

  li p {
    font-size: 1rem;
    /* text-base */
  }
}
</style>
