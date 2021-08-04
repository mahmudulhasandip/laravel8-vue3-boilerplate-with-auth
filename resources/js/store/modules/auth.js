import apiRepository from "../apiRepository";
export default {
    state: () => ({
        user: sessionStorage.user
            ? JSON.parse(sessionStorage.getItem("user"))
            : null,
    }),
    getters: {
        user: (state) => state.user,
        authenticated: (state) => state.user !== null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
    },
    actions: {
        async login({ commit }, user) {
            await apiRepository.createSession();
            const { data } = await apiRepository.login(user);
            commit("SET_USER", data);
            sessionStorage.user = JSON.stringify(data);
        },

        async register({ commit }, user) {
            const { data } = await apiRepository.register(user);
            commit("SET_USER", data);
        },

        async logout({ commit }) {
            await apiRepository.logout();
            commit("SET_USER", null);
            sessionStorage.removeItem("user");
        },
    },
};
