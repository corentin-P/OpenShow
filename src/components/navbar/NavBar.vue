<script setup lang="ts">
  import { ref } from 'vue'
  import type { NavBarComponentModel } from '@/components/navbar/NavBarModel'

  defineProps<NavBarComponentModel>()
  const show = ref(false)
</script>

<template>
  <div class="navbar">
    <div class="home">
      <RouterLink :to="content.title.url">{{ content.title.text }}</RouterLink>
    </div>
    <nav>
      <ul class="desktop-pages">
        <li v-for="link in content.links">
          <RouterLink class="pages" :to="link.url">{{ link.text }}</RouterLink>
        </li>
      </ul>
    </nav>
    <button class="menu_button" @click="show = !show">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
  <Transition>
    <nav v-show="show" class="mobile-pages-menu">
      <ul>
        <li v-for="link in content.links" class="mobile-pages">
          <RouterLink class="pages" :to="link.url">{{ link.text }}</RouterLink>
        </li>
      </ul>
    </nav>
  </Transition>
</template>


<style lang="css">
  @import 'navbar.css';
</style>
