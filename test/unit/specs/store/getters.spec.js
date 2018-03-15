import getters from '@/store/getters'
import EntityV2Response  from '../mock-responses/EntityV2Response'
import TreeMapperResponse from '../mock-responses/TreeMapperResponse'
import ColumnsMapperResponse from '../mock-responses/ColumnsMapperResponse'

describe('getters', () => {
  const mockedTreeState = {
    tree: {
      data: TreeMapperResponse.mockTreeData,
      raw: EntityV2Response.mockRawTreeData
    }
  }
  it('getTreeData returns a clone of the tree data array in the state', () => {
    const clone = getters.getTreeData(mockedTreeState)
    expect(clone).to.not.equal(mockedTreeState.tree.data)
    expect(clone).to.deep.equal(mockedTreeState.tree.data)
  })
  it('getRawTreeData returns a clone of the raw tree data array in the state', () => {
    const clone = getters.getRawTreeData(mockedTreeState)
    expect(clone).to.not.equal(mockedTreeState.tree.raw)
    expect(clone).to.deep.equal(mockedTreeState.tree.raw)
  })
  it('getCoreVariableColumns returns a clone of the et', () => {
    const clone = getters.getCoreVariableColumns(ColumnsMapperResponse.mockColumns)
    expect(clone).to.not.equal(ColumnsMapperResponse.mockColumns)
    expect(clone).to.deep.equal(ColumnsMapperResponse.mockColumns)
  })


  getCoreVariableColumns: state => {
    return _.cloneDeep(state.variables.columns)
  },
    getCoreVariableData: state => {
    return _.cloneDeep(state.variables.data)
  },
    getCohorts: state => {
    return _.cloneDeep(state.cohorts)
  },
    getHarmonizations: state => {
    return _.cloneDeep(state.harmonizations)
  },
    getSourceVariables: state => {
    return _.cloneDeep(state.variables.source)
  }
})
