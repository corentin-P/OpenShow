<script setup lang="ts">
  import Sections from '@/components/sections/Sections.vue'
</script>

<template>
  <body>
    <div class="content">
      <Sections :sections="$tm('projects.sections')"/>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/views/projects.css';
</style>
