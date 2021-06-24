import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import axios from "axios"
import qs from 'qs'
import 'mint-ui/lib/style.css'
import vuetify from './plugins/vuetify'
import './assets/iconfont/iconfont.css'

axios.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
})
axios.defaults.baseURL = 'http://121.40.194.115:8050/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
