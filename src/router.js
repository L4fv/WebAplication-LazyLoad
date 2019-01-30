import Vue from "vue";
import Router from "vue-router";
import demo from "./views/demo.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "demo",
      component: demo
    },
    {
      path: "/demo1",
      name: "demo1",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "demo" */ "./views/demo1.vue")
    },
    {
      path: "/demo2",
      name: "demo2",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "demo1" */ "./views/demo2.vue")
    }
  ]
});
