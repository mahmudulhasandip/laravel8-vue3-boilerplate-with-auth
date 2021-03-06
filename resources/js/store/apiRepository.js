// import api from "./api";
import axios from "axios";

export default {
    createSession() {
        return axios.get("/sanctum/csrf-cookie");
    },

    register(params) {
        return axios.post("/api/register", params);
    },

    login(params) {
        return axios.post("/api/login", params);
    },

    logout() {
        return axios.post("/api/logout");
    },

    getUser() {
        return axios.get("/api/user");
    },
};
