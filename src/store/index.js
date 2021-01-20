import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const modulesFiles = require.context("./modules", true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default new Vuex.Store({
  state: {
    banners: [],
    // 需要缓存的路由名
    cachedViews: []
  },
  mutations: {
    SET_BANNERS(state, banners) {
      state.banners = banners;
    },
    ADD_CACHED_VIEW: (state, view) => {
      if (state.cachedViews.includes(view.name)) return;
      if (view.meta.cache) {
        state.cachedViews.push(view.name);
      }
    }
  },
  actions: {},
  modules
});
