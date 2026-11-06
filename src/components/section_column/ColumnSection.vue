<script setup lang="ts">
  import Text from '@/components/text/Text.vue'
  import ProfileImage from '@/components/profile_image/ProfileImage.vue'
  import Button from '@/components/button/Button.vue'
  import MyRouterLink from '@/components/router_link/MyRouterLink.vue'
  import type { ColumnSectionComponentModel } from '@/components/section_column/ColumnSectionModel'

  const props = defineProps<ColumnSectionComponentModel>()

  const column_types = {
    "Text": Text,
    "ProfileImage": ProfileImage,
    "Button": Button,
    "RouterLink": MyRouterLink
  }
</script>

<template>
  <div class="column">
    <component v-for="column in content" 
      :is="column_types[column.type]"
      :content="column.content as any"
    />
  </div>
</template>

<style lang="css">
  @import '@/assets/styles/main.css';

  .column {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    align-items: center;
    margin-bottom: 3vh;
  }

  @media only screen and (min-width: 600px) {
    .column {
      display: flex;
      flex-direction: row;
      gap: 10vw;
      align-items: center;
      margin-bottom: 7vh;
    }
  }
</style>
