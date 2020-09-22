/*
 * @Date: 2020-09-15 16:52:51
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
 */
declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "*.svg" {
  import Vue, { VueConstructor } from "vue";
  const content: VueConstructor<Vue>;
  export default content;
}

interface ConfigObj {
  originWebRoot: string;
  DevBaseUrl: string;
  gatewayUrl: string;
  webRoot: string;
  openapiclientUrl: string;
  clientRoot: string;
  taskManagmentUrl: string;
  modelUrl: string;
  dataManageWebRoots: string;
  imgRoot: string;
}

declare interface Window {
  config: ConfigObj;
}
