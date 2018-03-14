import utils from '@molgenis/molgenis-vue-test-utils'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import actions from '@/store/actions'

import {
  SET_COHORT_DATA,
  SET_CORE_VARIABLE_DATA,
  SET_HARMONIZATION_DATA,
  SET_RAW_TREE_DATA,
  SET_SOURCE_VARIABLES,
  SET_TREE_DATA
} from '@/store/mutations'
import { SET_CORE_VARIABLE_COLUMNS } from '../../../../src/store/mutations'

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
      const payload = 'aaaacyc67m5p56qwh3nxvnaaae'

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

      td.when(get('/api/v2/LifeCycle_Harmonizations/' + payload)).thenResolve(apiResponseMock)
      td.replace(api, 'get', get)

      const options = {
        payload: payload,
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
      const query = '?q=variable=in=(aaaacyc67dgh76qwh3nxvnaaae,aaaacyc67fxof6qwh3nxvnaaae,aaaacyc67ibsp6qwh3nxvnaaae)'
      const payload = [
        {'variable': 'aaaacyc67dgh76qwh3nxvnaaae'},
        {'variable': 'aaaacyc67fxof6qwh3nxvnaaae'},
        {'variable': 'aaaacyc67ibsp6qwh3nxvnaaae'}
      ]

      const apiResponseMock = {
        'items': [{
          '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67dgh76qwh3nxvnaaae',
          'cohort': {'_href': '/api/v2/LifeCycle_Cohorts/DNBC', 'id': 'DNBC', 'label': 'DNBC'},
          'variable': 'A157',
          'description': 'Are you attending school or vocational training?',
          'values': '1. Yes\n2. No->A159\n3. Do not know->A159\n4. Do not want to answer->A159',
          'datatype': {'_href': '/api/v2/LifeCycle_DataTypes/categorical', 'id': 'categorical', 'label': 'Categorical'},
          'collectionType': 'Phone Interview 1 (12 weeks)',
          'id': 'aaaacyc67dgh76qwh3nxvnaaae',
          'cohortLabel': 'DNBC'
        }, {
          '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67fxof6qwh3nxvnaaae',
          'cohort': {'_href': '/api/v2/LifeCycle_Cohorts/DNBC', 'id': 'DNBC', 'label': 'DNBC'},
          'variable': 'A158',
          'description': 'What education are you attending?',
          'values': '1. basic school , to 9th grade\n2. HTX (higher technical exam) or HHX (higher commercial exam)\n3. high school\n4. semi-skilled worker training\n5. basic commercial vocational training\n6. professional training\n7. other vocational training\n8. short further education, less than 3 years\n9. medium further education, more than 3-4 years\n10.long further higher education more than 4 years\n11.other education describe________________\n12.do not know\n13.do not want to answer',
          'datatype': {'_href': '/api/v2/LifeCycle_DataTypes/categorical', 'id': 'categorical', 'label': 'Categorical'},
          'collectionType': 'Phone Interview 1 (12 weeks)',
          'id': 'aaaacyc67fxof6qwh3nxvnaaae',
          'cohortLabel': 'DNBC'
        }, {
          '_href': '/api/v2/LifeCycle_SourceVariables/aaaacyc67ibsp6qwh3nxvnaaae',
          'cohort': {'_href': '/api/v2/LifeCycle_Cohorts/DNBC', 'id': 'DNBC', 'label': 'DNBC'},
          'variable': 'SOCSTA',
          'description': 'Highest educational level completed',
          'values': '1: Long further education or managers of larger companies.     \n2: Medium further education or managers of smaller companies                         \n3: Vocational training, skilled work (Upper secondary)\n4: Unskilled work                \n5: On-going education (attained from A157 - eliminate here, because it is wanted to have highest of on-going and completed)\n6: out of the labour market \n7: unquantifiable',
          'datatype': {'_href': '/api/v2/LifeCycle_DataTypes/categorical', 'id': 'categorical', 'label': 'Categorical'},
          'collectionType': 'Phone interview 1 (12 weeks)',
          'id': 'aaaacyc67ibsp6qwh3nxvnaaae',
          'cohortLabel': 'DNBC'
        }]
      }

      td.when(get('/api/v2/LifeCycle_SourceVariables' + query)).thenResolve(apiResponseMock)
      td.replace(api, 'get', get)

      const options = {
        payload: payload,
        expectedMutations: [
          {type: SET_SOURCE_VARIABLES, payload: apiResponseMock.items}
        ],
        state: mockedState
      }

      utils.testAction(actions.__GET_SOURCE_VARIABLES__, options, done)
    })
  })

  describe('GET_COHORTS', () => {
    it('should retrieve cohorts data from the server and store it in the state', done => {
      const get = td.function('api.get')

      const apiResponseMock = {
        'items': [
          {
            '_href': '/api/v2/LifeCycle_Cohorts/ALSPAC',
            'id': 'ALSPAC',
            'label': 'ALSPAC'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/BIB',
            'id': 'BIB',
            'label': 'BIB'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/CHOP',
            'id': 'CHOP',
            'label': 'CHOP'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/DNBC',
            'id': 'DNBC',
            'label': 'DNBC'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/EDEN',
            'id': 'EDEN',
            'label': 'EDEN'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/ELFE',
            'id': 'ELFE',
            'label': 'ELFE'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/GECKO',
            'id': 'GECKO',
            'label': 'GECKO'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/HBCS',
            'id': 'HBCS',
            'label': 'HBCS'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/INMA',
            'id': 'INMA',
            'label': 'INMA'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/MoBa',
            'id': 'MoBa',
            'label': 'MoBa'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/NFBC66',
            'id': 'NFBC66',
            'label': 'NFBC66'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/NFBC86',
            'id': 'NFBC86',
            'label': 'NFBC86'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/NINFEA',
            'id': 'NINFEA',
            'label': 'NINFEA'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/RAINE',
            'id': 'RAINE',
            'label': 'RAINE'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/RHEA',
            'id': 'RHEA',
            'label': 'RHEA'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/SWS',
            'id': 'SWS',
            'label': 'SWS'
          },
          {
            '_href': '/api/v2/LifeCycle_Cohorts/GenR',
            'id': 'GenR',
            'label': 'Gen R'
          }
        ]
      }

      td.when(get('/api/v2/LifeCycle_Cohorts')).thenResolve(apiResponseMock)
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: SET_COHORT_DATA, payload: apiResponseMock.items}
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

      const apiResponseMock = {
        'href': '/api/v2/LifeCycle_CoreVariables',
        'meta': {
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
            },
            {
              'href': '/api/v2/LifeCycle_CoreVariables/meta/label',
              'fieldType': 'STRING',
              'name': 'label',
              'label': 'Label',
              'description': 'Longer human readable name of the variable',
              'attributes': [],
              'maxLength': 255,
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
              'href': '/api/v2/LifeCycle_CoreVariables/meta/datatype',
              'fieldType': 'CATEGORICAL',
              'name': 'datatype',
              'label': 'Data type',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_DataTypes',
                'hrefCollection': '/api/v2/LifeCycle_DataTypes',
                'name': 'LifeCycle_DataTypes',
                'label': 'Data types',
                'description': 'Datetype of the variable',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_DataTypes/meta/id',
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
                    'href': '/api/v2/LifeCycle_DataTypes/meta/label',
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
              'href': '/api/v2/LifeCycle_CoreVariables/meta/values',
              'fieldType': 'TEXT',
              'name': 'values',
              'label': 'Values',
              'description': 'Acceptable values for the variable.',
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
              'href': '/api/v2/LifeCycle_CoreVariables/meta/unit',
              'fieldType': 'CATEGORICAL',
              'name': 'unit',
              'label': 'Unit',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_Units',
                'hrefCollection': '/api/v2/LifeCycle_Units',
                'name': 'LifeCycle_Units',
                'label': 'Units',
                'description': 'Units of measurement',
                'attributes': [
                  {
                    'href': '/api/v2/LifeCycle_Units/meta/id',
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
                    'href': '/api/v2/LifeCycle_Units/meta/label',
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
              'href': '/api/v2/LifeCycle_CoreVariables/meta/match',
              'fieldType': 'CATEGORICAL',
              'name': 'match',
              'label': 'Match',
              'description': '',
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
              'href': '/api/v2/LifeCycle_CoreVariables/meta/definition',
              'fieldType': 'TEXT',
              'name': 'definition',
              'label': 'Definition',
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
              'href': '/api/v2/LifeCycle_CoreVariables/meta/comments',
              'fieldType': 'TEXT',
              'name': 'comments',
              'label': 'Comments',
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
              'href': '/api/v2/LifeCycle_CoreVariables/meta/harmonizations',
              'fieldType': 'ONE_TO_MANY',
              'name': 'harmonizations',
              'label': 'Harmonized variables',
              'attributes': [],
              'refEntity': {
                'href': '/api/v2/LifeCycle_Harmonizations',
                'hrefCollection': '/api/v2/LifeCycle_Harmonizations',
                'name': 'LifeCycle_Harmonizations',
                'label': 'Harmonizations',
                'description': 'Harmonization process',
                'attributes': [
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
                  }
                ],
                'labelAttribute': 'sourceLabel',
                'idAttribute': 'id',
                'lookupAttributes': [],
                'isAbstract': false,
                'writable': false,
                'languageCode': 'en'
              },
              'mappedBy': 'target',
              'auto': false,
              'nillable': true,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
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
        'start': 0,
        'num': 100,
        'total': 1,
        'items': [
          {
            '_href': '/api/v2/LifeCycle_CoreVariables/aaaacyc66nrzd6qwh3nxvnaaae',
            'id': 'aaaacyc66nrzd6qwh3nxvnaaae',
            'variable': 'MAT_EDU',
            'label': 'Maternal education',
            'datatype': {
              '_href': '/api/v2/LifeCycle_DataTypes/categorical',
              'id': 'categorical',
              'label': 'Categorical'
            },
            'values': '1 = High\n2 = Medium\n3 = Low',
            'match': {
              '_href': '/api/v2/LifeCycle_Status/partial',
              'id': 'partial',
              'label': 'Partial'
            },
            'comments': 'Education of the mother measured between 1 year prepartum and 1 year postpartum. \n\nLevel of education based on the highest of on-going and completed education.  \n\nIf more than one are declared (different time points, but within the defined time frame), using the highest level declared.',
            'harmonizations': [
              {
                '_href': '/api/v2/LifeCycle_Harmonizations/aaaacyc67m5p56qwh3nxvnaaae',
                'id': 'aaaacyc67m5p56qwh3nxvnaaae',
                'sourceLabel': 'DNBC'
              }
            ]
          }
        ]
      }

      const columnsMock =
        [
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
          },
          {
            'href': '/api/v2/LifeCycle_CoreVariables/meta/label',
            'fieldType': 'STRING',
            'name': 'label',
            'label': 'Label',
            'description': 'Longer human readable name of the variable',
            'attributes': [],
            'maxLength': 255,
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
            'href': '/api/v2/LifeCycle_CoreVariables/meta/datatype',
            'fieldType': 'CATEGORICAL',
            'name': 'datatype',
            'label': 'Data type',
            'attributes': [],
            'refEntity': {
              'href': '/api/v2/LifeCycle_DataTypes',
              'hrefCollection': '/api/v2/LifeCycle_DataTypes',
              'name': 'LifeCycle_DataTypes',
              'label': 'Data types',
              'description': 'Datetype of the variable',
              'attributes': [
                {
                  'href': '/api/v2/LifeCycle_DataTypes/meta/id',
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
                  'href': '/api/v2/LifeCycle_DataTypes/meta/label',
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
            'href': '/api/v2/LifeCycle_CoreVariables/meta/values',
            'fieldType': 'TEXT',
            'name': 'values',
            'label': 'Values',
            'description': 'Acceptable values for the variable.',
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
            'href': '/api/v2/LifeCycle_CoreVariables/meta/unit',
            'fieldType': 'CATEGORICAL',
            'name': 'unit',
            'label': 'Unit',
            'attributes': [],
            'refEntity': {
              'href': '/api/v2/LifeCycle_Units',
              'hrefCollection': '/api/v2/LifeCycle_Units',
              'name': 'LifeCycle_Units',
              'label': 'Units',
              'description': 'Units of measurement',
              'attributes': [
                {
                  'href': '/api/v2/LifeCycle_Units/meta/id',
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
                  'href': '/api/v2/LifeCycle_Units/meta/label',
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
            'href': '/api/v2/LifeCycle_CoreVariables/meta/match',
            'fieldType': 'CATEGORICAL',
            'name': 'match',
            'label': 'Match',
            'description': '',
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
            'href': '/api/v2/LifeCycle_CoreVariables/meta/definition',
            'fieldType': 'TEXT',
            'name': 'definition',
            'label': 'Definition',
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
            'href': '/api/v2/LifeCycle_CoreVariables/meta/comments',
            'fieldType': 'TEXT',
            'name': 'comments',
            'label': 'Comments',
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
          }
        ]

      td.when(generateColumns(apiResponseMock.meta.attributes)).thenReturn(columnsMock)
      td.when(get('/api/v2/LifeCycle_CoreVariables' + query)).thenResolve(apiResponseMock)
      td.replace(api, 'get', get)

      const options = {
        payload: 'aaaacyc66nrzd6qwh3nxvnaaae',
        expectedMutations: [
          {type: SET_CORE_VARIABLE_COLUMNS, payload: columnsMock},
          {type: SET_CORE_VARIABLE_DATA, payload: apiResponseMock.items}
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
