import LifeCycleCatalogue from '@/pages/LifeCycleCatalogue'
import { shallowMount } from '@vue/test-utils'
import td from 'testdouble'
import Vuex from 'vuex'

describe('pages', () => {
  describe('LifeCycleCatalogue', () => {
    let actions
    let mutations
    let state
    let store
    let stubs
    let options

    beforeEach(() => {
      actions = {
        FETCH_COHORTS: td.function(),
        FETCH_DATA_FOR_SELECTED_NODE: td.function(),
        FETCH_TREE_MENU: td.function()
      }

      mutations = {
        SET_SELECTED_NODE: td.function(),
        SET_TREE: (state, tree) => {
          state.treeMenu = tree
        }
      }

      state = {
        route: {
          hash: '#harmonization'
        },
        selectedNodeLabel: 'label',
        treeMenu: [
          {
            id: '1'
          }
        ]
      }

      store = new Vuex.Store({actions, mutations, state})

      stubs = {
        'b-nav': true,
        'b-nav-item': true
      }

      options = {store, stubs}
    })

    it('should dispatch FETCH_COHORTS on mounted', () => {
      shallowMount(LifeCycleCatalogue, options)
      td.verify(actions.FETCH_COHORTS(td.matchers.anything(), undefined, undefined))
    })

    it('should dispatch FETCH_TREE_MENU on mounted', () => {
      shallowMount(LifeCycleCatalogue, options)
      td.verify(actions.FETCH_TREE_MENU(td.matchers.anything(), undefined, undefined))
    })

    it('should compute tree menu based on the state', () => {
      const wrapper = shallowMount(LifeCycleCatalogue, options)
      expect(wrapper.vm.treeMenu).to.deep.equal([{id: '1'}])
    })

    it('should compute selectedNodeLabel based on the state', () => {
      const wrapper = shallowMount(LifeCycleCatalogue, options)
      expect(wrapper.vm.selectedNodeLabel).to.deep.equal('label')
    })

    it('should dispatch FETCH_TREE_MENU with a selectedNodeId when selectedNodeId prop is set', () => {
      const propsData = {selectedNodeId: '1'}
      shallowMount(LifeCycleCatalogue, {propsData, ...options})
      td.verify(actions.FETCH_TREE_MENU(td.matchers.anything(), '1', undefined))
    })

    it('should select navItem from hash', () => {
      const wrapper = shallowMount(LifeCycleCatalogue, options)
      expect(wrapper.vm.tabIndex).to.equal(1)
    })

    it('should select default nav item if there is no hash', () => {
      state.route.hash = undefined
      const wrapper = shallowMount(LifeCycleCatalogue, options)
      expect(wrapper.vm.tabIndex).to.equal(0)
    })

    it('should activate selected nav item', () => {
      const wrapper = shallowMount(LifeCycleCatalogue, options)
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper.findAll('b-nav-item-stub').at(1).attributes('active')).to.exist
    })

    it('watches the menu and sets selected node', () => {
      state.treeMenu = []
      const wrapper = shallowMount(LifeCycleCatalogue, options)
      wrapper.setProps({'selectedNodeId': '1'})
      store.commit('SET_TREE', [{id: '1', label: 'label'}])
      td.verify(mutations.SET_SELECTED_NODE(state, {id: '1', label: 'label'}))
    })

    it('watches the menu and does nothing if no node selected', () => {
      state.treeMenu = []
      shallowMount(LifeCycleCatalogue, options)
      store.commit('SET_TREE', [{id: '1', label: 'label'}])
      td.verify(mutations.SET_SELECTED_NODE(), {times: 0, ignoreExtraArgs: true})
    })
  })
})
