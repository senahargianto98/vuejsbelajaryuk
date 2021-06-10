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

    <v-parallax
      height="450"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">Belajar Yuk</h1>
          <h4 class="subheading">
            Belajar Skill Apapun dimanapun dalam genggaman
          </h4>
        </v-col>
      </v-row>
    </v-parallax>

    <div class="judul1">
      <h5 class="text-center">Belajar Dengan Harga Mulai 100 ribuan</h5>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <v-card outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Akademik</div>
                <v-list-item-title class="text-h5 mb-1">
                  Belajar Pelajaran Sekolah
                </v-list-item-title>
                <v-list-item-subtitle>
                  Belajar Pelajaran sekolah dengan guru private terbaik dengan
                  harga 100 rebu per sesi
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="120" color="grey">
                <img
                  src="https://image.freepik.com/free-vector/math-background_23-2148147194.jpg"
                />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </div>
        <div class="col-lg-6">
          <v-card outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Web Programming</div>
                <v-list-item-title class="text-h5 mb-1">
                  Belajar Web Programming?
                </v-list-item-title>
                <v-list-item-subtitle>
                  Belajar Web programming yang sedang Hype? Di sini kalian bisa
                  Belajar dari para Programmer kami.
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="120" color="grey">
                <img
                  src="https://madewithnetwork.ams3.digitaloceanspaces.com/spatie-space-production/5191/webIDE.jpg"
                />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <v-card outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Proyek</div>
                <v-list-item-title class="text-h5 mb-1">
                  Punya Proyek ?
                </v-list-item-title>
                <v-list-item-subtitle>
                  Punya Proyek yang bisa freelance kami kerjakan ? Ceritain aja
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="120" color="grey">
                <img
                  src="https://malangchannel.com/wp-content/uploads/2019/11/freelance.jpeg"
                />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </div>
      </div>
    </div>

    <div class="foot" >
      <div class="judul1">
        <h5 class="text-center">Produk Kami</h5>
      </div>
      <v-card max-width="600" class="mx-auto">
        <v-container>
          <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <v-card :color="item.color" dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="item.title"
                    ></v-card-title>

                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        v-if="item.title === 'Fisika'"
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                        :href="item.href"
                      >
                        Cek
                      </v-btn>

                      <v-btn v-else 
                      class="ml-2 mt-5" 
                      :href="item.href"
                      outlined rounded small>
                        Cek
                      </v-btn>
                    </v-card-actions>
                  </div>

                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="item.src"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>

  </div>
</template>


<script>

export default {
  data: () => ({
    show: false,
    model: null,
    items: [
      {
        color: "#1F7087",
        src: "https://cdn-2.tstatic.net/newsmaker/foto/bank/images/ilustrasi-matematika-soal-dan-kunci-jawaban-latihan-usbn.jpg",
        title: "Matematika",
        artist: "Di belajaryuk kami memiliki guru-guru private terbaik yang berpengalaman mengajar, harga mulai 100 ribu loh!!!",
        href: "/matematika",
      },
      {
        color: "#952175",
        src: "https://assets.kompasiana.com/items/album/2020/05/13/file-20171025-25516-g7rtyl-5ebbd84a097f360c0a2fe932.jpg?t=o&v=740&x=416",
        title: "Fisika",
        artist: "Belajar bersama kami dengan pengajar lulusan Universitas Indonesia hingga pengajar berpengalaman di BTA",
        href: "/fisika",
      },
      {
        color: "pink darken-2",
        src: "https://miro.medium.com/max/12032/0*Fu_vcP7P_uHF1Szk",
        title: "Web Programming",
        artist: "Belajar Programmer dari para builder belajaryuk dan programmer yang sudah berpengalaman di startup",
        href: "/web",
      },
    ],
  }),
};
</script>

<style>
.judul1 {
  margin-top: 20px;
}
.foot{
  margin-top: 60px;
}
</style>