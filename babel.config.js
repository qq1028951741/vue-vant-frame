module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  //   vant 组件按需引入
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
