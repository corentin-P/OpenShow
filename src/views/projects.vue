<script setup lang="ts">
  import Sections from '@/components/sections/Sections.vue'
  import type { SectionModel } from '@/components/sections/SectionsModel';
</script>

<template>
  <body>
    <div class="main-page-content">
      <Sections :sections="$tm('projects.sections') as SectionModel" />
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/main.css';
</style>
