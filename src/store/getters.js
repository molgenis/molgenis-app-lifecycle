import _ from 'lodash'

export default {
  getTreeData: state => {
    return _.cloneDeep(state.tree.data)
  }
}
