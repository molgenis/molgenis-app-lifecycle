import Vue from 'vue'
import store from './store'
import Router from 'vue-router'

import App from './App.vue'

const router = new Router({
  routes: [
    {
      path: '/',
      component: App
    }
  ]
})
export default new Vue({
  el: '#app',
  store,
  router,
  template: '<App />',
  components: {App}
})
