<script setup lang="ts">
  import type { ButtonModel } from '@/components/button/ButtonModel'

  defineProps<ButtonModel>()
</script>

<template>
  <a :class="['button', type]" :href="href">
    {{ text }}
  </a>
</template>

<style lang="css">
  @import 'button.css';
</style>
