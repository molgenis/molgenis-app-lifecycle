// @flow
import type { LifeCycleState } from '../flow.types'
import mapEntitiesToCohortVariableMapping from '../mappers/entitiesToCohortVariableMappingMapper'
import mapEntitiesToHarmonizationTable from '../mappers/entitiesToHarmonizationTableMapper'
import mapMetadataToCoreVariableFields from '../mappers/metadataToCoreVariableFieldsMapper'

export default {
  getCohortVariableMapping: (state: LifeCycleState) => {
    return mapEntitiesToCohortVariableMapping(state.harmonizationData)
  },

  getCoreVariableFields: (state: LifeCycleState) => {
    return mapMetadataToCoreVariableFields(state.harmonizationMetadata)
  },

  getHarmonizationTable: (state: LifeCycleState) => {
    return mapEntitiesToHarmonizationTable(state.harmonizationData)
  },

  getSelectedHarmonization: (state: LifeCycleState) => {
    return state.harmonizationData[0]
  }
}
