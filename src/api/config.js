import axios from 'axios'

// 创建axios实例
const service = axios.create({
    // 请求超时时间
    timeout: 3000,
})

console.log("axios", service.interceptor)

// 请求拦截器
// interceptor拦截器
service.interceptors.request.use(
    // 获取请求头、请求参数
    config => {
        return config
    },
    err => {
        console.log(err)
    }
)

// 相应拦截器
service.interceptors.response.use(
    // 获取相应参数
    response => {
        let res = {}
            // 相应拦截器
        res.status = response.status
        res.data = response.data
        return res
    }, err => console.log(err)
)

export default service