// vuex/store.js
import Vue from 'vue'
import { Vuex, mapState } from 'vuex'
import index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
    // 组合各个模块
    modules: {
        index
    }
})