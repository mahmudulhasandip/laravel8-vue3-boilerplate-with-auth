<template>
  <h1>This is Home Page</h1>
  <p>Name in store is: {{ name }}</p>
</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const name = computed(() => {
    return store.state.user.name
})

// export default {

// }
</script>

