import Vue from 'vue'
import Router from 'vue-router'
import routeHome from './home.js'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '*',
    redirect: '/'
  }, routeHome]
})
