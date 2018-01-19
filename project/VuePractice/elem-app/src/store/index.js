import Vue from 'vue'
import Vuex from 'vuex'
import seller from './modules/seller'
import goods from './modules/goods'
import ratings from './modules/ratings'
import shopcart from './modules/shopcart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    seller,
    shopcart,
    ratings,
    goods
  }
})

