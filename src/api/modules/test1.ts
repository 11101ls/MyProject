// import { request } from "@/utils/request";
// // // 
// export const getData = () => request({
//   url: '/getMenu',
//   method: 'get',
// });
export { };

import axios, { AxiosRequestConfig } from 'axios';
interface GetMenu {

}
// 泛型接口
interface IResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}


const instane = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_URL,

});
// 请求拦截器
instane.interceptors.request.use((config) => {
  // console.log(config, "12321");
  return config;
});
// 响应拦截器
instane.interceptors.response.use((res) => {
  console.log(res, "res");

});
export const getData = () => instane({ url: '/getMenu', params: { name: "name" }, data: [1, 2, 3] }).then((res) => { return res.data; });
export const login = () => instane({ url: '/login', method: 'post', params: { name: "name" }, data: [1, 2, 3] }).then((res) => console.log(res)
);