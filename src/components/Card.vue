<template>
  <v-card>
    <v-card-title class="mt-8">
      <div v-for="users in user.profile">
        <v-avatar size="86">
          <img alt="user" :src="'https://api.belajaryuk.xyz' + users.foto_profile" />
        </v-avatar>
      </div>

      <p class="ml-8" v-for="users in user.profile">
        {{ users.nama }}
      </p>
    </v-card-title>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="orange lighten-2" :href="'/profile/edit/' + user.user_uuid"> Edit </v-btn>
    </v-card-actions>

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

        <v-timeline-item color="purple" large icon="mdi-phone">
          <div>
            <div class="font-weight-normal">
              <strong>Phone</strong>
            </div>
            <div v-for="users in user.profile">{{ users.phone }}</div>
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
              {{ users.jadwal_start }} pukul {{ users.time_start }} sd
              {{ users.jadwal_end }} pukul {{ users.time_end }}
            </div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="purple" large icon="mdi-account-cash">
          <div>
            <div class="font-weight-normal">
              <strong>Tarif</strong>
            </div>
            <div v-for="users in user.profile">Rp.{{ users.tarif }}</div>
          </div>
        </v-timeline-item>

        <v-timeline-item color="purple" icon="mdi-card-text-outline" large>
          <div>
            <div class="font-weight-normal">
              <strong>Pengalaman Mengajar</strong>
            </div>
            <div v-for="users in user.profile">{{ users.pengalaman }}</div>
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
