import { expect } from 'chai'
import mutations from '@/store/mutations'

describe('mutations', () => {
  const state = {
    cohorts: [],
    error: '',
    harmonizationData: [],
    harmonizationMetadata: {},
    selectedNodeLabel: '',
    selectedNodeVariables: [],
    treeMenu: []
  }

  describe('SET_COHORTS', () => {
    it('should set the cohorts variable in the state', () => {
      mutations.SET_COHORTS(state, ['cohort1'])
      expect(state.cohorts).to.deep.equal(['cohort1'])
    })
  })

  describe('SET_ERROR', () => {
    it('should set error message in state', () => {
      mutations.SET_ERROR(state, 'error')
      expect(state.error).to.equal('error')
    })
  })

  describe('SET_HARMONIZATION', () => {
    it('should set the harmonization data variable in the state', () => {
      mutations.SET_HARMONIZATION(state, {id: '1'})
      expect(state.harmonization).to.deep.equal({id: '1'})
    })
  })

  describe('SET_HARMONIZATION_METADATA', () => {
    it('should set the harmonization metadata variable in the state', () => {
      mutations.SET_HARMONIZATION_METADATA(state, {id: '1'})
      expect(state.harmonizationMetadata).to.deep.equal({id: '1'})
    })
  })

  describe('SET_SELECTED_NODE', () => {
    it('should set the selected node label and selected node variables variables in the state', () => {
      mutations.SET_SELECTED_NODE(state, {value: '1', variables: ['variable']})
      expect(state.selectedNodeLabel).to.equal('1')
      expect(state.selectedNodeVariables).to.deep.equal(['variable'])
    })
  })

  describe('SET_TREE_MENU', () => {
    it('should set the tree menu variable in the state', () => {
      mutations.SET_TREE_MENU(state, ['node'])
      expect(state.treeMenu).to.deep.equal(['node'])
    })
  })
})
