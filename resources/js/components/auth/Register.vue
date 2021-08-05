<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <form @submit.prevent="handleRegister">
                        <div class="form-group row mb-2">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" :class="{ 'is-invalid': v$.formData.name.$errors.length }" name="name" v-model="formData.name" autocomplete="name" autofocus>

                                <span class="invalid-feedback" role="alert" v-for="err of v$.formData.name.$errors" :key="err.$uid">
                                    <strong>{{ err.$message }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="form-group row mb-2">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control " :class="{ 'is-invalid': v$.formData.email.$errors.length }" name="email" v-model="formData.email" autocomplete="email">

                                <span class="invalid-feedback" role="alert" v-for="err of v$.formData.email.$errors" :key="err.$uid">
                                    <strong>{{ err.$message }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="form-group row mb-2">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" :class="{ 'is-invalid': v$.formData.password.$errors.length }" name="password" v-model="formData.password" autocomplete="new-password">

                                <span class="invalid-feedback" role="alert" v-for="err of v$.formData.password.$errors" :key="err.$uid">
                                    <strong>{{ err.$message }}</strong>
                                </span>

                            </div>
                        </div>

                        <div class="form-group row mb-2">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" :class="{ 'is-invalid': v$.formData.password_confirmation.$errors.length }" name="password_confirmation" v-model="formData.password_confirmation"  autocomplete="new-password">
                                <span class="invalid-feedback" role="alert" v-for="err of v$.formData.password_confirmation.$errors" :key="err.$uid">
                                    <strong>{{ err.$message }}</strong>
                                </span>
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
import useVuelidate from '@vuelidate/core'
import { required, minLength, email, sameAs } from '@vuelidate/validators'

export default {

    data() {
        return {
            v$: useVuelidate(),
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

    validations: {
        formData: {
            name: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8)
            },
            password_confirmation: {
                required,
                minLength: minLength(8),
                sameAsPassword: sameAs(() => this.formData.password),
            },
        }
    },

    methods: {

        async handleRegister(){
            this.v$.$validate();
            this.error = null;
            this.loading = true;

            try{

                await this.$store.dispatch('register', this.formData);
                await this.$router.push({name: 'home'})

            }catch(e){
                this.error = e
            } finally {
                this.loading = false
            }

        }
    }

}
</script>

<style>

</style>
