// @flow
import type { LifeCycleState } from '../flow.types'
import mapEntitiesToCohortVariableMapping from '../mappers/entitiesToCohortVariableMappingMapper'
import mapEntitiesToHarmonizationTable from '../mappers/entitiesToHarmonizationTableMapper'

export default {
  /**
   * A map containing a mapping between cohorts, variables, and their respective identifiers in the LifeCycle_Harmonization table
   */
  getCohortVariableMapping: (state: LifeCycleState) => {
    return mapEntitiesToCohortVariableMapping(state.harmonizationData)
  },

  /**
   * A key value map containing a cohort as key and a list of mapped core variables as value
   */
  getHarmonizationTable: (state: LifeCycleState) => {
    return mapEntitiesToHarmonizationTable(state.harmonizationData)
  },

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
