import axios from "axios";

// 创建axios实例
export const service = axios.create({
    baseURL: `http://120.55.112.13:8002/`,
    timeout: 20000, // 超时时间
    withCredentials: true, // 是否允许带cookie
});

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        config.headers['Access-Control-Allow-Origin'] = '*';
        const token = window.localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 添加响应拦截器
service.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default service;