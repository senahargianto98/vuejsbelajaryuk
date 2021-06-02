<template>
  <div>
    <Navbar />
    <ul v-if="user.profile.length">
      <li v-for="todo in user.profile">
        {{ todo }}
      </li>
    </ul>
    <p v-else>No todos left!</p>
  </div>  
</template>

<script>
import axios from "axios";
import Navbar from '../components/Navbar.vue'

export default {
  methods: {
    async logout() {
      await axios.post('logout');

      await this.$router.push('/');
    }
  },
  components: {
    Navbar,
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>