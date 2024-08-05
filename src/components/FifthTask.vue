<!-- Orignal code -->

<!-- <template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['items']
}
</script> -->

<template>
    <div>
        <!-- Use v-memo to memoize the rendering of the list based on the items array Vue 3.2+ -->
        <ul>
            <li v-memo="[items]" v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    // Destructuring props in the component options provides better performance and readability. It also allows setting type validation and making the prop required.
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>
