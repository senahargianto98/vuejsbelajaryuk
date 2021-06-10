<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-lg">
          <form enctype="multipart/form-data" @submit.prevent="submit">
            <h1 class="text-center" >Form Isi Siswa</h1>
            <v-text-field hidden v-model="username" readonly />
            <div class="mb-3">
              <v-text-field label="Nama" v-model="nama"/>
            </div>
            <div class="mb-3">
              <v-text-field label="Jenjang Sekolah" v-model="jenjang_sekolah"/>
            </div>
            <div class="mb-3">
              <v-text-field label="Phone" type="number" v-model="phone"/>
            </div>
            <div class="mb-3">
              <v-text-field label="Email" v-model="email"/>
            </div>
            <div class="mb-3">
              <v-text-field label="Materi" v-model="materi"/>
            </div>
            <div class="mb-3">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="jadwal_start"
                    label="Hari Les"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="jadwal_start"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </div>
            <div class="mb-3">
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time_start"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time_start"
                    label="Jam Mulai Les"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu2"
                  v-model="time_start"
                  format="24hr"
                  full-width
                  @click:minute="$refs.menu2.save(time_start)"
                ></v-time-picker>
              </v-menu>
            </div>
            <div class="mb-3">
              <v-menu
                ref="menu3"
                v-model="menu3"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time_end"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time_end"
                    label="Jam Selesai Les"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu3"
                  v-model="time_end"
                  format="24hr"
                  full-width
                  @click:minute="$refs.menu3.save(time_end)"
                ></v-time-picker>
              </v-menu>
            </div>
            <v-btn color="primary" type="submit">Save</v-btn>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StudentForm",
  data() {
    return {
      username: "",
      nama:"",
      jenjang_sekolah: "",
      phone: "",
      email: "",
      materi: "",
      time_start: "",
      time_end: "",
      jadwal_start: "",
      menu: false,
      menu2: false,
      menu3: false,
    };
  },
  async mounted() {
    if (this.$route.params.id) {
      const { data } = await axios.get(`user/${this.$route.params.id}`);
      this.username = data.username;
    }
  },
  methods: {
    save(jadwal_start) {
      this.$refs.menu.save(jadwal_start);
    },
    async submit() {
      const data = new FormData();
      data.append('username', this.username);
      data.append('nama', this.nama);
      data.append('jenjang_sekolah', this.jenjang_sekolah);
      data.append('phone', this.phone);
      data.append('email', this.email);
      data.append('materi', this.materi);
      data.append('time_start', this.time_start);
      data.append('time_end', this.time_end);
      data.append('jadwal_start', this.jadwal_start);
      if (this.$route.params.id) {
        await axios.post(`student/post`, data);
      } 
      await this.$router.push('/sukses');
    }
  }
};
</script>