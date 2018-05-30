import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import type { State } from '../flow.types'

const state: State = {
  cohorts: [],
  harmonizationTableData: {},
  selectedNode: null,
  treeMenu: [],

  // Old
  variables: {
    columns: [],
    data: [],
    source: []
  },
  navbarLogo: '',
  error: ''
}

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  strict: process.env.NODE_ENV !== 'production'
})
