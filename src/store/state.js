export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

export default{
  tree: {
    settings: {
      'id': 'key',
      'label': 'title',
      'folderIcon': '',
      'leafIcon': 'fa fa-file-o',
      'isOpened': true,
      'isSelected': false,
      'isDisabled': false,
      'isLoading': false
    },
    data: []
  },
  error: undefined
}
