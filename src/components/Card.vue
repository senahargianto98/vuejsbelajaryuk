<template>
    <v-container>
        <v-row justify="space-around">
              <v-card width="700">
                  <v-card-title class="mt-8">
                    <v-avatar size="86">
                      <img
                        alt="user"
                        src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                      >
                    </v-avatar>
                    <p class="ml-8" v-for="users in user.profile">
                      {{ users.nama }}
                    </p>
                  </v-card-title>
                </v-img>

                <v-card-text>
                  <div class="font-weight-bold ml-8 mb-2">
                    Data Diri
                  </div>

                  <v-timeline
                    align-top
                    dense
                  >
                    <v-timeline-item
                      color="purple"
                      small
                    >
                      <div>
                        <div class="font-weight-normal">
                          <strong>Sekolah</strong>
                        </div>
                        <div v-for="users in user.profile" >{{ users.sekolah }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
        </v-row>
    </v-container>          
</template>


<script>
import axios from "axios";
import Card from '../components/Card.vue'

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>