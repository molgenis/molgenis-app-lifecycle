// @flow
export type State = {
  tree: Tree,
  variables: Variables,
  cohorts: Array<Object>,
  harmonizations: Array<Object>,
  navbarLogo: string,
  error: Object,
  selectedFeature: string
}

export type Tree = {
  settings: TreeSettings,
  data: Array<Object>,
  raw: Array<Object>
}

export type TreeSettings = {
  id: string,
  label: string,
  folderIcon: string,
  leafIcon: string,
  isOpened: boolean,
  isSelected: boolean,
  isLoading: boolean
}

export type Variables = {
  columns: Array<Object>,
  data: Array<Object>,
  source: Array<Object>
}
