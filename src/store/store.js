import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginState: window.sessionStorage.getItem('loginState')
  },
  mutations: {
    SET_LOGIN_STATE: (state, data) => {
      state.loginState = data
      window.sessionStorage.setItem('loginState', data)
    }
  }
})

export default store