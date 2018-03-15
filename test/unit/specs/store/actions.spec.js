import utils from '@molgenis/molgenis-vue-test-utils'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import actions from '@/store/actions'
import EntityV2Response  from '../mock-responses/EntityV2Response'

import {
  SET_COHORT_DATA,
  SET_CORE_VARIABLE_DATA,
  SET_HARMONIZATION_DATA,
  SET_RAW_TREE_DATA,
  SET_SOURCE_VARIABLES,
  SET_TREE_DATA
} from '@/store/mutations'
import { SET_CORE_VARIABLE_COLUMNS } from '../../../../src/store/mutations'
import ColumnsMapperResponse from '../mock-responses/ColumnsMapperResponse'
import TreeMapperResponse from '../mock-responses/TreeMapperResponse'

describe('actions', () => {
  afterEach(() => td.reset())
  const mockedState = {
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
      raw: EntityV2Response.mockRawTreeData
    },
    error: undefined
  }

  describe('GET_TREE_DATA', () => {
    it('should retrieve tree data from the server and store it in the state', done => {
      const get = td.function('api.get')

      td.when(get('/api/v2/UI_Menu')).thenResolve(EntityV2Response.mockRawTreeData)
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: SET_RAW_TREE_DATA, payload: EntityV2Response.mockRawTreeData.items},
          {type: SET_TREE_DATA, payload: TreeMapperResponse.mockTreeData}
        ],
        state: mockedState
      }
      utils.testAction(actions.__GET_TREE_DATA__, options, done)
    })
  })

  describe('GET_HARMONIZATIONS', () => {
    it('should retrieve harmonization data from the server and store it in the state', done => {
      const get = td.function('api.get')
      const payload = 'aaaacyc67m5p56qwh3nxvnaaae'



      td.when(get('/api/v2/LifeCycle_Harmonizations/' + payload)).thenResolve(EntityV2Response.mockHarmonizationResponse)
      td.replace(api, 'get', get)

      const options = {
        payload: payload,
        expectedMutations: [
          {type: SET_HARMONIZATION_DATA, payload: EntityV2Response.mockHarmonizationResponse}
        ],
        state: mockedState
      }

      utils.testAction(actions.__GET_HARMONIZATIONS__, options, done)
    })
  })

  describe('GET_SOURCE_VARIABLES', () => {
    it('should retrieve source variables data from the server and store it in the state', done => {
      const get = td.function('api.get')
      const query = '?q=variable=in=(aaaacyc67dgh76qwh3nxvnaaae,aaaacyc67fxof6qwh3nxvnaaae,aaaacyc67ibsp6qwh3nxvnaaae)'
      const payload = [
        {'variable': 'aaaacyc67dgh76qwh3nxvnaaae'},
        {'variable': 'aaaacyc67fxof6qwh3nxvnaaae'},
        {'variable': 'aaaacyc67ibsp6qwh3nxvnaaae'}
      ]

      td.when(get('/api/v2/LifeCycle_SourceVariables' + query)).thenResolve(EntityV2Response.mockSourceVariablesResponse)
      td.replace(api, 'get', get)

      const options = {
        payload: payload,
        expectedMutations: [
          {type: SET_SOURCE_VARIABLES, payload: EntityV2Response.mockSourceVariablesResponse.items}
        ],
        state: mockedState
      }

      utils.testAction(actions.__GET_SOURCE_VARIABLES__, options, done)
    })
  })

  describe('GET_COHORTS', () => {
    it('should retrieve cohorts data from the server and store it in the state', done => {
      const get = td.function('api.get')

      td.when(get('/api/v2/LifeCycle_Cohorts')).thenResolve(EntityV2Response.mockCohortsResponse)
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: SET_COHORT_DATA, payload: EntityV2Response.mockCohortsResponse.items}
        ],
        state: mockedState
      }

      utils.testAction(actions.__GET_COHORTS__, options, done)
    })
  })

  describe('GET_CORE_VARIABLES', () => {
    it('should retrieve core variable colums and data from the server and store it in the state', done => {
      const get = td.function('api.get')
      const generateColumns = td.function('EntityToCoreVariableMapper.generateColumns')
      const query = '?q=variable=in=(aaaacyc66nrzd6qwh3nxvnaaae)'
      const rawTreeData = [
        {
          key: 'aaaacyc66nrzd6qwh3nxvnaaae',
          variables: [{'variable': 'aaaacyc66nrzd6qwh3nxvnaaae'}]
        }]

      td.when(generateColumns(EntityV2Response.mockCoreVariablesResponse.meta.attributes)).thenReturn(ColumnsMapperResponse.mockColumns)
      td.when(get('/api/v2/LifeCycle_CoreVariables' + query)).thenResolve(EntityV2Response.mockCoreVariablesResponse)
      td.replace(api, 'get', get)

      const options = {
        payload: 'aaaacyc66nrzd6qwh3nxvnaaae',
        expectedMutations: [
          {type: SET_CORE_VARIABLE_COLUMNS, payload: ColumnsMapperResponse.mockColumns},
          {type: SET_CORE_VARIABLE_DATA, payload: EntityV2Response.mockCoreVariablesResponse.items}
        ],
        getters: {
          getRawTreeData: rawTreeData
        },
        state: mockedState
      }

      utils.testAction(actions.__GET_CORE_VARIABLES__, options, done)
    })
  })
})
