import Vue from 'vue'
import App from './App'
import Vant from "vant";
import { Notify } from 'vant';
import './uni.promisify.adaptor'

import 'vant/lib/index.css';

import store from './store'

// 注册VantCss框架
Vue.use(Vant)
// 注册Vant同意消息提示组件
Vue.use(Notify);
Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store

const app = new Vue({
  store,
  ...App
})
app.$mount()
