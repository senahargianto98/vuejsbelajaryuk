<template>
  <form enctype="multipart/form-data" @submit.prevent="submit">
    <div class="mb-3">
      <h6>foto profile</h6>
      <input type="file" @change="selectFile" />
    </div>

    <div class="mb-3">
      <v-text-field label="nama" v-model="nama" />
    </div>

    <div class="mb-3">
      <input hidden v-model="user_id" class="form-control" />
    </div>

    <div class="mb-3">
      <v-text-field label="sekolah" v-model="sekolah" />
    </div>

    <div class="mb-3">
      <v-text-field label="jurusan" v-model="jurusan" />
    </div>

    <div class="mb-3">
      <v-text-field label="mengajar" v-model="mengajar" />
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
            label="Jadwal Mulai"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="jadwal_start"
          :max="new Date().toISOString().substr(0, 10)"
          @change="save"
        ></v-date-picker>
      </v-menu>
    </div>

    <div class="mb-3">
      <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="jadwal_end"
            label="Jadwal Selesai"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="jadwal_end"
          :max="new Date().toISOString().substr(0, 10)"
          @change="save1"
        ></v-date-picker>
      </v-menu>
    </div>

    <div class="mb-3">
      <v-textarea label="motivasi mengajar" v-model="motivasi" />
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
      nama: "",
      sekolah: "",
      mengajar: "",
      motivasi: "",
      jadwal_start: "",
      jadwal_end: "",
      jurusan: "",
      foto_profile: "",
      menu: false,
      menu1: false,
    };
  },
  computed: {
    user_id: {
      get() {
        return this.$store.state.user.id;
      },
    },
  },
  methods: {
    selectFile(event) {
      this.foto_profile = event.target.files[0];
    },
    save(jadwal_start) {
      this.$refs.menu.save(jadwal_start);
    },
    save1(jadwal_end) {
      this.$refs.menu1.save(jadwal_end);
    },
    async submit() {
      const data = new FormData();
      data.append("user_id", this.user_id);
      data.append("nama", this.nama);
      data.append("sekolah", this.sekolah);
      data.append("jurusan", this.jurusan);
      data.append("mengajar", this.mengajar);
      data.append("motivasi", this.motivasi);
      data.append("jadwal_start", this.jadwal_start);
      data.append("jadwal_end", this.jadwal_end);
      data.append("foto_profile", this.foto_profile);
      await axios.post("profile/post", data);
      window.location.href = "/profile";
    },
  },
};
</script>