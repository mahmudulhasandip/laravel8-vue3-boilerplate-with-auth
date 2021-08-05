import { Store } from "vuex";
import { createStore } from "vuex-extensions";

import auth from "./modules/auth";
import user from "./modules/user";

const store = createStore(Store, {
    modules: {
        auth,
        user,
    },
});

export default store;
