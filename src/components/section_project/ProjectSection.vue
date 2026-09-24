<script setup lang="ts">
  defineProps(['projects'])
</script>

<template>
  <div v-for="project in projects" class="project">
    <h2 class="center">{{ project.title }}</h2>
    <p v-for="desc in project.description">{{ desc }}</p>

    <div class="links">
      <a v-if="project.links" v-for="link in project.links" :href="link.link" target="_blank">
        {{ link.text }}
      </a>
    </div>

    <div v-if="project.imgs" class="project-images">
      <a v-for="img in project.imgs" :href="img.link" target="_blank">
        <img class="project-image" :src="img.file" :alt="img.alt">
      </a>
    </div>
  </div>
</template>

<style>
  @import '@/assets/styles/main.css';

  .project-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5vw;
    justify-content: center;
    text-align: center;
  }

  .project-image {
    height: auto;
    width: 90%;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2vw;
    justify-content: center;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  .links a {
    color: var(--white-color);
    transition: all 0.3s ease;
  }

  .links a:hover {
    color: var(--green-color);
  }

  .project {
    margin-bottom: 8vh;
  }

  @media only screen and (min-width: 600px) {
    .project-image {
      height: 250px;
      width: auto;
    }
  }
</style>