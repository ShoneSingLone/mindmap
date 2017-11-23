import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Sucess from '@/components/Sucess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children: [{
        path: 's',
        name: 'login.sucess',
        component: Sucess
      }]
    }
  ]
})
