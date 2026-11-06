<script setup lang="ts">
    import NavBar from '@/components/navbar/NavBar.vue'
    import Contact from '@/components/contact/Contact.vue'
    import langOption from '@/components/lang_switcher/LangSwitcher.vue'
    import type { NavBarContentModel } from '@/components/navbar/NavBarModel'
</script>

<template>
  <main>
    <div class="main">
      <NavBar v-if="$route.path != '/'" :content="$tm('main.navbar') as NavBarContentModel" />
      <RouterView/>
    </div>
  </main>
  <footer>
    <Contact/>
    <langOption/>
  </footer>
</template>

<style lang="css">
  @import '@/assets/styles/main.css';
</style>