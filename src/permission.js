import router from "router";
import store from "store";
import setting from "setting";
// 设置网页标题
const getPageTitle = to => {
  let title = setting.TITLE,
    temp = to.meta.title;
  return temp ? `${title}-${temp}` : title;
};

router.beforeEach((to, from, next) => {
  store.commit("ADD_CACHED_VIEW", to);
  if (to.path === from.path) {
    next(false);
  }
  document.title = getPageTitle(to);
  next();
});
