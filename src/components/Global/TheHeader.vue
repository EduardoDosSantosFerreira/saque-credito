<template>
  <header class="header">
    <!-- Logo -->
    <div class="logo">
      <a href="/">
        <img src="../../assets/img/logo-saquecredito-sf.png" alt="Logo" />
      </a>
    </div>

    <!-- Navegação Desktop -->
    <nav class="nav-desktop">
      <a href="#" class="nav-link">Sobre nós</a>
      <a href="#" class="nav-link">Como funciona?</a>
      <a href="#" class="nav-link">Dúvidas</a>
      <a href="#" class="nav-link">Seja Parceiro</a>
      <a href="#" class="nav-link">Blog</a>
    </nav>

    <!-- Botão Destacado Desktop -->
    <a href="#" class="cta-button desktop-only">Solicite seu Crédito</a>

    <!-- Ícone do menu hambúrguer -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Menu mobile -->
    <div class="mobile-menu" :class="{ open: isMenuOpen }">
      <a href="#" class="mobile-link">Sobre nós</a>
      <a href="#" class="mobile-link">Como funciona?</a>
      <a href="#" class="mobile-link">Dúvidas</a>
      <a href="#" class="mobile-link">Seja Parceiro</a>
      <a href="#" class="mobile-link">Blog</a>
      <a href="#" class="cta-button mobile-button">Solicite seu Crédito</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Header principal */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20vw;
  background-color: #ffffff;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  height: 100px;
  position: relative;
  z-index: 10;
}

/* Logo */
.logo img {
  height: 60px;
}

/* Navegação desktop */
.nav-desktop {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex: 1;
}

.nav-link {
  text-decoration: none;
  color: #2ebc73;
  font-size: 17px;
  font-weight: 500;
  padding: 8px 12px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #188f53;
}

/* Botão principal */
.cta-button {
  background-color: #2ebc73;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
}

.cta-button:hover {
  background-color: #188f53;
}

/* Botão visível só no desktop */
.desktop-only {
  display: block;
}

/* Ícone hambúrguer */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  z-index: 20;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #2ebc73;
  border-radius: 2px;
  transition: 0.3s;
}

/* Menu mobile */
.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px 6vw;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-200%);
  opacity: 0;
  transition: 0.3s ease-in-out;
  z-index: 5;
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
}

.mobile-link {
  text-decoration: none;
  color: #2ebc73;
  font-size: 18px;
  font-weight: 500;
}

.mobile-button {
  align-self: flex-start;
}

/* Responsivo */
@media (max-width: 768px) {
  .nav-desktop,
  .desktop-only {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
