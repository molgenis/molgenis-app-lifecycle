export const SET_TREE_DATA = '__SET_TREE_DATA__'
export const SET_ERROR = '__SET_ERROR__'

export default {
  [SET_TREE_DATA] (state, data) {
    state.tree.data = data
  },
  [SET_ERROR] (state, error) {
    state.error = error
  }
}
