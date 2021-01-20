import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";

Vue.use(VueRouter);

/**
 * meta:{cache:Boolean,title:String}
 * cache 判断当前组件是否需要通过keep-alive缓存，如果为true，组件必须提供name属性，且应与route 配置中name属性保持一致
 * default:false
 * title 网页名
 */

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: {
      cache: true
    }
  },
  {
    path: "/prodDetail",
    name: "prodDetail",
    component: () => import("../views/prodDetail.vue"),
    meta: {
      title: "产品详情"
    }
  },
  {
    path: "/authCodeSearch",
    name: "authCodeSearch",
    component: () => import("../views/authCodeSearch.vue"),
    meta: {
      title: "验证真伪"
    }
  },
  {
    path: "/authFile",
    name: "authFile",
    component: () => import("../views/authFile.vue"),
    meta: {
      title: "用户使用授权许可文件"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
