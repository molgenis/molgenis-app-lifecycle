// @flow
import api from '@molgenis/molgenis-api-client'

import {
  SET_CORE_VARIABLE_COLUMNS,
  SET_CORE_VARIABLE_DATA,
} from './mutations'

import type { VuexContext } from '../flow.types'

/* Mappers */
import mapEntitiesToTreeMenu from '../mappers/entitiesToTreeMenuMapper'
import EntityToCoreVariableMapper from '../util/EntityToCoreVariableMapper'

/* Utilities */
import sortArray from '../util/sortArray'

export default {
  'FETCH_COHORTS' ({commit}: VuexContext) {
    api.get('/api/v2/LifeCycle_Cohorts?num=10000').then(response => {
      commit('SET_COHORTS', response.items.map(item => item.id))
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  'FETCH_CORE_VARIABLES' ({commit}: VuexContext, variables: string) {
    api.get('/api/v2/LifeCycle_CoreVariables?q=variable=in=(' + variables + ')&num=10000').then(response => {
      commit(SET_CORE_VARIABLE_COLUMNS, EntityToCoreVariableMapper.generateColumns(response.meta.attributes))
      commit(SET_CORE_VARIABLE_DATA, sortArray(response.items, 'variable'))
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  // TODO Make flow type for Tree Node object
  'FETCH_DATA_FOR_SELECTED_NODE' ({commit, dispatch}: VuexContext, selectedNode: Object) {
    const variables = selectedNode.variables.map(variable => variable.variable).join(',')
    dispatch('FETCH_CORE_VARIABLES', variables)
    dispatch('FETCH_HARMONIZATIONS', variables)
    commit('SET_SELECTED_NODE', selectedNode)
  },

  'FETCH_HARMONIZATIONS' ({commit}: VuexContext, variables: string) {
    api.get('/api/v2/LifeCycle_Harmonizations?q=target=in=(' + variables + ')&attrs=*,sources(*)&num=10000').then(response => {
      commit('SET_HARMONIZATION_DATA', response.items)
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  'FETCH_HARMONIZATIONS_BY_ID' ({commit}: VuexContext, id: string) {
    api.get('/api/v2/LifeCycle_Harmonizations/' + id + '?attrs=*,sources(*),target(*)&num=10000').then(response => {
      commit('SET_HARMONIZATION_DATA', [response])
    }, error => {
      commit('SET_ERROR', error)
    })
  },

  'FETCH_TREE_MENU' ({commit}: VuexContext, selectedNodeId?: string) {
    api.get('/api/v2/UI_Menu?num=10000').then(response => {
      commit('SET_TREE_MENU', mapEntitiesToTreeMenu(response.items, selectedNodeId))
    }, error => {
      commit('SET_ERROR', error)
    })
  }
}
