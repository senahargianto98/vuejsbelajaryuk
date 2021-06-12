<template>
  <form enctype="multipart/form-data" @submit.prevent="submit">
     
    <div>
      <v-alert type="error" v-if="errors.nama">
        {{ errors.nama[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.foto_profile">
        {{ errors.foto_profile[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.phone">
        {{ errors.phone[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.sekolah">
        {{ errors.sekolah[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.jurusan">
        {{ errors.jurusan[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.mengajar">
        {{ errors.mengajar[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.time_start">
        {{ errors.time_start[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.end">
        {{ errors.time_end[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.jadwal_start">
        {{ errors.jadwal_start[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.jadwal_end">
        {{ errors.jadwal_end[0] }}
      </v-alert>
      <v-alert type="error" v-if="errors.tarif">
        {{ errors.tarif[0] }}
      </v-alert>
    </div>

    <div id="preview">
      <img v-if="url" :src="url" />
    </div>

    <div class="mb-3">
      <h6>Foto Profile</h6>
      <input type="file" @change="selectFile" />
    </div>

    <div class="mb-3">
      <input v-model="user_uuid" hidden class="form-control" />
    </div>

    <div class="mb-3">
      <input v-model="user_id" hidden class="form-control" />
    </div>

    <div class="mb-3">
      <v-text-field label="Nama" v-model="nama" />
    </div>

    <div class="mb-3">
      <v-text-field label="Phone" type="number" v-model="phone" />
    </div>

    <div class="mb-3">
      <v-text-field label="Tarif" hint="Penulisan Uang Contoh 10.000 " v-model="tarif" />
    </div>

    <div class="mb-3">
      <v-text-field label="Sekolah" v-model="sekolah" />
    </div>

    <div class="mb-3">
      <v-text-field label="Jurusan" v-model="jurusan" />
    </div>

    <div class="mb-3">
      <v-select v-model="mengajar" :items="items" label="Mengajar" dense></v-select>
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
            label="Hari Mulai Mengajar"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="jadwal_start" @change="save"></v-date-picker>
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
            label="Jam Mulai Mengajar"
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
            label="Hari Selesai Mengajar"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="jadwal_end" @change="save1"></v-date-picker>
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
            label="Jam Selesai Mengajar"
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

    <div class="mb-3">
      <v-textarea label="Pengalaman" v-model="pengalaman" />
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
      pengalaman: "",
      jadwal_start: "",
      jadwal_end: "",
      tarif: "",
      jurusan: "",
      foto_profile: "",
      phone: "",
      menu: false,
      menu1: false,
      menu2: false,
      menu3: false,
      time_end: "",
      time_start: "",
      errors:[],
      items: ["matematika", "fisika", "web programming"],
      url: null,
    };
  },
  computed: {
    user_id: {
      get() {
        return this.$store.state.user.id;
      },
    },
    user_uuid: {
      get() {
        return this.$store.state.user.user_uuid;
      },
    },
  },
  methods: {
    selectFile(event) {
      const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      this.foto_profile = event.target.files[0];
    },
    save(jadwal_start) {
      this.$refs.menu.save(jadwal_start);
    },
    save1(jadwal_end) {
      this.$refs.menu1.save(jadwal_end);
    },
    async submit() {
      try {
        const data = new FormData();
        data.append("user_id", this.user_id);
        data.append("user_uuid", this.user_uuid);
        data.append("tarif", this.tarif);
        data.append("nama", this.nama);
        data.append("sekolah", this.sekolah);
        data.append("jurusan", this.jurusan);
        data.append("mengajar", this.mengajar);
        data.append("phone", this.phone);
        data.append("pengalaman", this.pengalaman);
        data.append("jadwal_start", this.jadwal_start);
        data.append("jadwal_end", this.jadwal_end);
        data.append("time_start", this.time_start);
        data.append("time_end", this.time_end);
        data.append("foto_profile", this.foto_profile);
        await axios.post("profile/post", data);
        window.location.href = "/profile";
      } catch (error) {
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
      }
    },
  },
};
</script>

<style>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 30%;
  max-height: 500px;
}
</style>