<script setup lang="ts">
  defineProps(['content'])
</script>

<template>
  <div v-for="item in content" class="experience">
    <img class="symbol" :src="item.img" :alt="item.alt">
    <div>
      <h3>{{ item.name }}</h3>
      <div v-for="desc in item.description">
        <p v-if="typeof desc === 'string'">{{ desc }}</p>
        <a target="_blank" class="white" v-else :href="desc.link">{{ desc.text }}</a>
      </div>
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