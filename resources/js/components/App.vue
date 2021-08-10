<template>
    <Navbar />

    <div>
        <div class="bg max-w-6xl mx-auto sm:px-6 lg:px-8">
            <router-view />
            <!-- set progressbar -->
            <vue-progress-bar></vue-progress-bar>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Login from "./auth/Login.vue"
import Navbar from "./layouts/navbar.vue"
export default {
    components: {
        Login,
        Navbar
    },
    mounted() {
      //  [App.vue specific] When App.vue is finish loading finish the progress bar
      this.$Progress.finish();
      this.axiosProgress();
    },
    created() {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start();
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress;
          // parse meta tags
          this.$Progress.parseMeta(meta);
        }
        //  start the progress bar
        this.$Progress.start();
        //  continue to next page
        next();
      });
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        //  finish the progress bar
        this.$Progress.finish();
      });
    },
    methods: {
        axiosProgress(){
            axios.interceptors.request.use((config) => {
                this.$Progress.start(); // for every request start the progress
                return config;
            });

            axios.interceptors.response.use((response) => {
                this.$Progress.finish(); // finish when a response is received
                return response;
            });
        }
    }

}
</script>

<style scope>

</style>
