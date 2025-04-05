<template>

    <div class="buttons">
    <a href="/planos" class="button-link">Experimente Agora</a>
</div>

</template>

<style scoped>

 .buttons {
    display: flex;
    margin-top: 5px;
  }

  .buttons .button-link {
    display: inline-block;
    background-color: #3f60f4;
    padding: 7px 30px;
    color: #fff;
    font-weight: 500;
    font-size: 1.4rem;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.3s ease-in-out;
    box-sizing: border-box;
}

.buttons .button-link:hover {
    background-color: #4666f4;
    transform: scale(1.05);
}

  button a {
    color: white;
    text-decoration: none;
  }

  /* Add media queries for responsiveness */

  @media (max-width: 1000px) {
    .buttons button {
        font-size: 18rem;
        padding: 6px 30px;
    }
}

@media (max-width: 768px) {

    .buttons .button-link {
    padding: 8px 40px;
    font-size: 1.6rem;
    margin-top: -2vh;
}
}

@media (max-width: 480px) {

    .buttons .button-link {
    padding: 8px 40px;
    font-size: 1.4rem;
    margin-top: -2vh;
}
}
</style>