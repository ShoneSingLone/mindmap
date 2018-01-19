// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import app from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

console.log("eleMeApp start");
/* eslint-disable no-new */
let eleMeApp = new Vue({
  el: "#app",
  router,
  store,
  template: "<app/>",
  components: { app }
});
console.log("eleMeApp end");
console.dir(eleMeApp);