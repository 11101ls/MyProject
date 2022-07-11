import axios from "axios";
import { showMessage } from "./status";
import { ElMessage } from 'element-plus'
// 创建实例
const service=axios.create({
  baseURL: 'https://www.fastmock.site/mock/3ab53fd47aa02d732d53bea1b4ba3990/api/',
  timeout :60000
})

service.interceptors.request.use(
  config => {
    // 配置请求头
    config.headers = {
      //'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
      'Content-Type': 'application/json;charset=UTF-8',        // 传参方式json
      'token': '80c483d59ca86ad0393cf8a98416e2a1'              // 这里自定义配置，这里传的是token
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status);           // 传入响应码，匹配响应码对应信息
      return Promise.reject(response.data);
    } else {
      ElMessage.warning('网络连接异常,请稍后再试!');
    }
  }
);


// 封装 GET POST 请求并导出
export const request = function (url = '', params = {}, type = 'POST') {
  //设置 url params type 的默认值
  return new Promise((resolve, reject) => {
    let promise;
    if (type.toUpperCase() === 'GET') {
      promise = axios({
        url,
        params
      });
    } else if (type.toUpperCase() === 'POST') {
      promise = axios({
        method: 'POST',
        url,
        data: params
      });
    }
    //处理返回
    promise?.then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}

// const service=()=>{
//   console.log(123);
  
// }