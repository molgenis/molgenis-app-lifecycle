// @flow
export type Variables = {
  columns: Array<Object>,
  data: Array<Object>,
  source: Array<Object>
}

export type LifeCycleState = {
  cohorts: Array<Object>,
  harmonizationTableData: Object,
  selectedNodeLabel: string,
  selectedNodeVariables: Array<Object>,
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
  state: LifeCycleState
}
