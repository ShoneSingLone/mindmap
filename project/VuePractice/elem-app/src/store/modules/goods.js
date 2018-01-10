import Vue from 'vue';
import { goods as MT } from '../mutation-types';
import { goods as AT } from '../action-types';


// initial state
const
    state = {
        all: {}
    },
    getters = {
        goods: state => state.all
    },
    actions = {
        [AT.init]({ commit }) {//context.commit
            console.log("goods commit " + AT.init);
            Vue.axios
                .get("https://shonesinglone.leanapp.cn/elem/goods")
                .then(response => {
                    if (200 === response.status) {
                        let goods = response.data;
                        commit(MT.setAll, { goods });
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mutations = {
        [MT.setAll](state, { goods }) {
            console.log("goods mutations " + MT.setAll);
            state.all = goods;
        }
    };

export default {
    state,
    getters,
    actions,
    mutations
}

