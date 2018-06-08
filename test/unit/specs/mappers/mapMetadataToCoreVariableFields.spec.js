import mapMetadataToCoreVariableFields from '@/mappers/metadataToCoreVariableFieldsMapper'

describe('mappers', () => {
  describe('mapMetadataToCoreVariableFields', () => {
    it('should map MOLGENIS metadata to a list of fields for the core variables', () => {
      const metadata = {
        attributes: [
          {
            name: 'target',
            refEntity: {
              attributes: ['attr1', 'attr2']
            }
          }
        ]
      }
      const actual = mapMetadataToCoreVariableFields(metadata)
      const expected = ['attr1', 'attr2']

      expect(actual).to.deep.equal(expected)
    })

    it('should return an empty list if the metadata does not contain any attributes', () => {
      const metadata = {}
      const actual = mapMetadataToCoreVariableFields(metadata)
      const expected = []

      expect(actual).to.deep.equal(expected)
    })
  })
})
