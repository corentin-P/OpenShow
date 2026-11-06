<script setup lang="ts">
  import { ref, computed } from 'vue'
  import Modal from '@/components/modal/Modal.vue'
  import Tags from '@/components/tags/Tags.vue'
  import type { GallerySectionComponentModel, GalleryItemModel } from '@/components/section_gallery/GallerySectionModel'

  const props = defineProps<GallerySectionComponentModel>()

  const isModalOpen = ref<boolean>(false)
  const currentItemIndex = ref<string | null>(null)
  
  const currentItem = computed(() => {
    return currentItemIndex.value !== null ? props.content[currentItemIndex.value] : {}
  })

  const openModal = (index: string) => {
    currentItemIndex.value = index
    isModalOpen.value = true
  }
</script>

<template>
  <div class="cards">
    <div v-for="(item, index) in content" class="card" v-on:click="openModal(String(index))">
      <div class="card-content">
        <img :src="item.img" :alt="item.alt">
        <hr>
        <h2>{{ item.title }}</h2>
        <hr>
        <p>{{ item.sum_up }}</p>
        <Tags :content="item.tags"/>
      </div>
    </div>
  </div>

  <Modal :modalContent="currentItem as GalleryItemModel" v-model:isModalOpen="isModalOpen"/>

</template>

<style>
  @import 'gallery_section.css';
</style>