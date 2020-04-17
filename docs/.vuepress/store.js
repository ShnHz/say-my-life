import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lock: true,
    pwboxVisible: false,

    homeBottom: 0
  },
  mutations: {
    setLock(state, data) {
      state.lock = data
    },
    setPwboxVisible(state, data) {
      state.pwboxVisible = data
    },
    handleHomeBottom(state) {
      state.homeBottom++
    }
  },
  actions: {

  }
})