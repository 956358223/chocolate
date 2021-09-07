import axios from 'axios'
import store from "./store";
import {Message} from 'element-ui'

window.baseURL = '/api'

const http = axios.create({baseURL: baseURL})

/**
 * 请求拦截
 * 设置令牌
 */
http.interceptors.request.use((request) => {
    if (store.state.principals.token)
        request.headers.Authorization = store.state.principals.token
    return request;
}, () => {
    Message.error({message: '(⊙﹏⊙)，请求超时！'})
})
/**
 * 响应拦截
 * 处理状态
 */
http.interceptors.response.use(response => {
    if (response && response.status === 200) {
        if (response.data.status === 401) {
            window.localStorage.clear()
            window.location.href = '/login'
        } else if (response.data.status && response.data.status != 200) {
            Message.error({message: response.data.message})
        }
    } else Message.error({message: response.data.message})
    return response;
}, error => {
    if (error.message.indexOf(500) != -1) Message.error({message: '╮（╯＿╰）╭，服务内部错误！'})
    if (error.message.indexOf(400) != -1) Message.error({message: '╮（╯＿╰）╭，请求方法错误！'})
})

export default http