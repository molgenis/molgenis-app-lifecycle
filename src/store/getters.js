import _ from 'lodash'

export default {
  getTreeData: state => {
    return _.cloneDeep(state.tree.data)
  },
  getRawTreeData: state => {
    return _.cloneDeep(state.tree.raw)
  },
  getCoreVariablesColumns: state => {
    return _.cloneDeep(state.variables.columns)
  },
  getCoreVariablesData: state => {
    return _.cloneDeep(state.variables.data)
  },
  getCohorts: state => {
    return _.cloneDeep(state.cohorts)
  },
  getHarmonizations: state => {
    return _.cloneDeep(state.harmonizations)
  },
  getSourceVariables: state => {
    return _.cloneDeep(state.variables.source)
  },
  getSelectedFeature: state => {
    return state.selectedFeature
  }
}
