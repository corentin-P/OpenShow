<script setup lang="ts">
  import { watch, onMounted, onBeforeUnmount } from 'vue'
  import Tags from '@/components/Tags.vue'

  const props = defineProps<{
    modalContent: Record<string, any>
    isModalOpen: boolean
  }>()
  

  const emit = defineEmits<{
    (e: 'update:isModalOpen', value: boolean): void
  }>()

  const closeModal = () => {
    emit('update:isModalOpen', false)
  }

  const lockBodyScroll = () => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }

  const unlockBodyScroll = () => {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.isModalOpen) {
      closeModal()
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown)
    unlockBodyScroll()
  })

  watch(
    () => props.isModalOpen,
    (isOpen) => {
      if (isOpen) {
        lockBodyScroll()
      } else {
        unlockBodyScroll()
      }
    },
    { immediate: true }
  )
</script>

<template>
  <div v-if="isModalOpen" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <a :href="modalContent.img" target="_blank">
        <img :src="modalContent.img" :alt="modalContent.alt" class="main-img">
      </a>
      <hr>
      <h1>
        {{ modalContent.title }}
        <a :href="modalContent.main_link" target="_blank" class="main-link" v-if="modalContent.main_link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/>
          </svg>
        </a>
      </h1>
      <hr>
      <p v-for="line in modalContent.description">{{ line }}</p>
      <Tags :tags="modalContent.tags"/>
      <div class="icon-links">
        <a v-for="link in modalContent.links" :href="link.link" target="_blank">
          <img :src="link.icon" alt="link.alt" class="icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  @import '@/assets/styles/components/modal.css';
</style>