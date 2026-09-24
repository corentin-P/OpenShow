<script setup lang="ts">
  import MyRouterLink from '@/components/router_link/MyRouterLink.vue'
</script>

<template>
  <div class="contact">
    <MyRouterLink to="/contact" :text="String($tm('contact.button'))"/>
  </div>
</template>

<style lang="css">
  .contact {
    position: fixed;
    bottom: 3vh;
    left: 5vw;
    display: flex;
    gap: 10px;
    z-index: 1000;
  }
  
  @media only screen and (min-width: 1000px) {
    .contact {
      left: 1.5vw;
    }
  }
</style>