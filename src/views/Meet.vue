<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-lg-6">
        <v-card v-for="users in profile" :key="users.id">
          <v-card-title class="mt-8">
            <div>
              <v-avatar size="86">
                <img
                  alt="user"
                  :src="'http://localhost:8000' + users.foto_profile"
                />
              </v-avatar>
            </div>

            <p class="ml-8">
              {{ users.nama }}
            </p>
          </v-card-title>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">Data Diri</div>
            <v-timeline align-top dense>
              <v-timeline-item color="purple" large icon="mdi-card-text-outline">
                <div>
                  <div class="font-weight-normal">
                    <strong>Pengalaman</strong>
                  </div>
                  <div>{{ users.pengalaman }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
        <br>
        <h5>Tertarik?</h5>
        <form @submit.prevent="redirect" method="get" action="#">
          <div class="mb-3">
            <v-text-field label="Masukkan Nama Anda" v-model="nama" />
          </div>
          <div class="mb-3">
            <v-textarea label="Alasan Mengikuti Kursus ini" v-model="pesan" />
          </div>
          <button class="btn btn-md btn-success" type="submit">Ikut Les!</button>
        </form>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Meet",
  data() {
    return {
      id: "",
      profile: [],
      wa:"+6285774625939",
      nama:"",
      pesan:"",
    };
  },
  async mounted() {
    if (this.$route.params.id) {
      const { data } = await axios.get(`meet/${this.$route.params.id}`);
      this.id = data.id;
      this.profile = data.profile;
    }
  },
  methods: {
    redirect() {
      document.location.href =
      "https://wa.me/" + this.wa + "?text=" + 'Nama:' + this.nama + '%0A' + 'Pesan:' + this.pesan;
    },
  },
};
</script>