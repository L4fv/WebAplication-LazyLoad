<template>
  <v-layout wrap row>
    <!--default -->
    <v-flex xs12>
      <h4>Normal</h4>
      <img :src="urlImage" class="myImage">
    </v-flex>
    <!--vuetify -->
    <v-flex xs6>
      <h4>Vuetify component</h4>
      <v-img :src="urlImage" :lazy-src="require('../assets/loading.gif')" class="myImage"></v-img>
    </v-flex>
    <!-- VueLazyload -->
    <v-flex xs6>
      <h4>Vue component</h4>
      <img v-lazy="urlImage" class="myImage">
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      urlImage: ""
    };
  },
  async created() {
    const response = await axios({
      url: "https://api.thecatapi.com/v1/images/search?size=full",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-api-key": "d1f20906-fc9e-4bd7-9358-4d799f47cf0b"
      }
    });
    console.log(response.data);
    this.urlImage = response.data[0].url;
  }
};
</script>
<style scoped>
.mainCarousel {
  padding: 0 !important;
  margin: 0 !important;
  display: flex;
  background-color: #69f0ae;
}

.myImage {
  height: 250px;
  width: 100%;
  padding: 4px;
  background-color: #69f0ae;
}
</style>
