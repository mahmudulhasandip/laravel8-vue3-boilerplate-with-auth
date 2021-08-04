<template>
    <Navbar />

    <div>
        <div class="bg max-w-6xl mx-auto sm:px-6 lg:px-8">
            <router-view />
            <!-- <Login /> -->
        </div>
    </div>
</template>

<script>
import Login from "./auth/Login.vue"
import Navbar from "./layouts/navbar.vue"
export default {
    components: {
        Login,
        Navbar
    },
    data(){
        return {

        }
    },

    created() {

    },

    methods: {

    }

}
</script>

<style scope>

</style>
