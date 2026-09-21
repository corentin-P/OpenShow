<script setup lang="ts">
  defineProps(['tags'])
</script>

<template>
  <div class="tags">
    <span class="tag" v-for="tag in tags">
      <div v-if="tag.includes('::')">
        <span class="tag-left">{{ tag.split('::')[0] }}</span>
        <span class="tag-right">{{ tag.split('::')[1] }}</span>
      </div>
      <template v-else>
        {{ tag }}
      </template>
    </span>
  </div>
</template>

<style>
  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 8px;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    font-size: 0.8rem;
    border: solid;
    border-radius: 30px;
    border-color: var(--blue-color);
    padding-bottom: 4px;
    padding-top: 4px;
  }

  .tag-left {
    background-color: var(--blue-color);
    padding: 4px 10px;
  }

  .tag-right {
    background-color: var(--black-color40);
    padding: 4px 10px;
  }

  .tag:not(:has(.tag-left)) {
    background-color: var(--blue-color);
    padding: 4px 10px;
  }
</style>