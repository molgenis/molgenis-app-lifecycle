import mapEntitiesToHarmonizationTable from '@/mappers/entitiesToHarmonizationTableMapper'

describe('mappers', () => {
  describe('mapEntitiesToHarmonizationTable', () => {
    it('should map a list of entities to a harmonization table data object', () => {
      const entities = [
        {cohort: {id: 'label 1'}, target: {variable: 'variable 1'}, status: {id: 'zna'}},
        {cohort: {id: 'label 2'}, target: {variable: 'variable 2'}, status: {id: 'zna'}},
        {cohort: {id: 'label 2'}, target: {variable: 'variable 3'}, status: {id: 'zna'}},
        {cohort: {id: 'label 3'}, target: {variable: 'variable 4'}, status: {id: 'zna'}},
        {cohort: {id: 'label 3'}, target: {variable: 'variable 5'}, status: {id: 'zna'}}
      ]

      const actual = mapEntitiesToHarmonizationTable(entities)
      const expected = {
        'label 1': [{variable: 'variable 1', status: 'zna'}],
        'label 2': [{variable: 'variable 2', status: 'zna'}, {variable: 'variable 3', status: 'zna'}],
        'label 3': [{variable: 'variable 4', status: 'zna'}, {variable: 'variable 5', status: 'zna'}]
      }

      expect(actual).to.deep.equal(expected)
    })
  })
})
