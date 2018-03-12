import _ from 'lodash'

export default {
  getTreeData: state => {
    return _.cloneDeep(state.tree.data)
  },
  getRawTreeData: state => {
    return _.cloneDeep(state.tree.raw)
  },
  getCoreVariableColumns: state => {
    return _.cloneDeep(state.variables.columns)
  },
  getCoreVariableData: state => {
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
  }
}
