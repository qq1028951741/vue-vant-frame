import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./permission";
import { Button } from "vant";
import "amfe-flexible";
import "normalize.css/normalize.css";
import "./assets/css/global.styl";
import less from "less";
import VideoPlayer from "vue-video-player";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
import { Field } from "vant";
import { Search } from "vant";
import { Dialog } from "vant";
import { Image as VanImage } from "vant";

Vue.use(Button).use(less).use(VideoPlayer).use(Field).use(Search).use(Dialog).use(VanImage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
