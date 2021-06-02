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
            <v-badge
              color="green"
              content="6"
            >
              Jadwal
            </v-badge>
          </v-tab>
        
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <div v-if="user.profile.length">
          <h1 v-for="todo in user.profile">{{ todo }}</h1>
        </div>
        <div v-else>
          <p >No todos left!</p>
        </div>
      </v-tab-item>
      
      <v-tab-item>
          <v-row>
            <v-col>
              <v-sheet height="400">
                <v-calendar
                  ref="calendar"
                  :now="today"
                  :value="today"
                  :events="events"
                  color="primary"
                  type="week"
                ></v-calendar>
              </v-sheet>
            </v-col>
          </v-row>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      tab: null,
      today: '2021-06-02',
      events: [
        {
          name: 'Jadwal Ngajar Sena',
          start: '2021-06-02 09:00',
          end: '2021-06-02 10:00',
        },
      ],
    }
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