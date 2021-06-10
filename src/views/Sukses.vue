<template>
  <div class="head">
    <v-card class="mx-auto" max-width="400" tile>
      <v-list rounded>
        <h5 class="text-center">Data Siswa Sukses Terinput</h5>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <h6 v-text="item.text"></h6>
              <!-- <v-list-item-title v-text="item.text"></v-list-item-title> -->
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: "Permintaan anda di proses dan di konfirmasi ke pengajar untuk jadwal belajar.", icon: "mdi-clock" },
      { text: "Setelah di terima oleh pengajar siswa akan di kirimkan email atau whatsapp link pembayaran.", icon: "mdi-account" },
      { text: "Siswa melakukan pembayaran.", icon: "mdi-account-cash" },
      {
        text:
          "Setelah melakukan pembayaran siswa di kabari lewat Wa dan Email nomor pengajar dan link pertemuan Gmeet atau Zoom.",
        icon: "mdi-whatsapp",
      },
    ],
  }),
};
</script>

<style>
    .head
    {
        margin-top:100px;
    }
</style>