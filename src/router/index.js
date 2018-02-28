import Vue from 'vue'
import Router from 'vue-router'
import LifeCycleCatalogue from '@/components/LifeCycleCatalogue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LifeCycleCatalogue',
      component: LifeCycleCatalogue
    }
  ]
})
