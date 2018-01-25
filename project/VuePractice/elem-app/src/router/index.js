import Vue from 'vue'
import Router from 'vue-router'
import goods from '@c/goods/goods'
import ratings from '@c/ratings/ratings'
import seller from '@c/seller/seller'

Vue.use(Router)

let childreRouter = new Router({
  routes: [{
    path: 's',
    name: 'login.sucess',
    component: goods
  }]
});

export default new Router({
  // linkExactActiveClass:"active",
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings,
      children: childreRouter.routes
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller,
      children: childreRouter.routes
    }
  ]
})
