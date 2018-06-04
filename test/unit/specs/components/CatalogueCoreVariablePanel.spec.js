import CatalogueCoreVariablePanel from '@/components/CatalogueCoreVariablePanel'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

describe('components', () => {
  describe('CatalogueCoreVariablePanel', () => {
    let getters
    let state
    let store

    beforeEach(() => {
      getters = {
        getCoreVariableFields: () => ['field1', 'field2']
      }

      state = {
        selectedNodeVariables: ['variable1', 'variable2']
      }

      store = new Vuex.Store({getters, state})
    })

    it('should compute coreVariables from the state', () => {
      const wrapper = shallowMount(CatalogueCoreVariablePanel, {store})
      expect(wrapper.vm.coreVariables).to.deep.equal(['variable1', 'variable2'])
    })
  })
})
