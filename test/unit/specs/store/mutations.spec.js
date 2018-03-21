import { expect } from 'chai'
import mutations from '@/store/mutations'
import TreeMapperResponse from '../mock-responses/TreeMapperResponse'
import EntityV2Response from '../mock-responses/EntityV2Response'
import ColumnsMapperResponse from '../mock-responses/ColumnsMapperResponse'

describe('mutations', () => {
  const state = {
    tree: {
      settings: {
        'id': 'key',
        'label': 'title',
        'folderIcon': '',
        'leafIcon': 'fa fa-file-o',
        'isOpened': true,
        'isSelected': false,
        'isDisabled': false,
        'isLoading': false
      },
      data: [],
      raw: []
    },
    variables: {
      columns: [],
      data: [],
      source: []
    },
    cohorts: [],
    harmonizations: [],
    navbarLogo: '',
    error: undefined,
    selectedFeature: ''
  }

  it('should set the tree data in the state with the payload', () => {
    mutations.__SET_TREE_DATA__(state, TreeMapperResponse.mockTreeData)
    expect(state.tree.data).to.deep.equal(TreeMapperResponse.mockTreeData)
  })

  it('should set the raw tree data in the state with the payload', () => {
    mutations.__SET_RAW_TREE_DATA__(state, EntityV2Response.mockRawTreeData)
    expect(state.tree.raw).to.deep.equal(EntityV2Response.mockRawTreeData)
  })

  it('should set the core variable columns in the state with the payload', () => {
    mutations.__SET_CORE_VARIABLE_COLUMNS__(state, ColumnsMapperResponse.mockColumns)
    expect(state.variables.columns).to.deep.equal(ColumnsMapperResponse.mockColumns)
  })

  it('should set the core variable data in the state with the payload', () => {
    mutations.__SET_CORE_VARIABLE_DATA__(state, EntityV2Response.mockCoreVariablesResponse.items)
    expect(state.variables.data).to.deep.equal(EntityV2Response.mockCoreVariablesResponse.items)
  })

  it('should set the source variables in the state with the payload', () => {
    mutations.__SET_SOURCE_VARIABLES__(state, EntityV2Response.mockSourceVariablesResponse.items)
    expect(state.variables.source).to.deep.equal(EntityV2Response.mockSourceVariablesResponse.items)
  })

  it('should set cohort data in the state with the payload', () => {
    mutations.__SET_COHORT_DATA__(state, EntityV2Response.mockCohortsResponse.items)
    expect(state.cohorts).to.deep.equal(EntityV2Response.mockCohortsResponse.items)
  })

  it('should set harmonization data in the state with the payload', () => {
    mutations.__SET_HARMONIZATION_DATA__(state, EntityV2Response.mockHarmonizationResponse)
    expect(state.harmonizations).to.deep.equal(EntityV2Response.mockHarmonizationResponse)
  })

  it('should set error message in state', () => {
    mutations.__SET_ERROR__(state, 'error')
    expect(state.error).to.equal('error')
  })

  it('should set navbar logo in state', () => {
    mutations.__SET_NAVBAR_LOGO__(state, EntityV2Response.mockAppSettingsData.logo_href_navbar)
    expect(state.navbarLogo).to.equal(EntityV2Response.mockAppSettingsData.logo_href_navbar)
  })

  it('should set selected feature in state', () => {
    mutations.__SET_SELECTED_FEATURE__(state, 'test')
    expect(state.selectedFeature).to.equal('test')
  })
})
