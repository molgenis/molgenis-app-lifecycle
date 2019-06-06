import variables from '../../../data/variables'
import statusIndexer from '@/mappers/statusIndexer'

describe('mappers', () => {
  describe('statusIndexer', () => {
    it('should index harmonizations on cohort and variable', () => {
      const actual = statusIndexer(variables)
      const expected = {
        COHORT1: {
          var0: {
            id: 'harm1',
            status: 'zna'
          },
          var1: {
            id: 'harm3',
            status: 'partial'
          }
        },
        COHORT2: {
          var0: {
            id: 'harm2',
            status: 'complete'
          }
        },
        COHORT3: {
          var1: {
            id: 'harm4',
            status: 'complete'
          }
        }
      }
      expect(actual).to.deep.equal(expected)
    })
  })
})
