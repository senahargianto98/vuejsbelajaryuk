<template>
  <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >
      <v-toolbar-title>Belajar Yuk</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
        
        <v-tabs-slider color="yellow"></v-tabs-slider>
        
          <v-tab>
            Profile
          </v-tab>

          <v-tab>
            Jadwal
          </v-tab>
        
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <div v-if="user.profile.length">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
              </div>
              <div class="col-lg-6">
                <Card/>
              </div>
              <div class="col-sm-3">
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
              </div>
              <div class="col-lg-6">
                <ProfileForm/>
              </div>
              <div class="col-sm-3">
              </div>
            </div>
          </div>
        </div>        
      </v-tab-item>
      
      <v-tab-item>
        <div v-if="user.profile.length">
          <Calender/>
        </div>
        <div v-else>
          <p >Isi Data Diri Terlebih Dahulu!</p>
        </div>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>
import axios from "axios";
import Card from '../components/Card.vue'
import Calender from '../components/Calender.vue'
import ProfileForm from '../components/ProfileForm.vue'

export default {
  data () {
    return {
      tab: null,
    }
  },
  components:{
    Card,
    Calender,
    ProfileForm,
  },
  methods: {
    async logout() {
      await axios.post('logout');
      await this.$router.push('/');
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>