/*
 * @Date: 2020-09-22 11:10:44
 * @Author: liangzhanpeng
 * @LastEditors: liangzhanpeng
 */
const configBaseUrl = "http://120.79.36.25:8080";
window.config = {
  originWebRoot: configBaseUrl,
  DevBaseUrl: configBaseUrl,
  gatewayUrl: configBaseUrl + "/apigateway",
  webRoot: configBaseUrl + "/apigateway" + "/backendservice",
  openapiclientUrl: configBaseUrl + "/apigateway" + "/openapiservice",
  clientRoot: configBaseUrl + "/apigateway" + "/dataportalservice",
  taskManagmentUrl: configBaseUrl + "/apigateway" + "/xxljob/",
  modelUrl: configBaseUrl + "/backendclient_map/#/",
  dataManageWebRoots: configBaseUrl + "/service3", //代表datamanage数据资源
  imgRoot: configBaseUrl + "/service/file", //移动端文件路径
  navConfig: [
    {
      key: "resourceManagement",
      name: "资源管理",
      iconName: "user-outlined",
      children: [
        {
          key: "dataResource",
          name: "数据资源"
        },
        {
          key: "dataServices",
          name: "数据服务"
        }
      ]
    },
    {
      key: "systemConfiguration",
      name: "系统配置",
      iconName: "user-outlined",
      children: [
        {
          key: "organization",
          name: "组织机构"
        }
      ]
    }
  ],
};
