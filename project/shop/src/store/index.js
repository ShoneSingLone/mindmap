import Vue from 'vue'
import Vuex from 'vuex'
import shell from './modules/shell'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shell
  }
})
