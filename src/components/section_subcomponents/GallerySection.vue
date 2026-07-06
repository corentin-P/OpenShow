<script setup lang="ts">
  import { ref, computed } from 'vue'
  import Modal from '@/components/Modal.vue'
  import Tags from '@/components/Tags.vue'

  const props = defineProps(['items'])

  const isModalOpen = ref<boolean>(false)
  const currentItemIndex = ref<string | null>(null)
  
  const currentItem = computed(() => {
    return currentItemIndex.value !== null ? props.items[currentItemIndex.value] : {}
  })

  const openModal = (index: string) => {
    currentItemIndex.value = index
    isModalOpen.value = true
  }
</script>

<template>
  <div class="cards">
    <div v-for="(item, index) in items" class="card" v-on:click="openModal(String(index))">
      <div class="card-content">
        <img :src="item.img" :alt="item.alt">
        <hr>
        <h2>{{ item.title }}</h2>
        <hr>
        <p>{{ item.sum_up }}</p>
        <Tags :tags="item.tags"/>
      </div>
    </div>
  </div>

  <Modal :modalContent="currentItem" v-model:isModalOpen="isModalOpen"/>

</template>

<style>
  @import '@/assets/styles/components/gallery_section.css';
</style>