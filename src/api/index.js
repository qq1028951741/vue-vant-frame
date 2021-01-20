import $axios from "./request";

// 用户登录
export function login(data) {
  const url = "web/user/pwdLogin";
  return $axios.post(url, data);
}

// 用户注册
export function register(data = {}) {
  const url = "web/user/registered";
  return $axios.post(url, data);
}
