<template>
  <div class="not-found">
    <h1>{{ $t('not-found.title') }}</h1>
    <router-link class="button button-arrow" to="/"> {{ $t('not-found.home') }} </router-link>
  </div>
</template>

<style lang="css">
    @import '@/assets/styles/components/buttons.css';
    .not-found {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60vh;
        text-align: center;
    }
</style>