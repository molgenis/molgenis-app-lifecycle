import getters from '@/store/getters'
import EntityV2Response from '../mock-responses/EntityV2Response'
import ColumnsMapperResponse from '../mock-responses/ColumnsMapperResponse'

describe('getters', () => {
  const mockedState = {
    variables: {
      data: EntityV2Response.mockCoreVariablesResponse.items,
      source: EntityV2Response.mockSourceVariablesResponse.items,
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

  it('getSourceVariables returns a clone of the source variables items', () => {
    const clone = getters.getSourceVariables(mockedState)
    expect(clone).to.not.equal(mockedState.variables.source)
    expect(clone).to.deep.equal(mockedState.variables.source)
  })
})
