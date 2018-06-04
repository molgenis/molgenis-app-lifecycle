import Vue from 'vue'
import Router from 'vue-router'

import LifeCycleCatalogue from '../pages/LifeCycleCatalogue'
import HarmonizationComparison from '../pages/HarmonizationComparison'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: window.__INITIAL_STATE__.baseUrl || '/',
  routes: [
    {
      path: '/',
      component: LifeCycleCatalogue
    },
    {
      path: '/:selectedNodeId',
      component: LifeCycleCatalogue,
      props: true
    },
    {
      path: '/:selectedNodeId/:harmonizationId',
      component: HarmonizationComparison,
      props: true
    }
  ]
})
