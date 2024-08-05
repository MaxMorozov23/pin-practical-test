<template>
  <h1>Practical Test</h1>
  <!-- Task 1 -->
  <h2>Task 1: Basic Component Creation</h2>
  <FirstTask :items="itemsForFirstTask" />

  <!-- Task 2 -->
  <h2>Task 2: Composition API</h2>
  <SecondTask />

  <!-- Task 3 -->
  <h2>Task 3: Form Handling</h2>
  <ThirdTask />

  <!-- Task 4 -->
  <h2>Task 4: Form Handling</h2>
  <FourthTask />

  <!-- Task 5 -->
  <h2>Task 5: Performance Optimization</h2>
  <FifthTask :items="items" />

  <!-- Task 6 -->
  <h2>Task 6: Custom Directives</h2>
  <SixthTask />

  <!-- Task 7 -->
  <h2>Task 7: Teleport</h2>
  <SeventhTask />

   <!-- Task 8 -->
  <h2>Task 8: Unit Testing</h2>
  <EighthTask />
</template>

<script setup>
import { ref } from 'vue'
import FirstTask from '@/components/FirstTask.vue'
import SecondTask from '@/components/SecondTask.vue'
import ThirdTask from '@/components/ThirdTask.vue'
import FourthTask from '@/components/FourthTask.vue'
import FifthTask from '@/components/FifthTask.vue'
import SixthTask from '@/components/SixthTask.vue'
import SeventhTask from '@/components/SeventhTask.vue'
import EighthTask from '@/components/EighthTask.vue'

// For Task 1
const itemsForFirstTask = ref(['Item 1', 'Item 2', 'Item 3'])
const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
])
</script>