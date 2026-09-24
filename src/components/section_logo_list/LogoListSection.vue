<script setup lang="ts">
  defineProps(['content'])
</script>

<template>
  <img v-for="logo in content.logos" class="logo" :src="logo.img" :alt="logo.alt">
</template>

<style lang="css">
  .logo {
    width: auto;
    height: 45px;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-bottom: 2vh;
  }

  @media only screen and (min-width: 600px) {
    .logo {
      width: auto;
      height: 80px;
      margin-left: 2vw;
      margin-right: 2vw;
      margin-bottom: 2vh;
    }   
  }
</style>