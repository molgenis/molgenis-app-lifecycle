import mapEntitiesToCohortVariableMapping from '@/mappers/entitiesToCohortVariableMappingMapper'

describe('mappers', () => {
  describe('mapEntitiesToCohortVariableMapping', () => {
    it.only('should map a list of MOLGENIS entities to a cohort variable map', () => {
      const entities = [
        {id: 'entity1', sources: ['source1'], cohort: {id: 'cohort1'}, target: {variable: 'variable1'}},
        {id: 'entity2', sources: ['source1'], cohort: {id: 'cohort1'}, target: {variable: 'variable2'}},
        {id: 'entity3', sources: ['source1'], cohort: {id: 'cohort2'}, target: {variable: 'variable1'}},
        {id: 'entity4', sources: ['source1'], cohort: {id: 'cohort2'}, target: {variable: 'variable3'}},
        {id: 'entity5', sources: ['source1'], cohort: {id: 'cohort3'}, target: {variable: 'variable10'}}
      ]

      const actual = mapEntitiesToCohortVariableMapping(entities)
      const expected = {
        'cohort1': {
          'variable1': {id: 'entity1', sources: ['source1']},
          'variable2': {id: 'entity2', sources: ['source1']}
        },

        'cohort2': {
          'variable1': {id: 'entity3', sources: ['source1']},
          'variable3': {id: 'entity4', sources: ['source1']}
        },

        'cohort3': {
          'variable10': {id: 'entity5', sources: ['source1']}
        }
      }

      expect(actual).to.deep.equal(expected)
    })
  })
})
