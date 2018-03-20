import Vue from 'vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App.vue'

sync(store, router)

export default new Vue({
  el: '#app',
  store,
  router,
  template: '<App />',
  components: {App}
})
