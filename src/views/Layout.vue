<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Layout",
  async mounted() {
    try {
      const {data} = await axios.get('user');
      await this.$store.dispatch('setUser', data);
    } catch (e) {
      await this.$router.push('/login');
    }
  }
}
</script>
