import Vue from 'vue';
import { shopcart as MT } from '../mutation-types';
import { shopcart as AT } from '../action-types';
import index from 'vue';


// initial state
const
    state = {
        all: {}
    },
    getters = {
    },
    actions = {
        [AT.init]({ commit }) { }
    },
    mutations = {
        [MT.update](state, { food }) { }
    };

export default {
    state,
    getters,
    actions,
    mutations
}

