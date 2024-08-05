<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="data.length">
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const data = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = await response.json();
    data.value = result;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>