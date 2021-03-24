import Mock from 'mockjs';
import homeApi from './home'

// 设置延时 200-2000ms延时
Mock.setup({ timeout: '200-2000' })

// 首页相关,拦截home/getData
Mock.mock(/\/home\/getData/, 'post', homeApi.getHomeData)