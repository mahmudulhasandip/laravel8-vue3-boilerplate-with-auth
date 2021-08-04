import apiRepository from "../apiRepository";
export default {
    state: () => ({
        user: null,
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
            console.log(data);
            commit("SET_USER", data);
        },
    },
};
