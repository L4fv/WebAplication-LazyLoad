<template>
  <v-layout wrap row :style="{backgroundColor: color}" class="mainLayout">
    <v-flex xs12 text-xs-center>
      <b>{{text}}</b>
    </v-flex>
    <v-flex xs4 v-for="(item, key) in lista" :key="key" pa-2>
      <v-card>
        <v-img
          :src="item.url"
          :lazy-src="require('../assets/defaultUpload.png')"
          height="100"
          aspect-ratio="1"
        ></v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios"; //
export default {
  props: ["text", "color"],
  data() {
    return {
      lista: []
    };
  },
  created() {},
  async mounted() {
    const response = await axios({
      url: "https://api.thecatapi.com/v1/images/search?limit=6",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-api-key": "d1f20906-fc9e-4bd7-9358-4d799f47cf0b"
      }
    });
    this.lista = response.data;
  }
};
</script>
<style scoped>
.mainLayout {
  height: 260px;
  border: 1px solid #fff;
}
</style>
