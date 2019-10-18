## Axios 常用配置
``` js
import axios from "axios";
import Vue from 'vue'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

Vue.prototype.$http = axios

export default axios;
```