<template>
    <div>
        <ul v-if="items.length">
        <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
        <p v-else>No items available.</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>
