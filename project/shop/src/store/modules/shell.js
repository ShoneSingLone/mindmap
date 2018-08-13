const state = {
  windowScrollY: 0
}
const getters = {
  windowScrollY (state) {
    return state.windowScrollY
  }
}
const actions = {
  async setWindowScrollY ({
    commit
  }, params) {
    commit('setWindowScrollY', params)
  }
}
const mutations = {
  setWindowScrollY (state, {
    y
  }) {
    state.setWindowScrollY = y
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
