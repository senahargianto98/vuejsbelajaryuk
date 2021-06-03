<template>
  <form enctype="multipart/form-data" @submit.prevent="submit" >
    <div class="mb-3">
      <v-text-field label="nama" v-model="nama"/>
    </div>
    <div class="mb-3">
      <v-text-field label="user_id" v-model="user_id"/>
    </div>
    <div class="mb-3">
      <v-textarea label="sekolah" v-model="sekolah"/>
    </div>
    <v-btn color="primary" type="submit">Save</v-btn>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "ProfileForm",
  data() {
    return {
      nama:'',
      sekolah:'',
      user_id: '',
    }
  },
  methods: {
    async submit() {
      const data = new FormData();
      data.append('user_id', this.user_id);
      data.append('nama', this.nama);
      data.append('sekolah', this.sekolah);
      await axios.post('profile/post', data);
      window.location.href = '/profile';
    }
  }
}
</script>