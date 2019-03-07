import CatalogueHarmonizationPanel from '@/components/CatalogueHarmonizationPanel'
import { shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

describe('components', () => {
  describe('CatalogueHarmonizationPanel', () => {
    let getters
    let state
    let store
    let wrapper

    beforeEach(() => {
      getters = {
        getCohortVariableMapping: () => ({'cohort1': {'variable1': {id: '1'}}}),
        getHarmonizationTable: () => ({'cohort1': [{variable: 'variable1', status: 'zna'}, {variable: 'variable2', status: 'partial'}, {variable: 'variable3', status: 'complete'}], 'cohort2': [{variable: 'variable3', status: 'complete'}]})
      }

      state = {
        cohorts: ['cohort1'],
        selectedNodeVariables: [{variable: 'variable1', status: 'zna'}, {variable: 'variable2', status: 'partial'}]
      }

      store = new Vuex.Store({getters, state})
      wrapper = shallowMount(CatalogueHarmonizationPanel, {store})
    })

    it('should return the number of harmonizations for a cohort when getNumberOfHarmonizations is called', () => {
      expect(wrapper.vm.getNumberOfHarmonizations('cohort1')).to.equal(2)
    })

    it('should return 0 if a cohort has no harmonizations when getNumberOfHarmonizations is called', () => {
      expect(wrapper.vm.getNumberOfHarmonizations('cohort3')).to.equal(0)
    })

    it('should return true if a variable is in the list of harmonized variables when isVariableHarmonized is called', () => {
      expect(wrapper.vm.isVariableHarmonized('variable1')).to.deep.equal({status: 'zna', variable: 'variable1'})
    })

    it('should return false if a variable is not in the list of harmonized variables when isVariableHarmonized is called', () => {
      expect(wrapper.vm.isVariableHarmonized('variable4')).to.deep.equal(undefined)
    })

    it('should return true if a cohort has any harmonizations when doesCohortHaveHarmonization is called', () => {
      expect(wrapper.vm.doesCohortHaveHarmonization('cohort1')).to.equal(true)
    })

    it('should return false if a cohort does not have any harmonizations when doesCohortHaveHarmonization is called', () => {
      expect(wrapper.vm.doesCohortHaveHarmonization('cohort3')).to.equal(false)
    })

    it('should return true if the variable is harmonized for a cohort when variableFullyHarmonizedForCohort is called', () => {
      expect(wrapper.vm.variableCompleteHarmonizedForCohort('cohort1', 'variable3')).to.deep.equal({variable: 'variable3', status: 'complete'})
    })

    it('should return false if the variable is not harmonized for a cohort when variablePartialHarmonizedForCohort is called', () => {
      expect(wrapper.vm.variablePartialHarmonizedForCohort('cohort1', 'variable2')).to.deep.equal({variable: 'variable2', status: 'partial'})
    })

    it('should return false if the variable is not harmonized for a cohort when variableNAHarmonizedForCohort is called', () => {
      expect(wrapper.vm.variableNAHarmonizedForCohort('cohort1', 'variable1')).to.deep.equal({variable: 'variable1', status: 'zna'})
    })

    it('should return the row identifier of a harmonization when getHarmonizationRowId is called', () => {
      expect(wrapper.vm.getHarmonizationRowId('cohort1', 'variable1')).to.equal('1')
    })

    it('should compute cohorts from the state', () => {
      expect(wrapper.vm.cohorts).to.deep.equal(['cohort1'])
    })

    it('should compute cohortVariableMapping from a getter', () => {
      expect(wrapper.vm.cohortVariableMapping).to.deep.equal({'cohort1': {'variable1': {id: '1'}}})
    })

    it('should compute harmonizationTableData from a getter', () => {
      expect(wrapper.vm.harmonizationTableData).to.deep.equal({
        'cohort1': [{variable: 'variable1', status: 'zna'}, {variable: 'variable2', status: 'partial'}, {variable: 'variable3', status: 'complete'}],
        'cohort2': [{variable: 'variable3', status: 'complete'}]
      })
    })

    it('should compute harmonizedVariables based on the values of harmonizationTableData', () => {
      expect(wrapper.vm.harmonizedVariables).to.deep.equal([{status: 'zna', variable: 'variable1'}, {status: 'partial', variable: 'variable2'}, {status: 'complete', variable: 'variable3'}, {status: 'complete', variable: 'variable3'}])
    })

    it('should compute selectedNodeVariables from the state', () => {
      expect(wrapper.vm.selectedNodeVariables).to.deep.equal([{variable: 'variable1', status: 'zna'}, {variable: 'variable2', status: 'partial'}])
    })
  })
})
