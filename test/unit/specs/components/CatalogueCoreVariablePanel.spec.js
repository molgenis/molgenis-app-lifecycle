import CatalogueCoreVariablePanel from '@/components/CatalogueCoreVariablePanel'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

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

      store = new Vuex.Store({state})
      wrapper = shallowMount(CatalogueCoreVariablePanel, {store, mock: {'observer': false}})
    })

    it('should initially show nothing', () => {
      expect(wrapper.vm.coreVariables).to.deep.equal([])
    })

    it('should fetch coreVariables when the observer is triggered', () => {
      wrapper.find('observer-stub').vm.$emit('intersect')
      expect(wrapper.vm.coreVariables).to.deep.equal(['variable1', 'variable2'])
    })

    it('should fetch coreVariables when the button is clicked', () => {
      wrapper.find('button').trigger('click')
      expect(wrapper.vm.coreVariables).to.deep.equal(['variable1', 'variable2'])
    })
  })
})
