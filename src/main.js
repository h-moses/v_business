import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import axios from "axios"
import qs from 'qs'
import 'mint-ui/lib/style.css'
import vuetify from './plugins/vuetify'
import './assets/iconfont/iconfont.css'

axios.interceptors.request.use(config => {
    // 将参数序列化成URL的形式
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
})
// 后端接口的基址
axios.defaults.baseURL = 'http://localhost:8050/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
