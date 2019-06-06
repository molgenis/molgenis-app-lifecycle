import CatalogueHarmonizationPanel from '@/components/CatalogueHarmonizationPanel'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import mutations from '@/store/mutations'

describe('components', () => {
  describe('CatalogueHarmonizationPanel', () => {
    let getters
    let state
    let store
    let wrapper

    beforeEach(() => {
      state = {
        cohorts: ['cohort1', 'cohort2', 'cohort3'],
        selectedNodeVariables: [
          {
            variable: 'variable1',
            harmonizations: [{
              id: '1',
              cohort: {id: 'cohort1'},
              status: {id: 'zna'}
            }]
          }, {
            variable: 'variable2',
            harmonizations: [{
              id: '2',
              cohort: {id: 'cohort1'},
              status: {id: 'partial'}
            }]
          }, {
            variable: 'variable3',
            harmonizations: [{
              id: '3',
              cohort: {id: 'cohort1'},
              status: {id: 'complete'}
            }, {
              id: '4',
              cohort: {id: 'cohort2'},
              status: {id: 'complete'}
            }]
          }
        ]
      }

      store = new Vuex.Store({getters, state, mutations})
      wrapper = shallowMount(CatalogueHarmonizationPanel, {store, stubs: {'observer': true}, propsData: {batchSize: 2}})
    })

    it('should return the number of harmonizations for a cohort', () => {
      expect(wrapper.vm.getNumberOfHarmonizations('cohort1')).to.deep.equal(3)
    })

    it('should determine cohorts with mappings', () => {
      expect(wrapper.vm.cohortsWithMappings).to.deep.equal(['cohort1', 'cohort2'])
    })

    it('should look up mapping status and id for cohort and variable', () => {
      expect(wrapper.vm.status.cohort1.variable1).to.deep.equal({id: '1', status: 'zna'})
      expect(wrapper.vm.status.cohort1.variable2).to.deep.equal({id: '2', status: 'partial'})
      expect(wrapper.vm.status.cohort1.variable3).to.deep.equal({id: '3', status: 'complete'})
      expect(wrapper.vm.status.cohort2.variable3).to.deep.equal({id: '4', status: 'complete'})
    })

    it('should compute cohorts from the state', () => {
      expect(wrapper.vm.cohorts).to.deep.equal(['cohort1', 'cohort2', 'cohort3'])
    })

    it('should initially show first batch of variables', () => {
      expect(wrapper.vm.variables).to.deep.equal(['variable1', 'variable2'])
    })

    it('should fetch more variables when fetch button is clicked', () => {
      wrapper.find('button').trigger('click')
      expect(wrapper.vm.variables).to.deep.equal(['variable1', 'variable2', 'variable3'])
    })

    it('should show fetch when there are variables left to fetch', () => {
      expect(wrapper.vm.showFetch).to.equal(true)
      wrapper.vm.fetch()
      expect(wrapper.vm.showFetch).to.equal(false)
    })

    it('should watch selectedNodeVariables', () => {
      wrapper.vm.fetch()
      store.commit('SET_SELECTED_NODE', {label: 'label', variables: [state.selectedNodeVariables[1]]})
      expect(wrapper.vm.variables).to.deep.equal(['variable2'])
      wrapper.vm.fetch()
      expect(wrapper.vm.variables).to.deep.equal(['variable2'])
    })
  })
})
