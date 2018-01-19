import Vue from 'vue';
import { ratings as MT } from '../mutation-types';
import { ratings as AT } from '../action-types';


// initial state
const
    state = {
        all: []
    },
    getters = {
        ratings: state => state.all
    },
    actions = {
        print({ commit }) { },
        [AT.init]({ commit }) {//context.commit
            console.log("ratings commit " + AT.init);
            Vue.axios
                .get("https://shonesinglone.leanapp.cn/elem/ratings")
                .then(response => {
                    if (200 === response.status) {
                        let ratings = response.data;
                        commit(MT.setAll, { ratings });
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    mutations = {
        [MT.setAll](state, { ratings }) {
            console.log("ratings mutations " + MT.setAll);
            state.all = ratings;
        }
    };

export default {
    state,
    getters,
    actions,
    mutations
}

