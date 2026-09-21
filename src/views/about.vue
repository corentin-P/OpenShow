<script setup lang="ts">
  import Sections from '@/components/sections/Sections.vue'
  import Button from '@/components/button/Button.vue'
  import MyRouterLink from '@/components/router_link/MyRouterLink.vue'
</script>

<template>
  <body>
    <div class="content">
      <div class="sum-up">
        <img :src="$t('about.sumup.profile_image')" :alt="$t('about.sumup.profile_image_desc')">
        <div class="text">
          <p v-for="text in $tm('about.sumup.text')">{{ text }}</p>
          <Button :href="`${ $t('about.sumup.get-resume.url') }`" type="button-arrow button-right" :text="$t('about.sumup.get-resume.text')"/>
        </div>
      </div>
      <Sections :sections="$tm('about.resume.sections')"/>
      <div class="center space">
        <MyRouterLink :to="`${ $t('about.resume.projects.url') }`" :text="$t('about.resume.projects.text')"/>
      </div>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/views/about.css';
</style>
