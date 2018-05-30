// @flow
export type Variables = {
  columns: Array<Object>,
  data: Array<Object>,
  source: Array<Object>
}

export type State = {
  cohorts: Array<Object>,
  harmonizationTableData: Object,
  selectedNode: Object,
  treeMenu: Array<Object>,

  // Old
  variables: Variables,
  navbarLogo: string,
  error: string
}

export type VuexContext = {
  commit: Function,
  dispatch: Function,
  getters: Function,
  state: State
}
