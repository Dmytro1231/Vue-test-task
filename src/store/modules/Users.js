import ApiUsers from '@/api/users';

export default {
  namespaced: true,

  state: {
    users: [],
  },

  mutations: {
    GET_USERS_INFO(state, users) {
      state.users = {
        ...users,
      };
    },
  },

  actions: {
    getUsers({ commit }) {
      return ApiUsers.getUsers().then((response) => {
        commit('GET_USERS_INFO', response.data);
        return response.data;
      });
    },
  },
};
