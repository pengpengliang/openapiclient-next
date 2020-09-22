/*
 * @Date: 2020-09-15 16:52:51
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
const app = createApp(App);
app.config.globalProperties.foo = "bar";
app.use(store);
app.use(router);
app.use(Antd);
app.mount("#app");
