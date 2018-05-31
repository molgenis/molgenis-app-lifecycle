// @flow
import type { LifeCycleState } from '../flow.types'

export default {
  getCoreVariablesColumns: (state: LifeCycleState) => {
    return state.variables.columns
  },

  getCoreVariablesData: (state: LifeCycleState) => {
    return state.variables.data
  },

  getCohorts: (state: LifeCycleState) => {
    return state.cohorts
  },

  getSourceVariables: (state: LifeCycleState) => {
    return state.variables.source
  }
}
