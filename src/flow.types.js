// @flow
export type LifeCycleState = {
  cohorts: Array<Object>,
  error: string,
  harmonizationData: Array<Object>,
  harmonizationMetadata: Object,
  selectedNodeLabel: string,
  selectedNodeVariables: Array<Object>,
  treeMenu: Array<Object>
}

export type VuexContext = {
  commit: Function,
  dispatch: Function,
  getters: Function,
  state: LifeCycleState
}
