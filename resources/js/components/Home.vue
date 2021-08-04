<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <h1>Hello {{ auth_user.data.name}}</h1>
                <router-link to="" @click="getUser">Get User Details</router-link>

                <span v-if="loading">Loading...</span>
                <div class="card" v-if="get_user">
                    <div class="card-body">

                        <ul >
                            <li>{{get_user.name}}</li>
                            <li>{{get_user.email}}</li>
                            <li>{{$moment(get_user.created_at).format('DD MM YYYY hh:mm:ss')}}</li>
                            <li>{{get_user.updated_at}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            auth_user: this.$store.state.auth.user ?? null,
            get_user: this.$store.state.user.user ?? null,
            loading: false,
            error: null,
        }
    },

    methods: {
        async getUser() {
            this.loading = true
            this.error = null

            try {
                await this.$store.dispatch('getUser')
                this.get_user = this.$store.state.user.user
                this.loading = false
            } catch (error) {
                this.error = error
            }finally{
                this.error = false
            }

        }
    }

}
</script>

