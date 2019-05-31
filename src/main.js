import 'intersection-observer'
import Vue from 'vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueObserveVisibility from 'vue-observe-visibility'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.use(BootstrapVue)
Vue.use(VueObserveVisibility)
Vue.use(VueVirtualScroller)

sync(store, router)

export default new Vue({
  el: '#app',
  store,
  router,
  template: '<App />',
  components: {App}
})
