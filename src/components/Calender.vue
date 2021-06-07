<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today.today"
          :value="today.today"
          :events="user.schedule"
          :interval-format="intervalFormatter"
          color="primary"
          type="day"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      tab: null,
      today: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    intervalFormatter(locale, getOptions) {
     return locale.time;
    }
  },
  async mounted() {
      const {data} = await axios.get(`today`);
      this.today = data;
  },
}
</script>