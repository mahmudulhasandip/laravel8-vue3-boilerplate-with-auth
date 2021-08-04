<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login {{user}}</div>

                <div class="card-body">
                    <form @submit.prevent="handleLogin">
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control is-invalid @enderror" name="email" v-model="formData.email" required autocomplete="email" autofocus>


                                    <span class="invalid-feedback" role="alert">
                                        <strong>message</strong>
                                    </span>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control is-invalid @enderror" name="password" v-model="formData.password" required autocomplete="current-password">


                                    <span class="invalid-feedback" role="alert">
                                        <strong>message</strong>
                                    </span>

                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" >

                                    <label class="form-check-label" for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>


                                    <a class="btn btn-link" >
                                        Forgot Your Password?
                                    </a>

                            </div>
                        </div>
                    </form>
                    <div v-if="error">{{error}}</div>
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
            user: null,
        }
    },

    mounted() {
        this.user = this.$store.state.auth.user
    },

    methods: {
        async handleLogin(){
            this.error = null;
            try{

                await this.$store.dispatch('login', this.formData);
                await this.$router.push({name: 'home'})

            }catch(err){
                this.error = err

            } finally {
                this.loading = false
            }
            // axios.get('/sanctum/csrf-cookie').then(response => {
            //     axios.post('/api/login', this.formData).then(response => {
            //         console.log(response)
            //     })
            // });
        }
    }

}
</script>

<style>

</style>
