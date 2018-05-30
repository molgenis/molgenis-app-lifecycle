// @flow
import type { State } from '../flow.types'

export const SET_TREE_DATA = '__SET_TREE_DATA__'
export const SET_CORE_VARIABLE_COLUMNS = '__SET_CORE_VARIABLE_COLUMNS__'
export const SET_CORE_VARIABLE_DATA = '__SET_CORE_VARIABLE_DATA__'
export const SET_SOURCE_VARIABLES = '__SET_SOURCE_VARIABLES__'
export const SET_COHORT_DATA = '__SET_COHORT_DATA__'
export const SET_HARMONIZATION_DATA = '__SET_HARMONIZATION_DATA__'
export const SET_NAVBAR_LOGO = '__SET_NAVBAR_LOGO__'
export const SET_SELECTED_FEATURE = '__SET_SELECTED_FEATURE__'
export const SET_ERROR = '__SET_ERROR__'

export default {
  'SET_HARMONIZATION_TABLE_DATA' (state: State, harmonizationTableData: Object) {
    state.harmonizationTableData = harmonizationTableData
  },

  [SET_TREE_DATA] (state: State, data: Array<String>) {
    state.tree.data = data
  },
  [SET_CORE_VARIABLE_COLUMNS] (state: State, columns: Array<String>) {
    state.variables.columns = columns
  },
  [SET_CORE_VARIABLE_DATA] (state: State, data: Array<String>) {
    state.variables.data = data
  },
  [SET_SOURCE_VARIABLES] (state: State, sources: Array<String>) {
    state.variables.source = sources
  },
  [SET_COHORT_DATA] (state: State, data: Array<String>) {
    state.cohorts = data
  },
  [SET_HARMONIZATION_DATA] (state: State, data: Array<String>) {
    state.harmonizations = data
  },
  [SET_ERROR] (state: State, error: string) {
    state.error = error
  },
  [SET_NAVBAR_LOGO] (state: State, logo: string) {
    state.navbarLogo = logo
  },
  [SET_SELECTED_FEATURE] (state: State, feature: string) {
    state.selectedFeature = feature
  }
}
