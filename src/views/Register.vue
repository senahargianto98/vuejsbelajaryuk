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
            v-if="errors.length"
          >
          <p v-for="error in errors">{{ error }}</p>
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
            label="Password"
            required
          ></v-text-field>

          <v-text-field
            v-model="password_confirm"
            label="Password Confirm"
            required
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
    }
  },
  methods: {
    async submit() {

      try {
        await axios.post('register', {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
        });
        await this.$router.push('/');
      } 
      
      catch (e) {
        if (!this.errors.length) {
          this.errors.push('Perhatikan Email dan Username tidak di gunakan sebelumnya, dan Password yang di ketikkan sama');
        }
      }
      
    }
  }
}
</script>

<style scoped>
.col-lg-5{
  margin-top: 120px;
}
</style>