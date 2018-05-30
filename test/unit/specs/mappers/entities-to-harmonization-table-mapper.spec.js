import mapEntitiesToHarmonizationTable from '@/mappers/entities-to-harmonization-table-mapper'

describe('mappers', () => {
  describe('mapEntitiesToHarmonizationTable', () => {
    it('should map a list of entities to a harmonization table data object', () => {
      const entities = [
        {sourceLabel: 'label 1', target: {variable: 'variable 1'}},
        {sourceLabel: 'label 2', target: {variable: 'variable 2'}},
        {sourceLabel: 'label 2', target: {variable: 'variable 3'}},
        {sourceLabel: 'label 3', target: {variable: 'variable 4'}},
        {sourceLabel: 'label 3', target: {variable: 'variable 5'}}
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
