import utils from '@molgenis/molgenis-vue-test-utils'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import actions from '@/store/actions'
import EntityV2Response from '../mock-responses/EntityV2Response'

import {
  SET_COHORT_DATA,
  SET_CORE_VARIABLE_DATA,
  SET_HARMONIZATION_DATA,
  SET_RAW_TREE_DATA,
  SET_SOURCE_VARIABLES,
  SET_TREE_DATA,
  SET_NAVBAR_LOGO,
  SET_ERROR
} from '@/store/mutations'
import { SET_CORE_VARIABLE_COLUMNS } from '../../../../src/store/mutations'
import ColumnsMapperResponse from '../mock-responses/ColumnsMapperResponse'
import TreeMapperResponse from '../mock-responses/TreeMapperResponse'

describe('actions', () => {
  afterEach(() => td.reset())
  const get = td.function('api.get')
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

    it('should set error when api request is invalid', done => {
      td.when(get('/api/v2/UI_Menu')).thenReject('ERROR')
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: SET_ERROR, payload: 'ERROR'}
        ],
        state: mockedState
      }
      utils.testAction(actions.__GET_TREE_DATA__, options, done)
    })
  })

  describe('GET_HARMONIZATIONS', () => {
    const payload = 'aaaacyc67m5p56qwh3nxvnaaae'

    it('should retrieve harmonization data from the server and store it in the state', done => {
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

    it('should set error when api request is invalid', done => {
      td.when(get('/api/v2/LifeCycle_Harmonizations/' + payload)).thenReject('ERROR')
      td.replace(api, 'get', get)

      const options = {
        payload: payload,
        expectedMutations: [
          {type: SET_ERROR, payload: 'ERROR'}
        ],
        state: mockedState
      }

      utils.testAction(actions.__GET_HARMONIZATIONS__, options, done)
    })
  })

  describe('GET_SOURCE_VARIABLES', () => {
    const payload = [
      {'variable': 'aaaacyc67dgh76qwh3nxvnaaae'},
      {'variable': 'aaaacyc67fxof6qwh3nxvnaaae'},
      {'variable': 'aaaacyc67ibsp6qwh3nxvnaaae'}
    ]
    const query = '?q=variable=in=(aaaacyc67dgh76qwh3nxvnaaae,aaaacyc67fxof6qwh3nxvnaaae,aaaacyc67ibsp6qwh3nxvnaaae)'

    it('should retrieve source variables data from the server and store it in the state', done => {
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

    it('should set error when api request is invalid', done => {
      td.when(get('/api/v2/LifeCycle_SourceVariables' + query)).thenReject('ERROR')
      td.replace(api, 'get', get)

      const options = {
        payload: payload,
        expectedMutations: [
          {type: SET_ERROR, payload: 'ERROR'}
        ],
        state: mockedState
      }

      utils.testAction(actions.__GET_SOURCE_VARIABLES__, options, done)
    })
  })

  describe('GET_COHORTS', () => {
    it('should retrieve cohorts data from the server and store it in the state', done => {
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

    it('should set error when api request is invalid', done => {
      td.when(get('/api/v2/LifeCycle_Cohorts')).thenReject('ERROR')
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: SET_ERROR, payload: 'ERROR'}
        ],
        state: mockedState
      }
      utils.testAction(actions.__GET_COHORTS__, options, done)
    })
  })

  describe('GET_CORE_VARIABLES', () => {
    const payload = 'aaaacyc66nrzd6qwh3nxvnaaae'
    const query = '?q=variable=in=(aaaacyc66nrzd6qwh3nxvnaaae)'
    const rawTreeData = [
      {
        key: 'aaaacyc66nrzd6qwh3nxvnaaae',
        variables: [{'variable': 'aaaacyc66nrzd6qwh3nxvnaaae'}]
      }]

    it('should retrieve core variable colums and data from the server and store it in the state', done => {
      const generateColumns = td.function('EntityToCoreVariableMapper.generateColumns')

      td.when(generateColumns(EntityV2Response.mockCoreVariablesResponse.meta.attributes)).thenReturn(ColumnsMapperResponse.mockColumns)
      td.when(get('/api/v2/LifeCycle_CoreVariables' + query)).thenResolve(EntityV2Response.mockCoreVariablesResponse)
      td.replace(api, 'get', get)

      const options = {
        payload: payload,
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

    it('should set error when api request is invalid', done => {
      td.when(get('/api/v2/LifeCycle_CoreVariables' + query)).thenReject('ERROR')
      td.replace(api, 'get', get)

      const options = {
        payload: payload,
        expectedMutations: [
          {type: SET_ERROR, payload: 'ERROR'}
        ],
        getters: {
          getRawTreeData: rawTreeData
        },
        state: mockedState
      }

      utils.testAction(actions.__GET_CORE_VARIABLES__, options, done)
    })
  })

  describe('GET_NAVBAR_LOGO', () => {
    it('should retrieve the navbar logo information from the application settings', done => {
      td.when(get('/api/v2/sys_set_app/app')).thenResolve(EntityV2Response.mockAppSettingsData)
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: SET_NAVBAR_LOGO, payload: EntityV2Response.mockAppSettingsData.logo_href_navbar}
        ],
        state: mockedState
      }

      utils.testAction(actions.__GET_NAVBAR_LOGO__, options, done)
    })

    it('should set error when api request is invalid', done => {
      td.when(get('/api/v2/sys_set_app/app')).thenReject('ERROR')
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: SET_ERROR, payload: 'ERROR'}
        ],
        state: mockedState
      }
      utils.testAction(actions.__GET_NAVBAR_LOGO__, options, done)
    })
  })
})
