// @flow
/* Utilities */

/* Flow types */
import type { LifeCycleState } from '../flow.types'

export default {
  'SET_COHORTS' (state: LifeCycleState, cohorts: Array<String>) {
    state.cohorts = cohorts
  },

  'SET_ERROR' (state: LifeCycleState, error: string) {
    state.error = error
  },

  'SET_HARMONIZATION' (state: LifeCycleState, harmonization: Object) {
    state.harmonization = harmonization
  },

  'SET_VARIABLE_METADATA' (state: LifeCycleState, meta: Object) {
    state.variableMetadata = meta
  },

  'SET_HARMONIZATION_METADATA' (state: LifeCycleState, harmonizationMetadata: Object) {
    state.harmonizationMetadata = harmonizationMetadata
  },

  'SET_SELECTED_NODE' (state: LifeCycleState, {node, variables}) {
    node.variables = variables
    node.disabled = (variables.length === 0)
    state.selectedNodeLabel = node.value
    state.selectedNodeVariables = variables
  },

  'SET_TREE_MENU' (state: LifeCycleState, treeMenu: Array<Object>) {
    state.treeMenu = treeMenu
  },

  'NODE_LOADING' (state: LifeCycleState, {node, loading}) {
    node.loading = loading
  }
}
