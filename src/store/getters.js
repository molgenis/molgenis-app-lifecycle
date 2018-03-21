// @flow
import _ from 'lodash'
import type { State } from '../flow.types'

export default {
  getTreeData: (state: State) => {
    return _.cloneDeep(state.tree.data)
  },
  getRawTreeData: (state: State) => {
    return _.cloneDeep(state.tree.raw)
  },
  getCoreVariablesColumns: (state: State) => {
    return _.cloneDeep(state.variables.columns)
  },
  getCoreVariablesData: (state: State) => {
    return _.cloneDeep(state.variables.data)
  },
  getCohorts: (state: State) => {
    return _.cloneDeep(state.cohorts)
  },
  getHarmonizations: (state: State) => {
    return _.cloneDeep(state.harmonizations)
  },
  getSourceVariables: (state: State) => {
    return _.cloneDeep(state.variables.source)
  },
  getSelectedFeature: (state: State) => {
    return state.selectedFeature
  }
}
