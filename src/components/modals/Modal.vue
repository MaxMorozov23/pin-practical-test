<template>
  <teleport to="body">
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="close-button" @click="close">Close</button>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
});

const emits = defineEmits(['update:visible']);

const close = () => {
  emits('update:visible', false);
};
</script>

<style scoped>
/* A little bit of styling to make it look good */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 500px;
  width: 90%;
  z-index: 1001;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #333;
}
</style>
