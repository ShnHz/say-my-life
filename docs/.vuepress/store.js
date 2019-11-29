import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lock: true
  },
  mutations: {
    setLock(state, data) {
      state.lock = data
    },
  },
  actions: {

  }
})