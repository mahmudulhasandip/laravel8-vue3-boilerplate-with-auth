<template>
  <h1>This is Home Page</h1>
  <p>Name in store is: {{ user }}</p>
</template>

<script>

export default {

    data() {
        return {
            user: ''
        }
    },

    mounted() {
        this.user = this.$store.state.auth.user
    }

}
</script>

