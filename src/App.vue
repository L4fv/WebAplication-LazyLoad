<template>
  <v-app>
    <toolbar-home></toolbar-home>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToolbarHome from "./components/ToolbarHome"; //sinc component
// const ToolbarHome = () => ({
//   component: import(/* webpackChunkName: "ToolbarHome" */ "./components/ToolbarHome")
// }); // async call
export default {
  name: "App",
  components: {
    ToolbarHome
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  padding: 0;
  background-color: #f4f4f4;
}
</style>
