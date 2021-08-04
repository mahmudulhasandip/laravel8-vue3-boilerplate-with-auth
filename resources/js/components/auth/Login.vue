<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login <span class="text-center float-right" v-if="loading">Loading...</span></div>

                <div class="card-body">
                    <form @submit.prevent="handleLogin">
                        <div class="form-group row mb-2">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" :class="{'is-invalid': error}" name="email" v-model="formData.email" required autocomplete="email" autofocus>

                                    <span v-if="error" class="invalid-feedback" role="alert">
                                        <strong>{{error.message}}</strong>
                                    </span>

                            </div>
                        </div>

                        <div class="form-group row mb-2">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" :class="{'is-invalid': error}" name="password" v-model="formData.password" required autocomplete="current-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <!-- <a class="btn btn-link" >
                                    Forgot Your Password?
                                </a> -->

                            </div>
                        </div>
                    </form>
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
            formData: {
                email: "",
                password: ""
            },
            loading: false,
            error: null,
        }
    },

    methods: {
        async handleLogin(){
            this.error = null;
            this.loading = true;

            try{

                await this.$store.dispatch('login', this.formData);
                await this.$router.push({name: 'home'})

            }catch(err){
                this.error = err

            } finally {
                this.loading = false
            }
        }
    }

}
</script>

<style>

</style>
