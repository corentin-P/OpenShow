<script setup lang="ts">
  import Button from '@/components/button/Button.vue'
  import type { TextComponentModel } from '@/components/text/TextModel';
  const props = defineProps<TextComponentModel>()
</script>

<template>
  <div class="main-text text">
      <p v-for="text in content.text">{{ text }}</p>
      <Button v-for="link in content.links"
        :content="{
          'href': link.url,
          'type': 'button-arrow button-right',
          'text': link.text
        }"
      />
  </div>
</template>

<style lang="css">
  @import '@/assets/styles/main.css';

  .text {
    margin-top: 0;
    width: 100%;
  }
</style>
