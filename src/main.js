import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import router from "./router/router.js"
import store from "./store/store.js"


Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')