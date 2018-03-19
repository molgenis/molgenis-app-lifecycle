import Vue from 'vue'
import Router from 'vue-router'
import LifeCycleCatalogue from '@/components/LifeCycleCatalogue'
import HarmonizationComparison from '@/components/harmonization/HarmonizationComparison'

Vue.use(Router)

export default new Router({
  props: true,
  routes: [
    {
      path: '/',
      component: LifeCycleCatalogue
    },
    {
      path: '/:variable',
      component: LifeCycleCatalogue
    },
    {
      path: '/:variable/:harmonization',
      name: 'harmonization',
      component: HarmonizationComparison
    }
  ]
})
