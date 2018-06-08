import Vue from 'vue'
import Router from 'vue-router'

import LifeCycleCatalogue from '../pages/LifeCycleCatalogue'
import HarmonizationComparison from '../pages/HarmonizationComparison'

const initialState = window.__INITIAL_STATE__ || {}

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: initialState.baseUrl || '/',
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
