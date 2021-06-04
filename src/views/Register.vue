<template>
<div class="container">
  <div class="row">
    <div class="col-sm-3">
    </div>
    
    <div class="col-lg-5">
        <v-form  @submit.prevent="submit">

          <h1>Register</h1>

          <v-alert
            dense
            outlined
            type="error"
            v-if="errors.username"
          >
          <p>{{ errors.username }}</p>
          <p>{{ errors.email }}</p>
          <p>{{ errors.password }}</p>

          </v-alert>

          <v-text-field
            v-model="username"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="Password 4 Karakter"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
 
          <v-text-field
            v-model="password_confirm"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Password Confirm"
            hint="Password 4 Karakter dan harus sama"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>

          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        </v-form>
    </div>

    <div class="col-sm-3">
    </div>
  </div>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirm: '',
      errors: [],
      show1: false,
      show2: false,
      rules: {
        required: value => !!value || 'Masukkan Password.',
        min: v => v.length >= 4 || 'Min 4 characters',
      },
    }
  },

methods: {
    submit(){
     axios.post('register', {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
     }).then(response => {
      console.log('register');
     }).catch(error => {
     if (error.response.status == 422){
       this.errors = error.response.data.errors;
      }
    })
  }
}
}
</script>

<style scoped>
.col-lg-5{
  margin-top: 120px;
}
</style>