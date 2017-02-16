import Vue from "./js/vendor/vue.min.js";
import VueRouter from "./js/vendor/vue-router.min.js";

Vue.use(VueRouter);

// route components
// ======================================================/
const fooComponent = {
  template: "<div>foo page</div>"
};

const barComponent = {
  template: "<div>bar page</div>"
};

const bazComponent = {
  template: "<div>baz page</div>"
};

// routes
// ======================================================/
const route1 = [{
  path: "/foo",
  component: fooComponent
}, {
  path: "/bar",
  component: barComponent
}, {
  path: "/baz",
  component: bazComponent
}];

// router instance
// ======================================================/
const router = new VueRouter({
  routes: route1 
});

// mount
// ======================================================/
const app = new Vue({
  router
}).$mount("#app");