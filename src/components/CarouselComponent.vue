<template>
  <div class="mainCarousel">
    <img :src="urlImage" class="myImage">
  </div>
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
  width: 100%;
  display: flex;
  background-color: #69f0ae;
}

.myImage {
  height: 250px;
  min-width: 400px;
  width: 100%;
}
</style>