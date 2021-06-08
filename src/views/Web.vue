<template>
  <div>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense>
        <v-toolbar-title>Belajar Yuk</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <div>
      <div class="judul1">
        <h5 class="text-center">Guru Web Kami</h5>
      </div>
    </div>

    <div>
      <v-card class="mx-auto" max-width="480">
        <v-card-title class="black--text mt-8">
          <v-avatar size="100">
            <img
              alt="user"
              src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
            />
          </v-avatar>
          <p class="ml-3">John Doe</p>
        </v-card-title>

        <v-card-actions>
          <v-btn color="orange lighten-2" @click="show = !show" text>
            Lihat Profile
          </v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              <div class="font-weight-bold ml-8 mb-2">Data Diri</div>
              <v-timeline align-top dense>
                <v-timeline-item color="purple" large icon="mdi-school">
                  <div>
                    <div class="font-weight-normal">
                      <strong>Sekolah</strong>
                    </div>
                    <div></div>
                  </div>
                </v-timeline-item>

                <v-timeline-item color="purple" large icon="mdi-phone">
                  <div>
                    <div class="font-weight-normal">
                      <strong>Phone</strong>
                    </div>
                    <div></div>
                  </div>
                </v-timeline-item>

                <v-timeline-item color="purple" large icon="mdi-certificate">
                  <div>
                    <div class="font-weight-normal">
                      <strong>Jurusan</strong>
                    </div>
                    <div></div>
                  </div>
                </v-timeline-item>

                <v-timeline-item color="purple" large icon="mdi-teach">
                  <div>
                    <div class="font-weight-normal">
                      <strong>Mengajar</strong>
                    </div>
                    <div></div>
                  </div>
                </v-timeline-item>

                <v-timeline-item color="purple" large icon="mdi-calendar">
                  <div>
                    <div class="font-weight-normal">
                      <strong>Jadwal</strong>
                    </div>
                    <div></div>
                  </div>
                </v-timeline-item>

                <v-timeline-item
                  color="purple"
                  icon="mdi-card-text-outline"
                  large
                >
                  <div>
                    <div class="font-weight-normal">
                      <strong>Pengalaman Mengajar</strong>
                    </div>
                    <div></div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
    
  </div>
</template>


<script>
export default {
  data: () => ({
    show: false,
    model: null,
  }),
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