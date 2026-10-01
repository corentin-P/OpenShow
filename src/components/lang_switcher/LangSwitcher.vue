<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { locale, availableLocales } = useI18n()

  function changeLang(lang: string) {
      locale.value = lang
      localStorage.setItem('lang', lang)
  }
</script>

<template>
  <div class="lang-switcher">
    <button
      v-for="loc in availableLocales"
      :key="loc"
      :class="['lang-button', { active: locale === loc }]"
      @click="changeLang(loc)"
    >
      {{ loc.toUpperCase() }}
    </button>
  </div>
</template>

<style lang="css">
  .lang-switcher {
    position: fixed;
    bottom: 3vh;
    right: 5vw;
    display: flex;
    gap: 10px;
    z-index: 1000;
  }

  .lang-button {
    border: none;
    border-radius: 20px;
    padding: 6px 16px;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .lang-button.active {
    background-color: var(--green-color);
    color: var(--white-color);
  }

  .lang-button:hover {
    background-color: var(--green-color);
    color: var(--white-color);
  }


  @media only screen and (min-width: 1000px) {
    .lang-switcher {
      right: 1.5vw;
    }
  }
</style>