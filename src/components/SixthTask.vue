<template>
  <div class="custom-directive">
    <!-- Register v-toggle-bg custom directive globally in main.js -->
    <!-- The custom directive is here src/directives/v-toggle-bg.js -->
    <div v-toggle-bg>
      Click me to change my background color!
    </div>
  </div>
</template>

<style scoped>
.custom-directive {
  margin-bottom: 1em;
}
</style>