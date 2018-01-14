import Vue from 'vue'
import Vuex from 'vuex'
import seller from './modules/seller'
import goods from './modules/goods'
import shopcart from './modules/shopcart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    seller,
    shopcart,
    goods
  }
})

