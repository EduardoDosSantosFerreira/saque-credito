import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from 'path'; // Para resolver caminhos de forma segura

export default defineConfig({
  plugins: [
    vue(), // Plugin para Vue.js
    svgLoader(), // Plugin para carregar SVGs
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define o alias @ para o diretório src
    },
  },
  // Opcional: Configurações adicionais para otimização
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa bibliotecas grandes em chunks para otimizar o carregamento
          vendor: ['vue', 'vue-router'],
        },
      },
    },
  },
});