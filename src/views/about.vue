<script setup lang="ts">
  import Sections from '@/components/sections/Sections.vue'
  import MyRouterLink from '@/components/router_link/MyRouterLink.vue'
  import type { SectionModel } from '@/components/sections/SectionsModel';
</script>

<template>
  <body>
    <div class="main-page-content">
      <Sections :sections="$tm('about.resume.sections') as SectionModel" />
      <div class="center space">
        <MyRouterLink :content="{ to: `${ $t('about.resume.projects.url') }`, text: $t('about.resume.projects.text') }"/>
      </div>
    </div>
  </body>
</template>
