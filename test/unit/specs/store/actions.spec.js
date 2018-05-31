import utils from '@molgenis/molgenis-vue-test-utils'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import actions from '@/store/actions'
import entities from '../../../data/entities'

describe('actions', () => {
  beforeEach(() => td.reset())

  const get = td.function('api.get')
  const state = {
    cohorts: [],
    error: '',
    harmonizationData: [],
    harmonizationMetadata: {},
    selectedNodeLabel: '',
    selectedNodeVariables: [],
    treeMenu: []
  }

  describe('FETCH_TREE_MENU', () => {
    it('should retrieve tree data from the server and store it in the state', done => {
      td.when(get('/api/v2/UI_Menu?attrs=*,variables(*)&num=10000')).thenResolve(entities)
      td.replace(api, 'get', get)

      const payload = [
        {
          'children': [],
          'disabled': true,
          'icon': 'fa fa-table',
          'id': 'p2',
          'loading': false,
          'opened': false,
          'position': 1,
          'selected': false,
          'text': 'Parent2',
          'value': 'Parent2',
          'variables': []
        },
        {
          'children': [
            {
              'children': [
                {
                  'children': [],
                  'disabled': false,
                  'icon': 'fa fa-table',
                  'id': 'gc1',
                  'loading': false,
                  'opened': false,
                  'position': 1,
                  'selected': false,
                  'text': 'Grandchild1',
                  'value': 'Grandchild1',
                  'variables': [
                    'test'
                  ]
                }
              ],
              'disabled': false,
              'icon': '',
              'id': 'c2',
              'loading': false,
              'opened': false,
              'position': 1,
              'selected': false,
              'text': 'Child2',
              'value': 'Child2',
              'variables': [
                'test'
              ]
            },
            {
              'children': [],
              'disabled': false,
              'icon': 'fa fa-table',
              'id': 'c1',
              'loading': false,
              'opened': false,
              'position': 2,
              'selected': false,
              'text': 'Child1',
              'value': 'Child1',
              'variables': [
                'test'
              ]
            }
          ],
          'disabled': false,
          'icon': '',
          'id': 'p1',
          'loading': false,
          'opened': false,
          'position': 2,
          'selected': false,
          'text': 'Parent1',
          'value': 'Parent1',
          'variables': []
        }
      ]

      const options = {
        expectedMutations: [
          {type: 'SET_TREE_MENU', payload: payload}
        ],
        state: state
      }
      utils.testAction(actions.FETCH_TREE_MENU, options, done)
    })

    it('should set error when api request is invalid', done => {
      td.when(get('/api/v2/UI_Menu?attrs=*,variables(*)&num=10000')).thenReject('ERROR')
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: 'SET_ERROR', payload: 'ERROR'}
        ],
        state: state
      }
      utils.testAction(actions.FETCH_TREE_MENU, options, done)
    })
  })
})
