import 'intersection-observer'
import Vue from 'vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(BootstrapVue)
Vue.use(VueObserveVisibility)

sync(store, router)

export default new Vue({
  el: '#app',
  store,
  router,
  template: '<App />',
  components: {App}
})
