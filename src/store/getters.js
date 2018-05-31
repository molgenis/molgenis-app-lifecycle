// @flow
import type { LifeCycleState } from '../flow.types'
import mapEntitiesToCohortVariableMapping from '../mappers/entitiesToCohortVariableMappingMapper'
import mapEntitiesToHarmonizationTable from '../mappers/entitiesToHarmonizationTableMapper'

export default {
  getCohortVariableMapping: (state: LifeCycleState) => {
    return mapEntitiesToCohortVariableMapping(state.harmonizationData)
  },

  getHarmonizationTable: (state: LifeCycleState) => {
    return mapEntitiesToHarmonizationTable(state.harmonizationData)
  },

  getCoreVariablesColumns: (state: LifeCycleState) => {
    return state.variables.columns
  },

  getCoreVariablesData: (state: LifeCycleState) => {
    return state.variables.data
  }
}
