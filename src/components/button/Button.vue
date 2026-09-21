<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <a :class="['button', type]" :href="href">
    {{ text }}
  </a>
</template>

<style lang="css">
  @import 'button.css';
</style>
