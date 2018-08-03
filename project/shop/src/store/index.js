import Vue from 'vue'
import Vuex from 'vuex'
import shell from './modules/shell'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shell,
    home
  }
})
