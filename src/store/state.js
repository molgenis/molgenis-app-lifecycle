export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

export default{
  tree: {
    settings: {
      'id': 'key',
      'label': 'title',
      'folderIcon': '',
      'leafIcon': 'fa fa-table',
      'isOpened': true,
      'isSelected': false,
      'isDisabled': false,
      'isLoading': false
    },
    data: [],
    raw: []
  },
  variables: {
    columns: [],
    data: [],
    source: []
  },
  cohorts: [],
  harmonizations: [],
  navbarLogo: '',
  error: undefined
}
