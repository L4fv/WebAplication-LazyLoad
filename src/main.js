import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueLazyload from 'vue-lazyload'
import './registerServiceWorker'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/loading.gif'),
  attempt: 1
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
