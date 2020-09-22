/*
 * @Date: 2020-09-22 13:54:55
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
 */
import router from "@/router";
import Config from "@/common/config";
import Axios from "axios";
Axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
Axios.defaults.withCredentials = true;

Axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    // 请求失败的处理
    return Promise.reject(error);
  }
);

// 响应拦截（配置请求回来的信息）
Axios.interceptors.response.use(
  function(response) {
    // 处理响应数据
    return response;
  },
  function(error) {
    // 处理响应失败
    if (error.response.status == 401) {
      router.replace("/login");
    } else if (error.response.status == 403) {
      router.replace("/login");
    }

    return Promise.reject(error);
  }
);

if (location.hash !== "/login") {
  Axios.get(
    Config.gatewayUrl + "/backendservice/user/authenticatedCheck"
  ).catch(res => {
    if (res.response.status === 401) {
      router.replace("/login");
    }
  });
}
