<template>
  <div>

    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense>
        <v-toolbar-title>Belajar Yuk</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
        href="/register"
        >
          <div>
            NgajarYuk
          </div>
        </v-btn>

      </v-toolbar>
    </v-card>

    <div>
      <div class="judul1">
        <h5 class="text-center">Guru MTK Kami</h5>
      </div>
    </div>

    <div v-for="user in users" v-if="user.mengajar == 'matematika'">
      <v-card class="mx-auto" max-width="480">
        <v-card-title class="black--text mt-8">
          <v-avatar size="100">
            <img alt="user" :src="'http://localhost:8000' + user.foto_profile" />
          </v-avatar>
          <p class="ml-3">{{ user.nama }}</p>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="orange lighten-2" :href="'/student/' + user.user_uuid">
            Hire
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Data Diri</div>
          <v-timeline align-top dense>
            <v-timeline-item color="purple" small icon="mdi-school">
              <div>
                <div class="font-weight-normal">
                  <strong>Sekolah</strong>
                </div>
                <div>{{ user.sekolah }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="purple" small icon="mdi-certificate">
              <div>
                <div class="font-weight-normal">
                  <strong>Jurusan</strong>
                </div>
                <div>{{ user.jurusan }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="purple" small icon="mdi-teach">
              <div>
                <div class="font-weight-normal">
                  <strong>Mengajar</strong>
                </div>
                <div>{{ user.mengajar }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="purple" small icon="mdi-calendar">
              <div>
                <div class="font-weight-normal">
                  <strong>Jadwal</strong>
                </div>
                <div>
                  {{ user.jadwal_start }} pukul {{ user.time_start }} sd
                  {{ user.jadwal_end }} pukul {{ user.time_end }}
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="purple" small icon="mdi-account-cash">
              <div>
                <div class="font-weight-normal">
                  <strong>Tarif</strong>
                </div>
                <div>Rp.{{ user.tarif }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item color="purple" icon="mdi-card-text-outline" small>
              <div>
                <div class="font-weight-normal">
                  <strong>Pengalaman Mengajar</strong>
                </div>
                <div>{{ user.pengalaman }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    show: false,
    model: null,
    users: [],
  }),
  async mounted() {
    const { data } = await axios.get(`profile`);
    this.users = data;
  },
};
</script>

<style>
.judul1 {
  margin-top: 20px;
}
.foot {
  margin-top: 60px;
}
</style>
