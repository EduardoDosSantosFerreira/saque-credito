<template>
  <div class="bg-green-500 py-10 text-center text-white">
    <h1 class="text-4xl font-bold">Facilidade e dinheiro no bolso!</h1>
    <p class="text-lg">Entenda como Funciona em 5 Passos</p>
  </div>

  <div id="funciona" class="max-w-6xl mx-auto py-10 px-4">
    <swiper
      :modules="[SwiperPagination, SwiperNavigation]"
      :slides-per-view="1"
      :space-between="15"
      :breakpoints="{
        640: { slidesPerView: 1.2, spaceBetween: 20 },
        768: { slidesPerView: 1.5, spaceBetween: 25 },
        1024: { slidesPerView: 2, spaceBetween: 30 },
        1280: { slidesPerView: 3, spaceBetween: 30 }
      }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="pb-10"
    >
      <swiper-slide v-for="(passo, index) in passos" :key="index">
        <div class="bg-white shadow-xl rounded-2xl p-6 text-center border border-gray-300 w-full max-w-[340px] h-[320px] flex flex-col justify-center mx-auto">
          <div class="text-green-500 text-5xl mb-4">
            <font-awesome-icon :icon="passo.icone" />
          </div>
          <h2 class="text-2xl font-bold">{{ passo.titulo }}</h2>
          <p class="text-gray-700 text-sm">{{ passo.descricao }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <div class="text-center">
    <button class="bg-green-600 text-white px-8 py-3 text-lg rounded-full flex items-center mx-auto shadow-lg hover:bg-green-700 transition">
      <font-awesome-icon :icon="['fas', 'play']" class="mr-2" />
      <a href="https://wa.me/5521983192355?text=Quero%20fazer%20uma%20simulação" 
       class="bg-green-600 text-white px-8 py-3 text-lg rounded-full flex items-center mx-auto shadow-lg hover:bg-green-700 transition">
        <font-awesome-icon :icon="['fas', 'play']" class="mr-2" />
        Simular Agora
    </a>    </button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination as SwiperPagination, Navigation as SwiperNavigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCreditCard, faUser, faMapMarkerAlt, faCalculator, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default {
  components: { Swiper, SwiperSlide, FontAwesomeIcon },
  setup() {
    const passos = [
      { icone: faCreditCard, titulo: 'Passo 01', descricao: 'Certifique-se de que você tem limite disponível em seu cartão de crédito pessoal e clique em “simular agora”.' },
      { icone: faUser, titulo: 'Passo 02', descricao: 'Preencha seus dados pessoais, como nome, data de nascimento...' },
      { icone: faMapMarkerAlt, titulo: 'Passo 03', descricao: 'Informe seu endereço completo, incluindo CEP e número da residência...' },
      { icone: faCalculator, titulo: 'Passo 04', descricao: 'Digite o valor desejado e escolha a quantidade de parcelas...' },
      { icone: faCheckCircle, titulo: 'Passo 05', descricao: 'Tire uma foto do seu rosto e dos documentos, assine o contrato online...' }
    ];

    return { passos, SwiperPagination, SwiperNavigation };
  }
};
</script>

<style>
.swiper-button-prev, .swiper-button-next {
  color: white;
  background: rgba(0, 0, 0, 0.3);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
