export const SET_TREE_DATA = '__SET_TREE_DATA__'
export const SET_RAW_TREE_DATA = '__SET_RAW_TREE_DATA__'
export const SET_CORE_VARIABLE_COLUMNS = '__SET_CORE_VARIABLE_COLUMNS__'
export const SET_CORE_VARIABLE_DATA = '__SET_CORE_VARIABLE_DATA__'
export const SET_COHORT_DATA = '__SET_COHORT_DATA__'
export const SET_HARMONIZATION_DATA = '__SET_HARMONIZATION_DATA__'

export const SET_ERROR = '__SET_ERROR__'

export default {
  [SET_TREE_DATA] (state, data) {
    state.tree.data = data
  },
  [SET_RAW_TREE_DATA] (state, rawData) {
    state.tree.raw = rawData
  },
  [SET_CORE_VARIABLE_COLUMNS] (state, columns) {
    state.variables.columns = columns
  },
  [SET_CORE_VARIABLE_DATA] (state, data) {
    state.variables.data = data
  },
  [SET_COHORT_DATA] (state, data) {
    state.cohorts = data
  },
  [SET_HARMONIZATION_DATA] (state, data) {
    state.harmonizations = data
  },
  [SET_ERROR] (state, error) {
    state.error = error
  }
}
