<template>
    <div>
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
// message is a static string that doesn't change, so using ref is unnecessary.
const message = 'Hello, Vue 3!'
</script>