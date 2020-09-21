/*
 * @Date: 2020-09-16 11:34:57
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
 */
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    // svgRule.use('vue-svg-loader').loader('vue-svg-loader');
    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
