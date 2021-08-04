import apiRepository from "../apiRepository";
export default {
    state: () => ({
        user: "",
    }),
    getters: {},
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
    },
    actions: {
        async getUser({ commit }) {
            const { data } = await apiRepository.getUser();
            commit("SET_USER", data);
        },
    },
};
