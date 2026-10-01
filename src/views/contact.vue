<script setup lang="ts">
  import Sections from '@/components/sections/Sections.vue'
  import type { SectionsModel } from '@/components/sections/SectionsModel';
</script>

<template>
  <body>
    <div class="main-page-content">
      <Sections :sections="$tm('contact.sections') as SectionsModel" />
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/main.css';
</style>
