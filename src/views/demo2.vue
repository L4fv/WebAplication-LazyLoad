<template>
  <v-layout wrap row>
    <v-flex xs12 text-xs-center>
      <loading-component v-if="loading"></loading-component>
      <v-layout wrap row v-for="(item, key) in lista" :key="key" align-center text-xs-center pa-2>
        <v-flex xs4>
          <img v-lazy="item.url" height="80" width="100">
        </v-flex>
        <v-flex xs8>
          <h1>Cat image {{key}}</h1>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
import LoadingComponent from "../components/LoadingComponent";
export default {
  components: { LoadingComponent },
  data() {
    return {
      lista: [],
      loading: true
    };
  },
  async created() {
    this.loading = true;
    const response = await axios({
      url: "https://api.thecatapi.com/v1/images/search?limit=100",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-api-key": "d1f20906-fc9e-4bd7-9358-4d799f47cf0b"
      }
    });
    this.lista = response.data;
    this.loading = false;
  }
};
</script>
