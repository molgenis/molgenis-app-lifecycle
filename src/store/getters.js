// @flow
import _ from 'lodash'
import type { State } from '../flow.types'

export default {
  getCoreVariablesColumns: (state: State) => {
    return _.cloneDeep(state.variables.columns)
  },
  getCoreVariablesData: (state: State) => {
    return _.cloneDeep(state.variables.data)
  },
  getCohorts: (state: State) => {
    return _.cloneDeep(state.cohorts)
  },
  getSourceVariables: (state: State) => {
    return _.cloneDeep(state.variables.source)
  }
}
