import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局配置 
import './assets/scss/reset.scss'
import ElementUI from '_element-ui@2.15.1@element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import http from '@/api/config'
import './mock'

require('./mock/index.js')

Vue.config.productionTip = false

Vue.use(ElementUI);

// 把axios赋给vue原型的http
Vue.prototype.$http = axios
    // 把全局url地址写在这
    // axios.defaults.baseURL = 'http://127.0.0.1:3333'
Vue.use(axios)

// 封装axios
Vue.prototype.$http = http

new Vue({
        router, // 路由 相当于 router:router
        store, // vuex
        render: h => h(App) // render:function(createElement){return createElement(App)} createElement是个参数
    }).$mount('#app') // 挂载app，挂载在public/index.html 下的<div id="app"></div>