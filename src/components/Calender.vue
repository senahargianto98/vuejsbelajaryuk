<template>
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
</template>

<script>

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
}
</script>