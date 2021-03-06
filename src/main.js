// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)
import './assets/rem.js'
import axios from 'axios'
Vue.prototype.http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
