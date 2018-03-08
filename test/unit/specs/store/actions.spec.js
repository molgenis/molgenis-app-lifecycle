import utils from '@molgenis/molgenis-vue-test-utils'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import actions from '@/store/actions'

import {
  SET_TREE_DATA
} from '@/store/mutations'

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
      data: {},
      error: undefined
    }
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
          {type: SET_TREE_DATA, payload: treeStructure}
        ],
        state: mockedState
      }
      utils.testAction(actions.__GET_TREE_DATA__, options, done)
    })
  })
})
