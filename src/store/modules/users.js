import { getToken } from "utils/auth";

let userInfo = localStorage.getItem("userInfo");
export default {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  },
  getters: {
    userPhone(state) {
      return state.userInfo.userPhone || " - ";
    },
    userEmail(state) {
      return state.userInfo.userEmail || " - ";
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    UPDATE_USERINFO(state, { key, value }) {
      state.userInfo = { ...state.userInfo, [key]: value };
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    }
  },
  actions: {}
};
