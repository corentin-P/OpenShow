<script setup lang="ts">
  import type { ProfileImageModel } from '@/components/profile_image/ProfileImageModel'

  const props = defineProps<ProfileImageModel>()
</script>

<template>
  <img class="profile-image" :src="content.src" :alt="content.alt" />
</template>

<style lang="css">
  @import '@/assets/styles/main.css';

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 200px;
  }

  @media only screen and (min-width: 600px) {
    .profile-image {
      width: 15vw;
      height: 15vw;
    }
  }
</style>
