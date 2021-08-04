require("./bootstrap");

import { createApp } from "vue";
import moment from "moment";

import App from "./components/App";
import router from "./router/index";
import store from "./store/index";

moment.locale("es");

let app = createApp(App);

app.config.globalProperties.$moment = moment;

app.use(router).use(store).mount("#app");
