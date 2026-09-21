<script setup lang="ts">
  defineProps(['experience'])
</script>

<template>
  <h3 v-if="experience.date">{{ experience.date }} :</h3>
  <div class="experience">
    <img class="symbol" :src="`${ experience.img }`" :alt="`${ experience['img-description'] }`">
    <div>
      <h3 v-if="experience.title">{{ experience.title }}</h3>
      <p v-for="desc in experience.description">{{ desc }}</p>
    </div>
  </div>
</template>

<style>
  .experience {
    display: flex;
    flex-direction: row;
    margin-left: 2vw;
    margin-right: 2vw;
    align-items: center;
  }

  .symbol {
    width: 40px;
    height: 40px;
    border-radius: 200px;
    align-items: center;
    margin-right: 4vw;
  }

  @media only screen and (min-width: 600px) {
    .experience {
      margin-left: 1vw;
    }

    .symbol {
      width: 70px;
      height: 70px;
      margin-right: 1.5vw;
    }
  }
</style>