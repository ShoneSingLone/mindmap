import Vue from 'vue'
import Router from 'vue-router'

import routeHome from './home.js'
import routeXXR from './xxr.js'
import routeProduct from './product.js'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '*',
    redirect: '/xxr'
  }, routeHome, routeXXR, routeProduct]
})
