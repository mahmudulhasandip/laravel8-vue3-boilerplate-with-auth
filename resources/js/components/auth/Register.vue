<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <form @submit.prevent="handleRegister">
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control is-invalid" name="name" v-model="formData.name" required autocomplete="name" autofocus>

                                    <span class="invalid-feedback" role="alert">
                                        <strong>message</strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control is-invalid" name="email" v-model="formData.email" required autocomplete="email">

                                    <span class="invalid-feedback" role="alert">
                                        <strong>message</strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control is-invalid" name="password" v-model="formData.password" required autocomplete="new-password">

                                    <span class="invalid-feedback" role="alert">
                                        <strong>message</strong>
                                    </span>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" v-model="formData.password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mt-2 mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Register
                                </button>
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
                'name': '',
                'email': '',
                'password': '',
                'password_confirmation': ''
            },
            loading: false,
            error: null,
        }
    },

    methods: {
        async handleRegister(){
            this.error = null;
            this.loading = true;

            try{

                await this.$store.dispatch('register', this.formData);
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
