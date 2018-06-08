import LifeCycleCatalogue from '@/pages/LifeCycleCatalogue'
import { shallowMount } from '@vue/test-utils'
import td from 'testdouble'
import Vuex from 'vuex'

describe('pages', () => {
  describe('LifeCycleCatalogue', () => {
    let actions
    let state
    let store

    beforeEach(() => {
      actions = {
        FETCH_COHORTS: td.function(),
        FETCH_DATA_FOR_SELECTED_NODE: td.function(),
        FETCH_TREE_MENU: td.function()
      }

      state = {
        selectedNodeLabel: 'label',
        treeMenu: [
          {
            id: '1'
          }
        ]
      }

      store = new Vuex.Store({actions, state})
    })

    it('should dispatch FETCH_COHORTS on mounted', () => {
      shallowMount(LifeCycleCatalogue, {store})
      td.verify(actions.FETCH_COHORTS(td.matchers.anything(), undefined, undefined))
    })

    it('should dispatch FETCH_TREE_MENU on mounted', () => {
      shallowMount(LifeCycleCatalogue, {store})
      td.verify(actions.FETCH_TREE_MENU(td.matchers.anything(), undefined, undefined))
    })

    it('should compute tree menu based on the state', () => {
      const wrapper = shallowMount(LifeCycleCatalogue, {store})
      expect(wrapper.vm.treeMenu).to.deep.equal([{id: '1'}])
    })

    it('should compute selectedNodeLabel based on the state', () => {
      const wrapper = shallowMount(LifeCycleCatalogue, {store})
      expect(wrapper.vm.selectedNodeLabel).to.deep.equal('label')
    })

    it('should dispatch FETCH_TREE_MENU with a selectedNodeId when selectedNodeId prop is set', () => {
      const propsData = {selectedNodeId: '1'}
      shallowMount(LifeCycleCatalogue, {propsData, store})
      td.verify(actions.FETCH_TREE_MENU(td.matchers.anything(), '1', undefined))
    })
  })
})
