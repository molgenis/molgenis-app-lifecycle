import mapEntitiesToHarmonizationTable from '@/mappers/entitiesToHarmonizationTableMapper'

describe('mappers', () => {
  describe('mapEntitiesToHarmonizationTable', () => {
    it('should map a list of entities to a harmonization table data object', () => {
      const entities = [
        {cohort: {id: 'label 1'}, target: {variable: 'variable 1'}},
        {cohort: {id: 'label 2'}, target: {variable: 'variable 2'}},
        {cohort: {id: 'label 2'}, target: {variable: 'variable 3'}},
        {cohort: {id: 'label 3'}, target: {variable: 'variable 4'}},
        {cohort: {id: 'label 3'}, target: {variable: 'variable 5'}}
      ]

      const actual = mapEntitiesToHarmonizationTable(entities)
      const expected = {
        'label 1': ['variable 1'],
        'label 2': ['variable 2', 'variable 3'],
        'label 3': ['variable 4', 'variable 5']
      }

      expect(actual).to.deep.equal(expected)
    })
  })
})
