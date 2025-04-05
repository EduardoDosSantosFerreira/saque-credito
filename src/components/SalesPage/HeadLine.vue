<script>
export default {
  mounted() {
    ScrollReveal().reveal('.itema', {
      duration: 1000,
      distance: '100px',
      origin: 'left',
      reset: false // Garante que o item não desapareça após ser revelado
    }),
    ScrollReveal().reveal('.itemb', {
      duration: 1000,
      distance: '100px',
      delay: 300,
      origin: 'left',
      reset: false
    }),
    ScrollReveal().reveal('.itemc', {
      duration: 1000,
      distance: '100px',
      delay: 500,
      origin: 'left',
      reset: false
    }),
    ScrollReveal().reveal('.itemd', {
      duration: 1000,
      distance: '100px',
      delay: 600,
      origin: 'left',
      reset: false
    });
  },
};
</script>

<template>
    <div class="containerx">
        <h1 class="itema">Transforme Seu Atendimento <br> e <span>Aumente suas Vendas</span> <br></h1>
    
        <h4 class="itemb">Com o EnvoyBot você tem controle total no atendimento, gerencia toda sua equipe de vendas e automatiza dezenas de tarefas.</h4>

        <h5 class="itemc">&#127942; A N°1 em atendimento</h5>
        <h5 class="itemd" style="margin-top: -30px;">&#11088;&#11088;&#11088;&#11088;&#11088;</h5>
    </div> 
    
    </template>
    
    <style scoped>

    .containerx {
        display: flex;
        flex-direction: column;
        padding-top: 3vh;
    }
    
     h1 {
        font-size: 40px;
        line-height: 50px;
        color: #333;
        font-weight: 700;
        text-align: left;
        margin: 15px 0 30px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    h1 span {
        color: #496afa;
    }
    
    h4 {
        color: #333;
        line-height: 40px;
        font-size: 25px;
        font-weight: 400;
        text-align: left;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-top: -20px;
    }
    
    h4 span {
        color: #333;
        text-decoration: underline;
        font-weight: 500;
    }

    h5 {
        padding: 20px 0;
        color: #4e4e4e;
        font-weight: 500;
    }
    
    /* Add media queries for responsiveness */
    @media (max-width: 1000px) {

    h1 {
        font-size: 34px;
        line-height: 45px;
        text-align: center;
        margin: 15px 0 30px;
    }
    
    h4 {
        line-height: 35px;
        font-size: 25px;
        text-align: center;
        margin-top: -20px;
    }
}

@media (max-width: 768px) {

    .containerx {
        padding-top: 2vh;
    }

        h1 {
            line-height: 30px;
            font-size: 30px; /* Reduz o tamanho da fonte para melhor adaptação em telas menores */
        }

        h4 {
            font-size: 26px; /* Ajusta o tamanho para manter a proporcionalidade e legibilidade */
        }
    }

    @media (max-width: 480px) {
        h1 {
            margin-left: 15px;
            margin-right: 0px;
            line-height: 30px;
            font-size: 26px; /* Reduz ainda mais para telas muito pequenas */
        }

        h4 {
            margin-left: 15px;
            margin-right: 0px;
            font-size: 20px;
            line-height: 30px;
        }
    }

    @media (max-width: 360px) {
        h1 {
            font-size: 24px; /* Redução adicional para suportar telas muito estreitas */
        }

        h4 {
            font-size: 16px;
        }
    }
    </style>