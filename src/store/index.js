import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signedIn: false,
    address: null,
    wallet: null
  },
  mutations: {
    hasSignedIn(state, hasSignedIn) {
      state.signedIn = hasSignedIn;
    },
    setUserAddress(state, address) {
      state.address = address;
    },
    setUserWallet(state, wallet) {
      state.wallet = wallet;
    }
  },
  actions: {},
  modules: {}
});
