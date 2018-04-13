import Vue from 'vue';
import { template as MT } from '../mutation-types';
import { template as AT } from '../action-types';


// initial state
const
    state = {
        all: {}
    },
    getters = {
        template: state => state.all
    },
    actions = {
        print({ commit }) {},
        [AT.init]({ commit }) {}
    },
    mutations = {
        [MT.setAll](state, { template }) {}
    };

export default {
    state,
    getters,
    actions,
    mutations
}

