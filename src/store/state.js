// @flow
import type { State } from '../flow.types'

export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state: State = {
  tree: {
    settings: {
      id: 'key',
      label: 'title',
      folderIcon: '',
      leafIcon: 'fa fa-table',
      isOpened: true,
      isSelected: false,
      isLoading: false
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
  error: {},
  selectedFeature: ''
}

export default state
