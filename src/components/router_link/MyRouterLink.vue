<script setup lang="ts">
  import Button from '@/components/button/Button.vue'
  defineProps({
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <RouterLink :to="to">
    <Button type="button-arrow" :text="text"/>
  </RouterLink>
</template>
