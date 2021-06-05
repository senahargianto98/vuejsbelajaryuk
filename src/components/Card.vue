<template>
  <v-card>
    <v-card-title class="mt-8">
      <div v-for="users in user.profile">
        <v-avatar size="86">
          <img alt="user" :src="'http://localhost:8000' + users.foto_profile" />
        </v-avatar>
      </div>

      <p class="ml-8" v-for="users in user.profile">
        {{ users.nama }}
      </p>
    </v-card-title>

    <v-card-text>
      
      <div class="font-weight-bold ml-8 mb-2">Data Diri</div>
      <v-timeline align-top dense>
        <v-timeline-item color="purple" large icon="mdi-school">
          <div>
            <div class="font-weight-normal">
              <strong>Sekolah</strong>
            </div>
            <div v-for="users in user.profile">{{ users.sekolah }}</div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="purple" large icon="mdi-certificate">
          <div>
            <div class="font-weight-normal">
              <strong>Jurusan</strong>
            </div>
            <div v-for="users in user.profile">{{ users.jurusan }}</div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="purple" large icon="mdi-teach">
          <div>
            <div class="font-weight-normal">
              <strong>Mengajar</strong>
            </div>
            <div v-for="users in user.profile">{{ users.mengajar }}</div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="purple" large icon="mdi-calendar">
          <div>
            <div class="font-weight-normal">
              <strong>Jadwal</strong>
            </div>
            <div v-for="users in user.profile">
              {{ users.jadwal_start }} sd {{ users.jadwal_end }}
            </div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="purple" icon="mdi-card-text-outline" large>
          <div>
            <div class="font-weight-normal">
              <strong>Motivasi</strong>
            </div>
            <div v-for="users in user.profile">{{ users.motivasi }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>


<script>
import axios from "axios";
import Card from "../components/Card.vue";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>