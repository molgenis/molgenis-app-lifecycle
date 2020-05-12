// @flow
import api from '@molgenis/molgenis-api-client'
import sortArray from '../util/sortArray'
/* Mappers */
import mapEntitiesToTreeMenu from '../mappers/entitiesToTreeMenuMapper'

/* Flow types */
import type { VuexContext } from '../flow.types'

const variablesCache = {}

export default {
  'FETCH_COHORTS' ({commit}: VuexContext) {
    api.get('/api/v2/LifeCycle_Cohorts?num=10000').then(response => {
      commit('SET_COHORTS', response.items.map(item => item.id))
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  'FETCH_HARMONIZATION' ({commit}: VuexContext, id: string) {
    // Fetches a single harmonization
    api.get('/api/v2/LifeCycle_Harmonizations/' + id + '?attrs=*,sources(*),target(*)').then(response => {
      commit('SET_HARMONIZATION', response)
      commit('SET_HARMONIZATION_METADATA', response._meta)
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  async 'FETCH_SELECTED_NODE' ({commit}: VuexContext, node) {
    commit('NODE_LOADING', {node, loading: true})
    if (!variablesCache[node.id]) {
      const {variables} = await api.get(`/api/v2/UI_Menu/${node.id}?attrs=key,title,parent(key),variables(variable,label,datatype,values,unit,match,comments,harmonizations(~id,cohort(id,label),status(id,label))),children(key),position`)
      variablesCache[node.id] = sortArray(variables, 'variable')
    }

    commit('SET_SELECTED_NODE', {node, variables: variablesCache[node.id]})
    commit('NODE_LOADING', {node, loading: false})
  },

  async 'FETCH_TREE_MENU' ({commit}: VuexContext, selectedNodeId?: string) {
    let menuItems, metaItems

    [{items: menuItems}, {meta: metaItems}] = await Promise.all([
      api.get('/api/v2/UI_Menu?attrs=key,title,parent(key),children(key),position&num=10000'),
      api.get('/api/v2/UI_Menu?attrs=key,title,parent(key),variables(variable,label,datatype,values,unit,match,comments,harmonizations(~id,cohort(id,label),status(id,label))),children(key),position&num=1')
    ])

    commit('SET_TREE_MENU', mapEntitiesToTreeMenu(menuItems, selectedNodeId))
    commit('SET_VARIABLE_METADATA', metaItems.attributes.find(it => it.name === 'variables').refEntity.attributes)
  }
}
