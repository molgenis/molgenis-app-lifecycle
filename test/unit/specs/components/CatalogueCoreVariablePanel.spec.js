import CatalogueCoreVariablePanel from '@/components/CatalogueCoreVariablePanel'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import mutations from '@/store/mutations'

describe('components', () => {
  describe('CatalogueCoreVariablePanel', () => {
    let state
    let store
    let wrapper

    beforeEach(() => {
      state = {
        variableMetadata: [{name: 'field1'}, {name: 'field2'}],
        selectedNodeVariables: ['variable1', 'variable2']
      }

      store = new Vuex.Store({state, mutations})
      wrapper = shallowMount(CatalogueCoreVariablePanel, {store, mock: {observer: false}, propsData: {batchSize: 1}})
    })

    it('should initially fetch one batch', () => {
      expect(wrapper.vm.coreVariables).to.deep.equal(['variable1'])
    })

    it('should fetch coreVariables when the button is clicked', () => {
      wrapper.find('button').trigger('click')
      expect(wrapper.vm.coreVariables).to.deep.equal(['variable1', 'variable2'])
    })

    it('should reset when selectedNodeVariables change', () => {
      expect(wrapper.vm.coreVariables).to.deep.equal(['variable1'])
      store.commit('SET_SELECTED_NODE', {value: '1', variables: []})
      expect(wrapper.vm.coreVariables).to.deep.equal([])
    })

    describe('getHarmonizationValues', () => {
      it('should display empty list with -', () => {
        expect(wrapper.vm.getHarmonizationValues([])).to.equal('-')
      })

      it('should fiddle with ids to retrieve the cohorts', () => {
        expect(wrapper.vm.getHarmonizationValues([{id: 'ABC_DEF'}, {id: 'GHI_JKL'}])).to.equal('ABC, GHI')
      })
    })
  })
})
