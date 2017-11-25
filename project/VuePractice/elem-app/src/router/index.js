import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@c/goods/Goods'

Vue.use(Router)

let childreRouter = new Router({
  routes: [{
    path: 's',
    name: 'login.sucess',
    component: Goods
  }]
});

export default new Router({
  // linkExactActiveClass:"active",
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Goods,
      children: childreRouter.routes
    },
    {
      path: '/seller',
      name: 'seller',
      component: Goods,
      children: childreRouter.routes
    }
  ]
})
