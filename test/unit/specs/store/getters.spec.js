import getters from '@/store/getters'

describe('getters', () => {
  const state = {
    harmonizationData: [],
    harmonizationMetadata: {}
  }

  describe('getCohortVariableMapping', () => {
    it('should return a cohortVariableMapping based on the harmonization data in the state', () => {
      const actual = getters.getCohortVariableMapping(state)
      const expected = {}
      expect(actual).to.deep.equal(expected)
    })
  })

  describe('getCoreVariableFields', () => {
    it('should return a list of core variable fields based on the harmonization metadata in the state', () => {
      const actual = getters.getCohortVariableMapping(state)
      const expected = []
      expect(actual).to.deep.equal(expected)
    })
  })

  describe('getHarmonizationTable', () => {
    it('should return a harmonization table based on the harmonization data in the state', () => {
      const actual = getters.getCohortVariableMapping(state)
      const expected = {}
      expect(actual).to.deep.equal(expected)
    })
  })

  describe('getSelectedHarmonization', () => {
    it('should return the selected harmonization based on the harmonization data in the state', () => {
      const actual = getters.getCohortVariableMapping(state)
      const expected = {}
      expect(actual).to.deep.equal(expected)
    })
  })
})
