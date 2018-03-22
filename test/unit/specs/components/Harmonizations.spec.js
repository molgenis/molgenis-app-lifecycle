import Harmonizations from '../../../../src/components/harmonization/Harmonizations'
import EntityV2Response from '../mock-responses/EntityV2Response'
import { shallow } from 'vue-test-utils'
import Vuex from 'vuex'


describe('Harmonizations unit tests', () => {

  let wrapper

  beforeEach(function () {
    let getters = {
        getCoreVariablesData: () => {
          return []
        },
        getCoreVariablesColumns: () => {
          return []
        },
        getCohorts: () => {
          return []
        }
    }

    let store = new Vuex.Store({
      getters
    })
    wrapper = shallow(Harmonizations,
      {
        propsData: {},
        store
      }
      )
  })

  it('should load "Harmonizations" component as a name', () => {
    expect(Harmonizations.name).to.equal('Harmonizations')
  })

  it('should determine if variable exists in harmonizations', () => {
    const cohort = 'DNBC'
    const expected = true
    const actual = wrapper.vm.variableExists(cohort, EntityV2Response.mockCoreVariablesResponse.items[0].harmonizations)
    expect(actual).to.equal(expected)
  })

  it('should get selected harmonization', () => {
    const selectedVariable = {
      harmonizations: [
        {
          id: '1',
          sourceLabel: 'DNBC'
        }
      ]
    }
    const selectedCohort = 'DNBC'
    const expected = '1'
    const actual = wrapper.vm.getSelectedHarmonization(selectedVariable, selectedCohort)
    expect(actual).to.equal(expected)
  })

})
