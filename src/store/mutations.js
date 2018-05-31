// @flow
import type { LifeCycleState } from '../flow.types'

export const SET_CORE_VARIABLE_COLUMNS = '__SET_CORE_VARIABLE_COLUMNS__'
export const SET_CORE_VARIABLE_DATA = '__SET_CORE_VARIABLE_DATA__'
export const SET_NAVBAR_LOGO = '__SET_NAVBAR_LOGO__'
export const SET_ERROR = '__SET_ERROR__'

export default {
  'SET_COHORTS' (state: LifeCycleState, cohorts: Array<String>) {
    state.cohorts = cohorts
  },

  'SET_HARMONIZATION_DATA' (state: LifeCycleState, harmonizationData: Array<Object>) {
    state.harmonizationData = harmonizationData
  },

  'SET_SELECTED_NODE' (state: LifeCycleState, selectedNode: Object) {
    state.selectedNodeLabel = selectedNode.value
    state.selectedNodeVariables = selectedNode.variables
  },

  'SET_TREE_MENU' (state: LifeCycleState, treeMenu: Array<Object>) {
    state.treeMenu = treeMenu
  },

  [SET_CORE_VARIABLE_COLUMNS] (state: LifeCycleState, columns: Array<String>) {
    state.variables.columns = columns
  },
  [SET_CORE_VARIABLE_DATA] (state: LifeCycleState, data: Array<String>) {
    state.variables.data = data
  },
  [SET_ERROR] (state: LifeCycleState, error: string) {
    state.error = error
  },
  [SET_NAVBAR_LOGO] (state: LifeCycleState, logo: string) {
    state.navbarLogo = logo
  }
}
