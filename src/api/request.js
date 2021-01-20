import axios from "axios";
import store from "@/store";
import { Message, Loading } from "element-ui";
import { removeToken } from "utils/auth.js";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
});

let loadingInstance = null;

service.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({});
    const token = store.state.user.token;
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    loadingInstance.close();
    const res = response.data;
    if (res.code !== 200) {
      if (res.code == 10050019) {
        Message.warning({ message: "用户失效，请重新登录" });
        console.error("请求异常");
        removeToken();
        location.href = "/loginAndRegister";
        return Promise.reject(new Error(res.message || "Error"));
      } else {
        Message.warning({ message: res.message || "操作异常" });
        console.error("请求异常");
        return Promise.reject(new Error(res.message || "Error"));
      }
    } else {
      return res.result;
    }
  },
  error => {
    let errMsg = "";
    if (error.message && error.message.includes("timeout")) {
      errMsg = "网络超时，请检查网络";
    } else {
      errMsg = error.message || "网络请求异常";
    }
    Message.warning({ message: errMsg });
    loadingInstance.close();
    console.error("err" + error); // for debug
    return Promise.reject(error);
  }
);

// get，post请求方法
export default {
  post(url, data) {
    return service({
      method: "post",
      url,
      data
    });
  },
  get(url, params) {
    return service({
      method: "get",
      url,
      params
    });
  }
};
