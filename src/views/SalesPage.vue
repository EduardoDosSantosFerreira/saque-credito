<template>
  <TheHeader />
  <HeroSection />
  <Faixa />
  <Services />
  <Steps />
  <requerimentos />
  <servidor />
  <Flutuantes />
  <Faq />
  <Footer />
</template>

<script>
import TheHeader from "../components/Global/TheHeader.vue";
import HeroSection from "../components/SalesPage/HeroSection.vue";
import Faixa from "../components/SalesPage/faixa.vue";
import Services from "../components/SalesPage/services.vue";
import Steps from "../components/SalesPage/Steps.vue";
import requerimentos from "../components/SalesPage/requerimentos.vue";
import servidor from "../components/SalesPage/servidor.vue";
import Flutuantes from "../components/SalesPage/Flutuantes.vue";
import Faq from "../components/SalesPage/faq.vue";
import Footer from "../components/Global/footers.vue";


export default {
  components: {
    TheHeader,
    HeroSection,
    Faixa,
    Services,
    Steps,
    requerimentos,
    servidor,
    Flutuantes,
    Faq,
    Footer,
  },
}
</script>

<style scoped>

  main {
    overflow: hidden;
  }

  hr {
    border: 0;
  height: 2px;
  background-image: linear-gradient(to right, transparent, #8a8a8a, transparent);  
}

  .container {
    display: flex;
    flex-direction: row;
    padding: 7vh 5vw 3vh 5vw;
    margin-bottom: 5vh;
  }

  #fox {
    display: flex;
    flex-direction: column;
    padding-right: 2vw;
  }

  .pc-button {
    display: flex;
    animation: pc-button 2s ease 0s 1 normal forwards;
  }

  @keyframes pc-button {
	0% {
		opacity: 0;
		transform: translateX(-50px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

  .pc-button-mb {
    display: none;
  }

  @media (max-width: 1000px) {

  .container {
    display: flex;
    flex-direction: column;
  }

  #fox {
    display: flex;
    flex-direction: column;
  }

  .videosale {
    margin-top: 30px;
  }
}

@media (max-width: 765px) {

  .container {
    display: flex;
    flex-direction: column;
    padding: 3vh 5vw;
    margin-bottom: 0vh;
  }

  #fox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .videosale {
    margin-top: 30px;
  }

.pc-button {
    display: none;
  }

  .pc-button-mb {
    display: flex;
    justify-content: center;
  }
}
</style>