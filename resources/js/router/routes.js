import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/Home.vue";

import middleware from "./middleware";

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
        beforeEnter: middleware.guest,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        beforeEnter: middleware.guest,
    },
    {
        path: "/",
        name: "home",
        component: Home,
        beforeEnter: middleware.user,
    },
];

export default routes;
