import Vue from "vue";
import Vuex from "vuex";
import api from "@/helpers/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      users: [],
    };
  },
  getters: {
    users: state => state.users,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const users = await api.getUsers();

      commit("SET_USERS", users);
    },
  },
});
