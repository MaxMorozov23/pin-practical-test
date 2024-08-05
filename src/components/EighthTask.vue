<template>
    <div>
        <button @click="increment">Increment</button>
        <p class="count">{{ count }}</p>
    </div>
</template>

<script>
// The test is here src/components/__tests__/EighthTask.spec.js
export default {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    }
}
</script>

<style scoped>
.count {
    font-size: 1.2em;
    font-weight: bold;
}
</style>