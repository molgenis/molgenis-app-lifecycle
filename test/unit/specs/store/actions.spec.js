import utils from '@molgenis/molgenis-vue-test-utils'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import actions from '@/store/actions'

import { SET_HARMONIZATION_DATA, SET_RAW_TREE_DATA, SET_TREE_DATA } from '@/store/mutations'

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
      raw: [
        {
          '_href': '/api/v2/menu/1',
          'key': 'c1',
          'title': 'Child1',
          'parent': {
            '_href': '/api/v2/menu/p1',
            'key': 'p1',
            'title': 'Parent1'
          },
          'children': []
        },
        {
          '_href': '/api/v2/menu/p2',
          'key': 'p2',
          'title': 'Parent2',
          'children': []
        },
        {
          '_href': '/api/v2/menu/p1',
          'key': 'p1',
          'title': 'Parent1',
          'children': [
            {
              '_href': '/api/v2/UI_Menu/c1',
              'key': 'c1',
              'title': 'Child1'
            },
            {
              '_href': '/api/v2/UI_Menu/c2',
              'key': 'c2',
              'title': 'Child2'
            }
          ]
        },
        {
          '_href': '/api/v2/menu/c2',
          'key': 'c2',
          'title': 'Child2',
          'parent': {
            '_href': '/api/v2/menu/p1',
            'key': 'p1',
            'title': 'Parent1'
          },
          'children': [
            {
              '_href': '/api/v2/UI_Menu/gc1',
              'key': 'gc1',
              'title': 'Grandchild1'
            }
          ]
        },
        {
          '_href': '/api/v2/menu/gc1',
          'key': 'gc1',
          'title': 'Grandchild1',
          'parent': {
            '_href': '/api/v2/menu/c2',
            'key': 'c2',
            'title': 'Child2'
          },
          'children': []
        }
      ]
    },
    error: undefined
  }

  describe('GET_TREE_DATA', () => {
    it('should retrieve tree data from the server and store it in the state', done => {
      const get = td.function('api.get')
      const apiResponseMock = {
        'items': [
          {
            '_href': '/api/v2/menu/1',
            'key': 'c1',
            'title': 'Child1',
            'parent': {
              '_href': '/api/v2/menu/p1',
              'key': 'p1',
              'title': 'Parent1'
            },
            'children': []
          },
          {
            '_href': '/api/v2/menu/p2',
            'key': 'p2',
            'title': 'Parent2',
            'children': []
          },
          {
            '_href': '/api/v2/menu/p1',
            'key': 'p1',
            'title': 'Parent1',
            'children': [
              {
                '_href': '/api/v2/UI_Menu/c1',
                'key': 'c1',
                'title': 'Child1'
              },
              {
                '_href': '/api/v2/UI_Menu/c2',
                'key': 'c2',
                'title': 'Child2'
              }
            ]
          },
          {
            '_href': '/api/v2/menu/c2',
            'key': 'c2',
            'title': 'Child2',
            'parent': {
              '_href': '/api/v2/menu/p1',
              'key': 'p1',
              'title': 'Parent1'
            },
            'children': [
              {
                '_href': '/api/v2/UI_Menu/gc1',
                'key': 'gc1',
                'title': 'Grandchild1'
              }
            ]
          },
          {
            '_href': '/api/v2/menu/gc1',
            'key': 'gc1',
            'title': 'Grandchild1',
            'parent': {
              '_href': '/api/v2/menu/c2',
              'key': 'c2',
              'title': 'Child2'
            },
            'children': []
          }
        ]
      }

      const treeStructure = [
        {
          'id': 'p2',
          'text': 'Parent2',
          'value': 'Parent2',
          'icon': 'fa fa-file-o',
          'opened': true,
          'selected': false,
          'disabled': false,
          'loading': false,
          'children': []
        },
        {
          'id': 'p1',
          'text': 'Parent1',
          'value': 'Parent1',
          'icon': '',
          'opened': true,
          'selected': false,
          'disabled': false,
          'loading': false,
          'children': [
            {
              'id': 'c1',
              'text': 'Child1',
              'value': 'Child1',
              'icon': 'fa fa-file-o',
              'opened': true,
              'selected': false,
              'disabled': false,
              'loading': false,
              'children': []
            },
            {
              'id': 'c2',
              'text': 'Child2',
              'value': 'Child2',
              'icon': '',
              'opened': true,
              'selected': false,
              'disabled': false,
              'loading': false,
              'children': [
                {
                  'id': 'gc1',
                  'text': 'Grandchild1',
                  'value': 'Grandchild1',
                  'icon': 'fa fa-file-o',
                  'opened': true,
                  'selected': false,
                  'disabled': false,
                  'loading': false,
                  'children': []
                }
              ]
            }
          ]
        }
      ]
      td.when(get('/api/v2/UI_Menu')).thenResolve(apiResponseMock)
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: SET_RAW_TREE_DATA, payload: apiResponseMock.items},
          {type: SET_TREE_DATA, payload: treeStructure}
        ],
        state: mockedState
      }
      utils.testAction(actions.__GET_TREE_DATA__, options, done)
    })
  })

  describe('GET_HARMONIZATIONS', () => {
    it('should retrieve harmonization data from the server and store it in the state', done => {
      const get = td.function('api.get')
      const harmonization = 'aaaacyc67m5p56qwh3nxvnaaae'

      const apiResponseMock = {
        '_meta': {
          'href': '/api/v2/LifeCycle_Harmonizations',
          'hrefCollection': '/api/v2/LifeCycle_Harmonizations',
          'name': 'LifeCycle_Harmonizations',
          'label': 'Harmonizations',
          'description': 'Harmonization process',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/cohort',
              'fieldType': 'XREF',
              'name': 'cohort',
              'label': 'Cohort',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_Cohorts',
                'hrefCollection': '/api/v2/LifeCycle_Cohorts',
                'name': 'LifeCycle_Cohorts',
                'label': 'Cohorts',
                'description': 'Participating Cohorts',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_Cohorts/meta/id',
                    'fieldType': 'STRING',
                    'name': 'id',
                    'label': 'ID',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': true,
                    'labelAttribute': false,
                    'unique': true,
                    'visible': false,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  },
                  {
                    'href': '/api/v2/LifeCycle_Cohorts/meta/label',
                    'fieldType': 'STRING',
                    'name': 'label',
                    'label': 'Label',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': false,
                    'labelAttribute': true,
                    'unique': false,
                    'visible': true,
                    'lookupAttribute': true,
                    'isAggregatable': false
                  }
                ],
                'labelAttribute': 'label',
                'idAttribute': 'id',
                'lookupAttributes': [
                  'label'
                ],
                'isAbstract': false,
                'writable': false,
                'languageCode': 'en'
              },
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/sources',
              'fieldType': 'MREF',
              'name': 'sources',
              'label': 'Source variables',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_SourceVariables',
                'hrefCollection': '/api/v2/LifeCycle_SourceVariables',
                'name': 'LifeCycle_SourceVariables',
                'label': 'Source Variables',
                'description': 'Cohort source variables',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_SourceVariables/meta/variable',
                    'fieldType': 'STRING',
                    'name': 'variable',
                    'label': 'Variable',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': false,
                    'labelAttribute': true,
                    'unique': false,
                    'visible': true,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  },
                  {
                    'href': '/api/v2/LifeCycle_SourceVariables/meta/id',
                    'fieldType': 'STRING',
                    'name': 'id',
                    'label': 'ID',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': true,
                    'nillable': false,
                    'readOnly': true,
                    'labelAttribute': false,
                    'unique': true,
                    'visible': false,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  }
                ],
                'labelAttribute': 'variable',
                'idAttribute': 'id',
                'lookupAttributes': [],
                'isAbstract': false,
                'writable': false,
                'languageCode': 'en'
              },
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/target',
              'fieldType': 'XREF',
              'name': 'target',
              'label': 'Harmonized variable',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_CoreVariables',
                'hrefCollection': '/api/v2/LifeCycle_CoreVariables',
                'name': 'LifeCycle_CoreVariables',
                'label': 'LifeCycle Variables',
                'description': 'LifeCycle harmonized variable set',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_CoreVariables/meta/id',
                    'fieldType': 'STRING',
                    'name': 'id',
                    'label': 'ID',
                    'description': 'Variable ID',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': true,
                    'nillable': false,
                    'readOnly': true,
                    'labelAttribute': false,
                    'unique': true,
                    'visible': false,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  },
                  {
                    'href': '/api/v2/LifeCycle_CoreVariables/meta/variable',
                    'fieldType': 'STRING',
                    'name': 'variable',
                    'label': 'Variable',
                    'description': 'Short name of the variable (should not include spaces)',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': false,
                    'labelAttribute': true,
                    'unique': true,
                    'visible': true,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  }
                ],
                'labelAttribute': 'variable',
                'idAttribute': 'id',
                'lookupAttributes': [],
                'isAbstract': false,
                'writable': false,
                'languageCode': 'en'
              },
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/description',
              'fieldType': 'TEXT',
              'name': 'description',
              'label': 'Description',
              'attributes': [],
              'maxLength': 65535,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/syntax',
              'fieldType': 'TEXT',
              'name': 'syntax',
              'label': 'Syntax',
              'attributes': [],
              'maxLength': 65535,
              'auto': false,
              'nillable': true,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/status',
              'fieldType': 'CATEGORICAL',
              'name': 'status',
              'label': 'Match',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_Status',
                'hrefCollection': '/api/v2/LifeCycle_Status',
                'name': 'LifeCycle_Status',
                'label': 'Status',
                'description': 'Status of the harmonization',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_Status/meta/id',
                    'fieldType': 'STRING',
                    'name': 'id',
                    'label': 'ID',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': true,
                    'labelAttribute': false,
                    'unique': true,
                    'visible': false,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  },
                  {
                    'href': '/api/v2/LifeCycle_Status/meta/label',
                    'fieldType': 'STRING',
                    'name': 'label',
                    'label': 'Label',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': false,
                    'labelAttribute': true,
                    'unique': false,
                    'visible': true,
                    'lookupAttribute': true,
                    'isAggregatable': false
                  }
                ],
                'labelAttribute': 'label',
                'idAttribute': 'id',
                'lookupAttributes': [
                  'label'
                ],
                'isAbstract': false,
                'writable': false,
                'languageCode': 'en'
              },
              'auto': false,
              'nillable': true,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
              'attributes': [],
              'maxLength': 255,
              'auto': true,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/targetLabel',
              'fieldType': 'STRING',
              'name': 'targetLabel',
              'label': 'Harmonized variable',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false,
              'expression': 'target'
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/sourceLabel',
              'fieldType': 'STRING',
              'name': 'sourceLabel',
              'label': 'Source variables',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false,
              'expression': 'cohort'
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/dateOfUpdate',
              'fieldType': 'DATE',
              'name': 'dateOfUpdate',
              'label': 'Date of update',
              'description': 'Date the harmonization was last updated.',
              'attributes': [],
              'auto': false,
              'nillable': true,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'sourceLabel',
          'idAttribute': 'id',
          'lookupAttributes': [],
          'isAbstract': false,
          'writable': false,
          'languageCode': 'en'
        },
        '_href': '/api/v2/LifeCycle_Harmonizations/aaaacyc67m5p56qwh3nxvnaaae',
        'cohort': {
          '_href': '/api/v2/LifeCycle_Cohorts/DNBC',
          'id': 'DNBC',
          'label': 'DNBC'
        },
        'sources': [
          {
            '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67dgh76qwh3nxvnaaae',
            'variable': 'A157',
            'id': 'aaaacyc67dgh76qwh3nxvnaaae'
          },
          {
            '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67fxof6qwh3nxvnaaae',
            'variable': 'A158',
            'id': 'aaaacyc67fxof6qwh3nxvnaaae'
          },
          {
            '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67ibsp6qwh3nxvnaaae',
            'variable': 'SOCSTA',
            'id': 'aaaacyc67ibsp6qwh3nxvnaaae'
          }
        ],
        'target': {
          '_href': '/api/v2/LifeCycle_CoreVariables/aaaacyc66nrzd6qwh3nxvnaaae',
          'id': 'aaaacyc66nrzd6qwh3nxvnaaae',
          'variable': 'MAT_EDU'
        },
        'description': 'On-going education: \nIf A157 is coded as Yes,  then A158 was answered. \nA158 will be recoded into three levels corresponding the explanation in the harmonised variable.\n\n1 (High education): 8+9+10\n2 (Medium education): 2+3+4+5+6+7\n3 (Low education): 1 \n99 (missing): 12+13\n\nCompleted education: \nThe variables of 6 categories  will be recoded into three: \n1 (High education): 1+2 \n2 (Medium education): 3\n3 (Low education): 4+6\n99 (Missing): 7\n\n\nFinal variable for harmonisation: \nHighest of on-going and completed educational level.',
        'status': {
          '_href': '/api/v2/LifeCycle_Status/complete',
          'id': 'complete',
          'label': 'Complete'
        },
        'id': 'aaaacyc67m5p56qwh3nxvnaaae',
        'targetLabel': 'MAT_EDU',
        'sourceLabel': 'DNBC'
      }

      td.when(get('/api/v2/LifeCycle_Harmonizations/' + harmonization)).thenResolve(apiResponseMock)
      td.replace(api, 'get', get)

      const options = {
        payload: harmonization,
        expectedMutations: [
          {type: SET_HARMONIZATION_DATA, payload: apiResponseMock}
        ],
        state: mockedState
      }

      utils.testAction(actions.__GET_HARMONIZATIONS__, options, done)
    })
  })

  describe('GET_SOURCE_VARIABLES', () => {
    it('should retrieve source variables data from the server and store it in the state', done => {
      const get = td.function('api.get')
      const harmonization = 'aaaacyc67m5p56qwh3nxvnaaae'

      const apiResponseMock = {
        '_meta': {
          'href': '/api/v2/LifeCycle_Harmonizations',
          'hrefCollection': '/api/v2/LifeCycle_Harmonizations',
          'name': 'LifeCycle_Harmonizations',
          'label': 'Harmonizations',
          'description': 'Harmonization process',
          'attributes': [
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/cohort',
              'fieldType': 'XREF',
              'name': 'cohort',
              'label': 'Cohort',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_Cohorts',
                'hrefCollection': '/api/v2/LifeCycle_Cohorts',
                'name': 'LifeCycle_Cohorts',
                'label': 'Cohorts',
                'description': 'Participating Cohorts',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_Cohorts/meta/id',
                    'fieldType': 'STRING',
                    'name': 'id',
                    'label': 'ID',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': true,
                    'labelAttribute': false,
                    'unique': true,
                    'visible': false,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  },
                  {
                    'href': '/api/v2/LifeCycle_Cohorts/meta/label',
                    'fieldType': 'STRING',
                    'name': 'label',
                    'label': 'Label',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': false,
                    'labelAttribute': true,
                    'unique': false,
                    'visible': true,
                    'lookupAttribute': true,
                    'isAggregatable': false
                  }
                ],
                'labelAttribute': 'label',
                'idAttribute': 'id',
                'lookupAttributes': [
                  'label'
                ],
                'isAbstract': false,
                'writable': false,
                'languageCode': 'en'
              },
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/sources',
              'fieldType': 'MREF',
              'name': 'sources',
              'label': 'Source variables',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_SourceVariables',
                'hrefCollection': '/api/v2/LifeCycle_SourceVariables',
                'name': 'LifeCycle_SourceVariables',
                'label': 'Source Variables',
                'description': 'Cohort source variables',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_SourceVariables/meta/variable',
                    'fieldType': 'STRING',
                    'name': 'variable',
                    'label': 'Variable',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': false,
                    'labelAttribute': true,
                    'unique': false,
                    'visible': true,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  },
                  {
                    'href': '/api/v2/LifeCycle_SourceVariables/meta/id',
                    'fieldType': 'STRING',
                    'name': 'id',
                    'label': 'ID',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': true,
                    'nillable': false,
                    'readOnly': true,
                    'labelAttribute': false,
                    'unique': true,
                    'visible': false,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  }
                ],
                'labelAttribute': 'variable',
                'idAttribute': 'id',
                'lookupAttributes': [],
                'isAbstract': false,
                'writable': false,
                'languageCode': 'en'
              },
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/target',
              'fieldType': 'XREF',
              'name': 'target',
              'label': 'Harmonized variable',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_CoreVariables',
                'hrefCollection': '/api/v2/LifeCycle_CoreVariables',
                'name': 'LifeCycle_CoreVariables',
                'label': 'LifeCycle Variables',
                'description': 'LifeCycle harmonized variable set',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_CoreVariables/meta/id',
                    'fieldType': 'STRING',
                    'name': 'id',
                    'label': 'ID',
                    'description': 'Variable ID',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': true,
                    'nillable': false,
                    'readOnly': true,
                    'labelAttribute': false,
                    'unique': true,
                    'visible': false,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  },
                  {
                    'href': '/api/v2/LifeCycle_CoreVariables/meta/variable',
                    'fieldType': 'STRING',
                    'name': 'variable',
                    'label': 'Variable',
                    'description': 'Short name of the variable (should not include spaces)',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': false,
                    'labelAttribute': true,
                    'unique': true,
                    'visible': true,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  }
                ],
                'labelAttribute': 'variable',
                'idAttribute': 'id',
                'lookupAttributes': [],
                'isAbstract': false,
                'writable': false,
                'languageCode': 'en'
              },
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/description',
              'fieldType': 'TEXT',
              'name': 'description',
              'label': 'Description',
              'attributes': [],
              'maxLength': 65535,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/syntax',
              'fieldType': 'TEXT',
              'name': 'syntax',
              'label': 'Syntax',
              'attributes': [],
              'maxLength': 65535,
              'auto': false,
              'nillable': true,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/status',
              'fieldType': 'CATEGORICAL',
              'name': 'status',
              'label': 'Match',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_Status',
                'hrefCollection': '/api/v2/LifeCycle_Status',
                'name': 'LifeCycle_Status',
                'label': 'Status',
                'description': 'Status of the harmonization',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_Status/meta/id',
                    'fieldType': 'STRING',
                    'name': 'id',
                    'label': 'ID',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': true,
                    'labelAttribute': false,
                    'unique': true,
                    'visible': false,
                    'lookupAttribute': false,
                    'isAggregatable': false
                  },
                  {
                    'href': '/api/v2/LifeCycle_Status/meta/label',
                    'fieldType': 'STRING',
                    'name': 'label',
                    'label': 'Label',
                    'attributes': [],
                    'maxLength': 255,
                    'auto': false,
                    'nillable': false,
                    'readOnly': false,
                    'labelAttribute': true,
                    'unique': false,
                    'visible': true,
                    'lookupAttribute': true,
                    'isAggregatable': false
                  }
                ],
                'labelAttribute': 'label',
                'idAttribute': 'id',
                'lookupAttributes': [
                  'label'
                ],
                'isAbstract': false,
                'writable': false,
                'languageCode': 'en'
              },
              'auto': false,
              'nillable': true,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/id',
              'fieldType': 'STRING',
              'name': 'id',
              'label': 'ID',
              'attributes': [],
              'maxLength': 255,
              'auto': true,
              'nillable': false,
              'readOnly': true,
              'labelAttribute': false,
              'unique': true,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/targetLabel',
              'fieldType': 'STRING',
              'name': 'targetLabel',
              'label': 'Harmonized variable',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false,
              'expression': 'target'
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/sourceLabel',
              'fieldType': 'STRING',
              'name': 'sourceLabel',
              'label': 'Source variables',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': true,
              'unique': false,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': false,
              'expression': 'cohort'
            },
            {
              'href': '/api/v2/LifeCycle_Harmonizations/meta/dateOfUpdate',
              'fieldType': 'DATE',
              'name': 'dateOfUpdate',
              'label': 'Date of update',
              'description': 'Date the harmonization was last updated.',
              'attributes': [],
              'auto': false,
              'nillable': true,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': false
            }
          ],
          'labelAttribute': 'sourceLabel',
          'idAttribute': 'id',
          'lookupAttributes': [],
          'isAbstract': false,
          'writable': false,
          'languageCode': 'en'
        },
        '_href': '/api/v2/LifeCycle_Harmonizations/aaaacyc67m5p56qwh3nxvnaaae',
        'cohort': {
          '_href': '/api/v2/LifeCycle_Cohorts/DNBC',
          'id': 'DNBC',
          'label': 'DNBC'
        },
        'sources': [
          {
            '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67dgh76qwh3nxvnaaae',
            'variable': 'A157',
            'id': 'aaaacyc67dgh76qwh3nxvnaaae'
          },
          {
            '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67fxof6qwh3nxvnaaae',
            'variable': 'A158',
            'id': 'aaaacyc67fxof6qwh3nxvnaaae'
          },
          {
            '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67ibsp6qwh3nxvnaaae',
            'variable': 'SOCSTA',
            'id': 'aaaacyc67ibsp6qwh3nxvnaaae'
          }
        ],
        'target': {
          '_href': '/api/v2/LifeCycle_CoreVariables/aaaacyc66nrzd6qwh3nxvnaaae',
          'id': 'aaaacyc66nrzd6qwh3nxvnaaae',
          'variable': 'MAT_EDU'
        },
        'description': 'On-going education: \nIf A157 is coded as Yes,  then A158 was answered. \nA158 will be recoded into three levels corresponding the explanation in the harmonised variable.\n\n1 (High education): 8+9+10\n2 (Medium education): 2+3+4+5+6+7\n3 (Low education): 1 \n99 (missing): 12+13\n\nCompleted education: \nThe variables of 6 categories  will be recoded into three: \n1 (High education): 1+2 \n2 (Medium education): 3\n3 (Low education): 4+6\n99 (Missing): 7\n\n\nFinal variable for harmonisation: \nHighest of on-going and completed educational level.',
        'status': {
          '_href': '/api/v2/LifeCycle_Status/complete',
          'id': 'complete',
          'label': 'Complete'
        },
        'id': 'aaaacyc67m5p56qwh3nxvnaaae',
        'targetLabel': 'MAT_EDU',
        'sourceLabel': 'DNBC'
      }

      td.when(get('/api/v2/LifeCycle_Harmonizations/' + harmonization)).thenResolve(apiResponseMock)
      td.replace(api, 'get', get)

      const options = {
        payload: harmonization,
        expectedMutations: [
          {type: SET_HARMONIZATION_DATA, payload: apiResponseMock}
        ],
        state: mockedState
      }

      utils.testAction(actions.__GET_HARMONIZATIONS__, options, done)
    })
  })
})
