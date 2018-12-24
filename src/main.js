import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/base.less'
import axios from 'axios'
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

Vue.use(ElementUI)
Vue.config.productionTip = false
axios.interceptors.request.use(
  function(config) {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    return Promise.reject(error)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
