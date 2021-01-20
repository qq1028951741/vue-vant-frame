/*
 * @Author: zyf
 * @Date: 2020-04-15 10:57:44
 * @Last Modified by:   zyf
 * @Last Modified time: 2020-04-15 10:57:44
 */

const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};

// vue.config.js
module.exports = {
  publicPath: "./",
  lintOnSave: process.env.NODE_ENV !== "production",
  //   设置别名
  chainWebpack: config => {
    config.resolve.alias
      .set("styles", resolve("src/styles"))
      .set("views", resolve("src/views"))
      .set("components", resolve("src/components"))
      .set("api", resolve("src/api"))
      .set("store", resolve("src/store"))
      .set("router", resolve("src/router"))
      .set("assets", resolve("src/assets"))
      .set("utils", resolve("src/utils"))
      .set("setting", resolve("src/setting"));
  },
  css: {
    //   varibles mixin 全局注入
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/variables.scss";@import "~@/styles/mixin.scss";`
      }
    }
  }
};
