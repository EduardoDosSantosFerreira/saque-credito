<template>
  <div class="bg-green-500 py-10 text-center text-white">
    <h1 class="text-4xl font-bold">Saiba Mais!</h1>
    <p class="text-lg">Conteúdo informativo e esclarecedor.</p>
  </div>

  <div class="max-w-6xl mx-auto py-10 px-4">
    <swiper :modules="[Pagination, Navigation]" :slides-per-view="1" :space-between="20" :breakpoints="{
      640: { slidesPerView: 1.5, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 25 },
      1024: { slidesPerView: 2.5, spaceBetween: 30 },
      1280: { slidesPerView: 3, spaceBetween: 30 }
    }" :pagination="{ clickable: true }" :navigation="true" class="pb-10">
      <swiper-slide v-for="(post, index) in posts" :key="index">
        <div
          class="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-300 w-full max-w-[340px] h-[450px] flex flex-col mx-auto">
          <img :src="post.imagem" :alt="post.titulo" class="h-40 w-full object-cover" />
          <div class="p-4 flex flex-col justify-between flex-grow">
            <h2 class="text-xl font-bold">{{ post.titulo }}</h2>
            <p class="text-gray-700 text-sm my-2">{{ post.descricao }}</p>
            <button
              class="bg-green-600 text-white px-6 py-2 text-sm rounded-full flex items-center justify-center shadow-md hover:bg-green-700 transition">
              <font-awesome-icon :icon="['fas', 'plus-circle']" class="mr-2" />
              Saiba mais!
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <div class="text-center">
    <button
      class="border border-white text-white px-6 py-2 rounded-full flex items-center mx-auto shadow-lg hover:bg-white hover:text-green-600 transition">
      <font-awesome-icon :icon="['fas', 'plus-circle']" class="mr-2" />
      Conferir mais conteúdos
    </button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: { Swiper, SwiperSlide, FontAwesomeIcon },
  setup() {
    const posts = [
      {
        imagem: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=600',
        titulo: 'O que é o Score?',
        descricao: 'O Score é uma nota de 0 a 1.000 para quem tem CPF e atividade econômica. Calculado por inteligência artificial com dados financeiros, indica a situação financeira atual, baseada em hábitos e decisões, sem ser uma avaliação pessoal.'
      },
      {
        imagem: 'https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        titulo: 'Como o Banco Central cria dinheiro?',
        descricao: 'O que a Selic tem a ver com isso? Descubra tudo sobre o sistema monetário.'
      },
      {
        imagem: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600',
        titulo: 'Vale a pena parcelar no cartão?',
        descricao: 'Descubra os prós e contras do parcelamento e se ele faz sentido para você.'
      }
    ];

    return { posts, Pagination, Navigation };
  }
};
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
  color: white;
  background: rgba(0, 0, 0, 0.3);
  padding: 12px;
  border-radius: 50%;
}
</style>