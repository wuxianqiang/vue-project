import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/css/reset'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})