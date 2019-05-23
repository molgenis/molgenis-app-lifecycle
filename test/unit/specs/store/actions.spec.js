import utils from '@molgenis/molgenis-vue-test-utils'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import actions from '@/store/actions'
import entities from '../../../data/entities'

const replaceSuccessfulGet = (uri, response) => {
  const get = td.function('api.get')
  td.when(get(uri)).thenResolve(response)
  td.replace(api, 'get', get)
}

const replaceFailingGet = (uri, response) => {
  const get = td.function('api.get')
  td.when(get(uri)).thenReject(response)
  td.replace(api, 'get', get)
}

describe('actions', () => {
  beforeEach(() => td.reset())

  describe('FETCH_COHORTS', () => {
    it('should commit a list of cohorts to the state when response is OK', done => {
      const response = {items: [{id: '1'}, {id: '2'}]}
      replaceSuccessfulGet('/api/v2/LifeCycle_Cohorts?num=10000', response)

      const options = {expectedMutations: [{type: 'SET_COHORTS', payload: ['1', '2']}]}
      utils.testAction(actions.FETCH_COHORTS, options, done)
    })

    it('should commit an error to the state when response is not OK', done => {
      const error = 'error'
      replaceFailingGet('/api/v2/LifeCycle_Cohorts?num=10000', error)

      const options = {expectedMutations: [{type: 'SET_ERROR', payload: 'error'}]}
      utils.testAction(actions.FETCH_COHORTS, options, done)
    })
  })

  describe('FETCH_HARMONIZATION', () => {
    const id = 'id'

    it('should commit harmonization data and metadata to the state', done => {
      const response = {_meta: {id: 'id'}, items: ['item']}
      replaceSuccessfulGet('/api/v2/LifeCycle_Harmonizations/id?attrs=*,sources(*),target(*)', response)

      const options = {
        payload: id,
        expectedMutations: [
          {type: 'SET_HARMONIZATION', payload: response},
          {type: 'SET_HARMONIZATION_METADATA', payload: response._meta}
        ]
      }
      utils.testAction(actions.FETCH_HARMONIZATION, options, done)
    })

    it('should commit an error to the state when response is not OK', done => {
      const error = 'error'
      replaceFailingGet('/api/v2/LifeCycle_Harmonizations/id?attrs=*,sources(*),target(*)', error)

      const options = {payload: id, expectedMutations: [{type: 'SET_ERROR', payload: 'error'}]}
      utils.testAction(actions.FETCH_HARMONIZATION, options, done)
    })
  })

  describe('FETCH_TREE_MENU', () => {
    it('should retrieve tree data from the server and store it in the state', done => {
      replaceSuccessfulGet('/api/v2/UI_Menu?attrs=key,title,parent(key),variables(variable,label,datatype,values,unit,match,comments,harmonizations(~id,cohort(id,label),status(id,label))),children(key),position&num=10000', entities)
      const payload = [
        {
          'children': [],
          'disabled': true,
          'icon': 'fas fa-table fa-sm',
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
                  'icon': 'fas fa-table fa-sm',
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
              'icon': 'fas fa-table fa-sm',
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

      const options = {expectedMutations: [{type: 'SET_TREE_MENU', payload: payload}]}
      utils.testAction(actions.FETCH_TREE_MENU, options, done)
    })

    it('should set error when api request is invalid', done => {
      const error = 'error'
      replaceFailingGet('/api/v2/UI_Menu?attrs=key,title,parent(key),variables(variable,label,datatype,values,unit,match,comments,harmonizations(~id,cohort(id,label),status(id,label))),children(key),position&num=10000', error)

      const options = {expectedMutations: [{type: 'SET_ERROR', payload: 'error'}]}
      utils.testAction(actions.FETCH_TREE_MENU, options, done)
    })
  })
})
