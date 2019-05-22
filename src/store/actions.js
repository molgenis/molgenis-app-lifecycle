// @flow
import api from '@molgenis/molgenis-api-client'

/* Mappers */
import mapEntitiesToTreeMenu from '../mappers/entitiesToTreeMenuMapper'

/* Flow types */
import type { VuexContext } from '../flow.types'

export default {
  'FETCH_COHORTS' ({commit}: VuexContext) {
    api.get('/api/v2/LifeCycle_Cohorts?num=10000').then(response => {
      commit('SET_COHORTS', response.items.map(item => item.id))
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  'FETCH_HARMONIZATIONS_BY_ID' ({commit}: VuexContext, id: string) {
    // Expand target to include the core variable data
    api.get('/api/v2/LifeCycle_Harmonizations/' + id + '?attrs=*,sources(*),target(*)&num=10000').then(response => {
      commit('SET_HARMONIZATION_DATA', [response])
      commit('SET_HARMONIZATION_METADATA', response._meta)
    }, error => {
      commit('SET_ERROR', error)
    })
  },
  'FETCH_TREE_MENU' ({commit}: VuexContext, selectedNodeId?: string) {
    // Expand variables to include the core variable data and harmonizations
    api.get('/api/v2/UI_Menu?attrs=key,title,parent(key),variables(variable,label,datatype,values,unit,match,comments,harmonizations(~id,cohort(id,label),status(id,label))),children(key),position&num=10000').then(response => {
      commit('SET_TREE_MENU', mapEntitiesToTreeMenu(response.items, selectedNodeId))
      commit('SET_VARIABLE_METADATA',
        response.meta.attributes.find(it => it.name === 'variables').refEntity.attributes)
    }, error => {
      commit('SET_ERROR', error)
    })
  }
}
