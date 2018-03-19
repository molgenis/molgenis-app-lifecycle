import getters from '@/store/getters'
import EntityV2Response from '../mock-responses/EntityV2Response'
import TreeMapperResponse from '../mock-responses/TreeMapperResponse'
import ColumnsMapperResponse from '../mock-responses/ColumnsMapperResponse'

describe('getters', () => {
  const mockedState = {
    tree: {
      data: TreeMapperResponse.mockTreeData,
      raw: EntityV2Response.mockRawTreeData
    },
    variables: {
      data: EntityV2Response.mockCoreVariablesResponse.items,
      source: EntityV2Response.mockSourceVariablesResponse.items,
      columns: ColumnsMapperResponse.mockColumns
    },
    cohorts: EntityV2Response.mockCohortsResponse.items,
    harmonizations: EntityV2Response.mockHarmonizationResponse
  }
  it('getTreeData returns a clone of the tree data array in the state', () => {
    const clone = getters.getTreeData(mockedState)
    expect(clone).to.not.equal(mockedState.tree.data)
    expect(clone).to.deep.equal(mockedState.tree.data)
  })
  it('getRawTreeData returns a clone of the raw tree data array in the state', () => {
    const clone = getters.getRawTreeData(mockedState)
    expect(clone).to.not.equal(mockedState.tree.raw)
    expect(clone).to.deep.equal(mockedState.tree.raw)
  })
  it('getCoreVariableColumns returns a clone of the core variable columns', () => {
    const clone = getters.getCoreVariableColumns(mockedState)
    expect(clone).to.not.equal(mockedState.variables.columns)
    expect(clone).to.deep.equal(mockedState.variables.columns)
  })
  it('getCoreVariableData returns a clone of the core variable items', () => {
    const clone = getters.getCoreVariableData(mockedState)
    expect(clone).to.not.equal(mockedState.variables.data)
    expect(clone).to.deep.equal(mockedState.variables.data)
  })
  it('getSourceVariables returns a clone of the source variables items', () => {
    const clone = getters.getSourceVariables(mockedState)
    expect(clone).to.not.equal(mockedState.variables.source)
    expect(clone).to.deep.equal(mockedState.variables.source)
  })
  it('getCohorts returns a clone of the cohorts', () => {
    const clone = getters.getCohorts(mockedState)
    expect(clone).to.not.equal(mockedState.cohorts)
    expect(clone).to.deep.equal(mockedState.cohorts)
  })
  it('getHarmonizations returns a clone of the harmonization', () => {
    const clone = getters.getHarmonizations(mockedState)
    expect(clone).to.not.equal(mockedState.harmonizations)
    expect(clone).to.deep.equal(mockedState.harmonizations)
  })
})
