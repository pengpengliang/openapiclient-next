/*
 * @Date: 2020-09-29 10:41:58
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
 */
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context("./svg", false, /\.svg$/);
requireAll(req);
