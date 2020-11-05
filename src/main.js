import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import toast from '@components/common/toast/index'
import FastClick from 'fastclick'


Vue.config.productionTip = false


Vue.prototype.$bus = new Vue();//用于发射和监听事件的总线
Vue.use(toast);

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')