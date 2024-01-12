import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'

import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store

const app = new Vue({
  store,
  ...App
})
app.$mount()
