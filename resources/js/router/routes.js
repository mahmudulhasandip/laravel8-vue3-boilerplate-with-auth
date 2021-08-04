import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/Home.vue";

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/",
        name: "home",
        component: Home,
    },
];

export default routes;
