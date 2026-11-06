<script setup lang="ts">
  import Button from '@/components/button/Button.vue'
  import type { MyRouterLinkModel } from '@/components/router_link/MyRouterLinkModel'

  defineProps<MyRouterLinkModel>()
</script>

<template>
  <RouterLink :to="content.to">
    <Button :content="{ type: 'button-arrow', text: content.text }"/>
  </RouterLink>
</template>
