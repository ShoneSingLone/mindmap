// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import mainApp from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el:"#app",
  router: router,
  template:"<app/>",
  components: { app: mainApp }
})
