import getters from '@/store/getters'
import EntityV2Response from '../mock-responses/EntityV2Response'
import ColumnsMapperResponse from '../mock-responses/ColumnsMapperResponse'

describe('getters', () => {
  const mockedState = {
    variables: {
      data: EntityV2Response.mockCoreVariablesResponse.items,
      columns: ColumnsMapperResponse.mockColumns
    }
  }

  it('getCoreVariablesColumns returns a clone of the core variable columns', () => {
    const clone = getters.getCoreVariablesColumns(mockedState)
    expect(clone).to.not.equal(mockedState.variables.columns)
    expect(clone).to.deep.equal(mockedState.variables.columns)
  })

  it('getCoreVariablesData returns a clone of the core variable items', () => {
    const clone = getters.getCoreVariablesData(mockedState)
    expect(clone).to.not.equal(mockedState.variables.data)
    expect(clone).to.deep.equal(mockedState.variables.data)
  })
})
