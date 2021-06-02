<template>
<div class="container">
  <div class="row">
    <div class="col-sm-3">
    </div>
    
    <div class="col-lg-5">
        <v-form  @submit.prevent="submit">

          <h1>Login</h1>

          <v-alert
            dense
            outlined
            type="error"
            v-if="errors.length"
          >
          <p v-for="error in errors">{{ error }}</p>
          </v-alert>

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
            hint="At least 4 characters"
            counter
            @click:append="show1 = !show1"
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
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      errors: [],
      show1: false,
      rules: {
        required: value => !!value || 'Masukkan Password.',
        min: v => v.length >= 4 || 'Min 4 characters',
      },
    }
  },
  methods: {
    async submit() {

      try {
        await axios.post('login', {
          email: this.email,
          password: this.password
        });
        await this.$router.push('/profile');
      
      } 
      
      catch (e) {
        if (!this.errors.length) {
          this.errors.push('Kata Sandi atau Email salah');
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
