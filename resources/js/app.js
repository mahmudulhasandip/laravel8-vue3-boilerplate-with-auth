require("./bootstrap");

import { createApp } from "vue";
import moment from "moment";
import VueProgressBar from "@aacassandra/vue3-progressbar";

import App from "./components/App";
import router from "./router/index";
import store from "./store/index";

moment.locale("es");

let app = createApp(App);

app.config.globalProperties.$moment = moment;

const VueProgressBarOptions = {
    color: "#64B5F6",
    failedColor: "#874b4b",
    thickness: "2px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
};

app.use(router)
    .use(store)
    .use(VueProgressBar, VueProgressBarOptions)
    .mount("#app");
