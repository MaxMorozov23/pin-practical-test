<template>
  <div>
    <button @click="showModal = true" class="open-modal-btn">Open Modal</button>
    <Modal :visible="showModal" @update:visible="showModal = $event">
      <p>This is the modal content!</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/modals/Modal.vue';

const showModal = ref(false);
</script>

<style scoped>
.open-modal-btn {
  margin-bottom: 1em;
}
</style>