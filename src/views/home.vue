<script setup lang="ts">
  import MyRouterLink from '@/components/router_link/MyRouterLink.vue'
</script>

<template>
  <body>
    <div class="welcome">
      <h1 class="title">{{ $t("welcome.title") }}</h1>
      <p class="subtitle">{{ $t("welcome.subtitle") }}</p>
      <div class="discover">
        <MyRouterLink class="router-link" to="/about" :text="String($t('welcome.about'))"/>
        <MyRouterLink class="router-link" to="/projects" :text="String($t('welcome.projects'))"/>
      </div>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/views/home.css';
</style>
