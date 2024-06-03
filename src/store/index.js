import Vue from "vue";
import Vuex from "vuex";
import api from "@/helpers/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      users: [],
      page: 1,
      limit: 10,
      usersCount: 0,
    };
  },
  getters: {
    users: state => state.users,
    page: state => state.page,
    limit: state => state.limit,
    usersCount: state => state.usersCount,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_PAGE(state, page) {
      state.page = page;
    },
    SET_LIMIT(state, limit) {
      state.limit = limit;
    },
    SET_USERS_COUNT(state, usersCount) {
      state.usersCount = usersCount;
    },
  },
  actions: {
    async fetchUsers({ commit, getters }) {
      const response = await api.getUsers(getters.page, getters.limit);

      commit("SET_USERS_COUNT", response.total);
      commit("SET_USERS", response.users);
    },
  },
});
