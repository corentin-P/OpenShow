<script setup lang="ts">
  import type { ExperienceSectionModel } from '@/components/section_experience/ExperienceSectionModel'

  defineProps<ExperienceSectionModel>()
</script>

<template>
  <h3 v-if="content.date">{{ content.date }} :</h3>
  <div class="experience">
    <img class="symbol" :src="`${ content.img }`" :alt="`${ content['img-description'] }`">
    <div>
      <h3 v-if="content.title">{{ content.title }}</h3>
      <p v-for="desc in content.description">{{ desc }}</p>
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