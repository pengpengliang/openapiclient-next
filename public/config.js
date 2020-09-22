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
};
