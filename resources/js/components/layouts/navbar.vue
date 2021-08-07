<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm mb-3">
            <div class="container">
                <router-link class="navbar-brand" :to="{name: 'home'}">
                    Laravel
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        <li class="nav-item">
                        <router-link class="nav-link" v-if="!authenticated" :to="{ name: 'login' }">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" v-if="!authenticated" :to="{ name: 'register' }">Register</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" v-if="authenticated" :to="{}" @click="handleLogout">Logout</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

    data() {
        return {
            loading: false,
            error: null,
        }
    },

    computed: {
        ...mapGetters({
            authenticated: 'authenticated'
        })
    },

    methods: {
        async handleLogout(){
            this.error = null;
            this.loading = true;

            try {
                await this.$store.reset()
                await this.$store.dispatch('logout');
                await this.$router.push({name: 'login'})
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false
            }
        }
    }

}
</script>

<style>

</style>
