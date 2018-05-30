// @flow
import api from '@molgenis/molgenis-api-client'

import {
  SET_TREE_DATA,
  SET_ERROR,
  SET_CORE_VARIABLE_COLUMNS,
  SET_CORE_VARIABLE_DATA,
  SET_COHORT_DATA,
  SET_HARMONIZATION_DATA,
  SET_SOURCE_VARIABLES,
  SET_NAVBAR_LOGO
} from './mutations'

import type { VuexContext } from '../flow.types'

import EntityToCoreVariableMapper from '../util/EntityToCoreVariableMapper'
import sortArray from '../util/sort-array'

import mapEntitiesToHarmonizationTable from '../mappers/entitiesToHarmonizationTableMapper'
import mapEntitiesToTreeMenu from '../mappers/entitiesToTreeMenuMapper'

/* ACTION CONSTANTS */
export const GET_TREE_DATA = '__GET_TREE_DATA__'
export const GET_CORE_VARIABLES = '__GET_CORE_VARIABLES__'
export const GET_COHORTS = '__GET_COHORTS__'
export const GET_HARMONIZATIONS = '__GET_HARMONIZATIONS__'
export const GET_SOURCE_VARIABLES = '__GET_SOURCE_VARIABLES__'
export const GET_NAVBAR_LOGO = '__GET_NAVBAR_LOGO__'

export default {
  'FETCH_CORE_VARIABLES' ({commit}: VuexContext, variables: string) {
    api.get('/api/v2/LifeCycle_CoreVariables?q=variable=in=(' + variables + ')').then(response => {
      commit(SET_CORE_VARIABLE_COLUMNS, EntityToCoreVariableMapper.generateColumns(response.meta.attributes))
      commit(SET_CORE_VARIABLE_DATA, sortArray(response.items, 'variable'))
    }, error => {
      commit(SET_ERROR, error)
    })
  },

  // TODO Make flow type for Tree Node object
  'FETCH_DATA_FOR_SELECTED_NODE' ({commit, dispatch}: VuexContext, node: Object) {
    const variables = node.model.variables.map(variable => variable.variable).join(',')
    dispatch('FETCH_CORE_VARIABLES', variables)
    dispatch('FETCH_HARMONIZATIONS', variables)
  },

  'FETCH_HARMONIZATIONS' ({commit}: VuexContext, variables: string) {
    api.get('/api/v2/LifeCycle_Harmonizations?q=target=in=(' + variables + ')').then(response => {
      commit('SET_HARMONIZATION_TABLE_DATA', mapEntitiesToHarmonizationTable(response.items))
    }, error => {
      commit(SET_ERROR, error)
    })
  },

  [GET_TREE_DATA] ({state, commit}: VuexContext) {
    api.get('/api/v2/UI_Menu').then(response => {
      commit(SET_TREE_DATA, mapEntitiesToTreeMenu(response.items))
    }, error => {
      commit(SET_ERROR, error)
    })
  },

  [GET_CORE_VARIABLES] ({state, commit}: VuexContext, variables: string) {
    api.get('/api/v2/LifeCycle_CoreVariables?q=variable=in=(' + variables + ')').then(response => {
      commit(SET_CORE_VARIABLE_COLUMNS, EntityToCoreVariableMapper.generateColumns(response.meta.attributes))
      commit(SET_CORE_VARIABLE_DATA, sortArray(response.items, 'variable'))
    }, error => {
      commit(SET_ERROR, error)
    })
  },

  [GET_COHORTS] ({state, commit}: VuexContext) {
    api.get('/api/v2/LifeCycle_Cohorts').then(response => {
      commit(SET_COHORT_DATA, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },

  [GET_HARMONIZATIONS] ({state, commit, dispatch}: VuexContext, harmonization: string) {
    api.get('/api/v2/LifeCycle_Harmonizations/' + harmonization).then(response => {
      commit(SET_HARMONIZATION_DATA, response)
      dispatch(GET_SOURCE_VARIABLES, response.sources)
    }, error => {
      commit(SET_ERROR, error)
    })
  },

  [GET_SOURCE_VARIABLES] ({state, commit}: VuexContext, sourceVariables: Array<Object>) {
    const variables = sourceVariables.map(sourceVariable => sourceVariable.variable).join(',')
    api.get('/api/v2/LifeCycle_SourceVariables?q=variable=in=(' + variables + ')').then(response => {
      commit(SET_SOURCE_VARIABLES, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },

  [GET_NAVBAR_LOGO] ({state, commit}: VuexContext) {
    api.get('/api/v2/sys_set_app/app').then(response => {
      commit(SET_NAVBAR_LOGO, response.logo_href_navbar)
    }, error => {
      commit(SET_ERROR, error)
    })
  }
}
