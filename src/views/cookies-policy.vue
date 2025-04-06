<template>
  <div v-if="!cookieConsentGiven" class="cookie-policy-banner">
    <p>
      Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa
      <a href="/politica-de-cookies" target="_blank" rel="noopener">Política de Cookies</a>.
    </p>
    <button @click="acceptCookies">Aceitar</button>
    <button @click="openCookieSettings">Gerenciar Cookies</button>
    <div v-if="showCookieSettings" class="cookie-settings">
      <h3>Gerenciar Preferências de Cookies</h3>
      <div class="cookie-category">
        <label>
          <input type="checkbox" v-model="necessaryCookies" disabled>
          Cookies Estritamente Necessários (Sempre Ativos)
        </label>
        <p>Essenciais para o funcionamento do site.</p>
      </div>
      <div class="cookie-category">
        <label>
          <input type="checkbox" v-model="analyticsCookies">
          Cookies de Desempenho e Analíticos
        </label>
        <p>Coletam informações sobre como você usa o site.</p>
      </div>
      <div class="cookie-category">
        <label>
          <input type="checkbox" v-model="marketingCookies">
          Cookies de Marketing e Publicidade
        </label>
        <p>Usados para mostrar anúncios relevantes para você.</p>
      </div>
      <button @click="saveCookiePreferences">Salvar Preferências</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookieConsentGiven: this.checkCookieConsent(),
      showCookieSettings: false,
      necessaryCookies: true, // Sempre ativos
      analyticsCookies: this.getCookiePreference('analytics') === 'true',
      marketingCookies: this.getCookiePreference('marketing') === 'true',
    };
  },
  mounted() {
    // Verificar novamente o consentimento ao montar o componente
    this.cookieConsentGiven = this.checkCookieConsent();
  },
  methods: {
    checkCookieConsent() {
      return document.cookie.includes('cookieConsent=true');
    },
    acceptCookies() {
      document.cookie = 'cookieConsent=true; max-age=31536000; path=/; secure; samesite=Lax'; // Validade de 1 ano (exemplo)
      this.cookieConsentGiven = true;
      this.setAnalyticsCookies();
      this.setMarketingCookies();
    },
    openCookieSettings() {
      this.showCookieSettings = true;
    },
    getCookiePreference(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name + '='.length, cookie.length);
        }
      }
      return null;
    },
    setCookiePreference(name, value) {
      document.cookie = `${name}=${value}; max-age=31536000; path=/; secure; samesite=Lax`;
    },
    saveCookiePreferences() {
      this.setCookiePreference('analytics', this.analyticsCookies);
      this.setCookiePreference('marketing', this.marketingCookies);
      this.cookieConsentGiven = true;
      this.showCookieSettings = false;
      this.setAnalyticsCookies();
      this.setMarketingCookies();
      document.cookie = 'cookieConsent=true; max-age=31536000; path=/; secure; samesite=Lax';
      alert('Preferências de cookies salvas!');
    },
    setAnalyticsCookies() {
      if (this.analyticsCookies) {
        // Injetar seu código de rastreamento de analytics (ex: Google Analytics)
        console.log('Cookies de analytics ativados');
        // Exemplo com gtag (Google Analytics):
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', {
            'analytics_storage': 'granted'
          });
        }
      } else {
        // Desativar rastreamento de analytics
        console.log('Cookies de analytics desativados');
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', {
            'analytics_storage': 'denied'
          });
        }
        // Pode ser necessário remover cookies específicos do analytics aqui
      }
    },
    setMarketingCookies() {
      if (this.marketingCookies) {
        // Injetar seus códigos de rastreamento de marketing (ex: Facebook Pixel)
        console.log('Cookies de marketing ativados');
        // Exemplo (adapte para sua implementação):
        // if (typeof fbq === 'function') {
        //   fbq('consent', 'grant');
        // }
      } else {
        // Desativar rastreamento de marketing
        console.log('Cookies de marketing desativados');
        // if (typeof fbq === 'function') {
        //   fbq('consent', 'revoke');
        // }
        // Pode ser necessário remover cookies específicos de marketing aqui
      }
    },
  },
};
</script>

<style scoped>
.cookie-policy-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 15px;
  text-align: center;
  z-index: 1000;
  border-top: 1px solid #ccc;
}

.cookie-policy-banner p {
  margin-bottom: 10px;
}

.cookie-policy-banner a {
  color: #007bff;
  text-decoration: none;
}

.cookie-policy-banner button {
  margin: 0 5px;
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.cookie-settings {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
}

.cookie-category {
  margin-bottom: 15px;
}

.cookie-category label {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.cookie-category input[type="checkbox"] {
  margin-right: 10px;
}
</style>