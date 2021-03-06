import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialogVue from "./components/UI/BaseDialog.vue";
import BaseCardVue from "./components/UI/BaseCard.vue";
import BaseRouterButtonVue from "./components/UI/BaseRouterButton.vue";
import BaseCollumnVue from "./components/UI/BaseCollumn.vue";

import store from './store/index.js';
const app = createApp(App);
app.use(router);
app.use(store);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialogVue);
app.component("base-card", BaseCardVue);
app.component("base-router-button", BaseRouterButtonVue);
app.component("base-collumn", BaseCollumnVue);
app.mount("#app");
