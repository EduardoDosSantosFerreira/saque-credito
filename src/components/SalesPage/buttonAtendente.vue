<template>
  <div class="container">
    <button>
      <a href="https://api.whatsapp.com/send?phone=5513991821461&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20plataforma%20do%20Rob%C3%B4%20Gestor.">
        Agendar demonstração
      </a>
    </button>
  </div>
</template>

<style scoped>
.container {
  padding: 10px;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  background-color: #82dd58;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  font-weight: 600;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #6fcf4d;
}

a {
  text-decoration: none;
  color: white;
}

@media (max-width: 480px) {
  button {
    font-size: 22px;
    margin-bottom: 10px;
    margin-top: -20px;
  }
}
</style>