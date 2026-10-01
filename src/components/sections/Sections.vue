<script setup lang="ts">
  import ExperienceSection from '@/components/section_experience/ExperienceSection.vue'
  import LogosDescriptionsSection from '@/components/section_logo_description/LogosDescriptionSection.vue'
  import ProjectSection from '@/components/section_project/ProjectSection.vue'
  import GallerySection from '@/components/section_gallery/GallerySection.vue';
  import LogoListSection from '@/components/section_logo_list/LogoListSection.vue';
  import ColumnSection from '@/components/section_column/ColumnSection.vue';
  import { is_text_section } from '../utils';
  import type { SectionsComponentModel } from '@/components/sections/SectionsModel';
  
  defineProps<SectionsComponentModel>()
</script>

<template>
  <div v-for="(section, name) in sections" :id="name.toString()">
    <h1 v-if="!section.titleInBox" class="center green">{{ section.title }}</h1>
    <div class="main-text" v-if="is_text_section(section.type)">
      <h1 v-if="section.titleInBox" class="center">{{ section.title }}</h1>
      <p v-if="section.sumup" v-for="text in section.sumup" class="center">{{ text }}</p>
      
      <div v-if="section.type == 'experience'">
        <experience-section :content="section.content"/>
      </div>
      <div v-if="section.type == 'logos-list'" class="logos-list center">
        <logo-list-section :content="section.content"/>
      </div>
      <div v-if="section.type == 'logos-description'" class="logos-list">
        <logos-descriptions-section :content="section.content"/>
      </div>
      <div v-if="section.type == 'projects'">
        <project-section :content="section.content"/>
      </div>
    </div>
    
    <div v-if="section.type == 'column'">
      <column-section :content="section.content"/>
    </div>

    <div v-if="section.type == 'gallery'">
      <h1 v-if="section.titleInBox" class="center">{{ section.title }}</h1>
      <gallery-section :content="section.content"/>
    </div>
  </div>
</template>

<style>
  @import 'sections.css';
</style>