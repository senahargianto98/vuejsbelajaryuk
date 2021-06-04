<template>
<div class="container">
  <div class="row">
    <div class="col-sm-3">
    </div>
    
    <div class="col-lg-5">
        <v-form  @submit.prevent="submit">

          <h1>Register</h1>
          <div>
            <v-alert type="error" v-if="errors.username">
              {{ errors.username[0] }}
            </v-alert>
            <v-alert type="error" v-if="errors.email">
              {{ errors.email[0] }}
            </v-alert>
            <v-alert type="error" v-if="errors.password">
              {{ errors.password[0] }}
            </v-alert>
            <v-alert type="error" v-if="errors.password_confirm">
              {{ errors.password_confirm[0] }}
            </v-alert>
          </div>
    
          <v-text-field
            v-model="username"
            label="Username"
            required
            hint="Contoh username:sena_hargianto_febri"
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
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
      console.log('/');
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