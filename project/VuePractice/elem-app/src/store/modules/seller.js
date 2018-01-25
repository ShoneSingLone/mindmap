import Vue from 'vue';
import { seller as MT } from '../mutation-types';
import { seller as AT } from '../action-types';
// initial state
const
    state = {
        all: {}
    },
    getters = {
        seller: state => state.all
    },
    actions = {
        print({ commit }) {
            console.log("seller");
        },
        [AT.init]({ commit }, query) {//context.commit
            console.log("seller commit " + AT.initSeller);
            Vue.axios
                .get("https://shonesinglone.leanapp.cn/elem/seller" + ((query.id) ? ("?id=" + query.id) : ""))
                .then(response => {
                    if (200 === response.status) {
                        let seller = response.data;
                        commit(MT.setAll, { seller });
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mutations = {
        [MT.setAll](state, { seller }) {
            console.log("seller mutations " + MT.setAll);
            state.all = seller;
        }
    };

export default {
    state,
    getters,
    actions,
    mutations
}

