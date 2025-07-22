import axios from "axios";

const httpInstance = axios.create({
    //根域名
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    //超时时间
    timeout: 5000
})

//拦截器  去官方文档找
// 添加请求拦截器 将名字替换成上边
httpInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
  
// 添加响应拦截器 替换名字
httpInstance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//导出
export default httpInstance