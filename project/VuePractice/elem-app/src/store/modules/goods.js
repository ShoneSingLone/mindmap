import Vue from 'vue';
import { goods as MT } from '../mutation-types';
import { goods as AT } from '../action-types';


// initial state
const
    state = {
        all: [],
        isShowFoodDetail: false
    },
    getters = {
        goods: state => state.all,
        //购物车中的foods
        selectedFoods: state => {
            let foods = [];
            state.all.forEach(good => {
                good.foods.forEach(food => {
                    if (food.count) {
                        foods.push(food);
                    }
                });
            });
            return foods;
        }
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
        },
        [MT.setShowFoodFlag](state, { isShowFoodDetail }) {
            state.isShowFoodDetail = isShowFoodDetail;
        }
    };

export default {
    state,
    getters,
    actions,
    mutations
}

