<template>
  <div>

        <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                <a href="{{ url('/home') }}" class="text-sm text-gray-700 underline">Home</a>
                <a href="{{ route('login') }}" class="text-sm text-gray-700 underline">Log in</a>


                <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 underline">Register</a>

        </div>

        <div class="bg max-w-6xl mx-auto sm:px-6 lg:px-8">
            <Login />

        </div>

  </div>
</template>

<script>
import axios from "axios";
import Login from "./auth/Login.vue"
export default {
    components: {
        Login
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
