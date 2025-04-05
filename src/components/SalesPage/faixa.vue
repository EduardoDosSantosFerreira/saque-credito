<template>
    <section class="info-section">
      <div class="container">
        <!-- Texto Principal -->
        <h2 class="title">
          Ajudamos pessoas como você a manter seus compromissos financeiros em dia!
        </h2>
  
        <div class="content">
          <!-- Seção de Imagens -->
          <div class="image-grid">
            <img class="image" src="@/assets/img/foto-saquecredito-1.png" alt="Imagem 1" />
          </div>
  
          <!-- Estatísticas -->
          <div class="stats">
            <div class="stat-box">
              <h3>Mais de 80.000</h3>
              <p>clientes atendidos e satisfeitos</p>
            </div>
            <div class="stat-box">
              <h3>Mais de 30.000.000</h3>
              <p>de débitos parcelados com a Saque</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
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
    font-size: 2.4rem; /* Aumentado */
    font-weight: 700; /* Mais impacto */
    margin-bottom: 40px;
    line-height: 1.4;
  }
  
  /* Layout principal */
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; /* Espaço um pouco maior entre elementos */
  }
  
  /* Imagens */
  .image-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 20px;
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
    padding: 25px; /* Maior padding */
    border-radius: 12px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  .stat-box h3 {
    font-size: 2rem; /* Aumentado */
    font-weight: 800;
    color: #000000;
    margin-bottom: 10px;
  }
  
  .stat-box p {
    font-size: 1.2rem; /* Aumentado */
    color: #333333;
    line-height: 1.5;
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
  