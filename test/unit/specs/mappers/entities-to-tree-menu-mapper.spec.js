import EntityToTreeMapper from '@/mappers/entities-to-tree-menu-mapper'
import entities from '../../../data/entities'

describe('mappers', () => {
  describe('entityToTreeMenuMapper', () => {
    it('should map a MOLGENIS entity to a tree node', () => {
      const actual = EntityToTreeMapper.mapEntitiesToTreeMenu(entities)
      const expected = [
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

      expect(actual).to.deep.equal(expected)
    })

    it('should return true if a tree node has no variables and the node has no children', () => {
      const node = {variables: [], children: []}
      const actual = EntityToTreeMapper.isNodeDisabled(node)
      const expected = true

      expect(actual).to.equal(expected)
    })

    it('should return false if a tree node has one or more variables', () => {
      const node = {variables: ['1', '2']}
      const actual = EntityToTreeMapper.isNodeDisabled(node)
      const expected = false

      expect(actual).to.equal(expected)
    })
  })
})
