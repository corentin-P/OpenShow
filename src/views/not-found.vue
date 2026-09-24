<script setup lang="ts">
    import MyRouterLink from '@/components/router_link/MyRouterLink.vue'
</script>

<template>
  <div class="not-found">
    <h1>{{ $t('not-found.title') }}</h1>
    <MyRouterLink to="/" :text="$t('not-found.home')" type="button-arrow"/>
  </div>
</template>

<style lang="css">
  a {
    text-decoration: none;
  }

  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    text-align: center;
  }
</style>