import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import type { LifeCycleState } from '../flow.types'

const state: LifeCycleState = {
  /**
   * A list of cohort identifiers
   */
  cohorts: [],

  /**
   * Application error string, used to show errors throughout the app
   */
  error: '',

  /**
   * Contains harmonization entities based on the core variables of the selected tree node
   */
  harmonizationData: [],

  /**
   * The label of the selected node from the tree menu
   */
  selectedNodeLabel: '',

  /**
   * The list of variables of the selected node from the tree menu
   */
  selectedNodeVariables: [],

  /**
   * An array of tree nodes which build up the tree menu
   */
  treeMenu: [],

  // Old
  variables: {
    columns: [],
    data: []
  }
}

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  strict: process.env.NODE_ENV !== 'production'
})
