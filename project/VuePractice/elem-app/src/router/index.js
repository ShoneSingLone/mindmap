import Vue from 'vue'
import Router from 'vue-router'
import goods from '@c/goods/goods'

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
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings', 
      component: goods,
      children: childreRouter.routes
    },
    {
      path: '/seller',
      name: 'seller',
      component: goods,
      children: childreRouter.routes
    }
  ]
})
