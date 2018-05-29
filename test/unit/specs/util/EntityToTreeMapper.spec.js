import EntityToTreeMapper from '@/util/EntityToTreeMapper.js'
import EntityV2Response from '../mock-responses/EntityV2Response'

describe('EntityToTreeMapper', () => {
  const entities = EntityV2Response.mockRawTreeData.items

  it('should map a MOLGENIS entity to a tree node', () => {
    const actual = EntityToTreeMapper.generateTreeNodes(entities)
    const expected = [
      {
        'children': [],
        'disabled': true,
        'icon': 'fa fa-table',
        'id': 'p2',
        'loading': false,
        'opened': false,
        'selected': false,
        'text': 'Parent2',
        'value': 'Parent2',
        'variables': []
      },
      {
        'children': [
          {
            'children': [],
            'disabled': false,
            'icon': 'fa fa-table',
            'id': 'c1',
            'loading': false,
            'opened': false,
            'selected': false,
            'text': 'Child1',
            'value': 'Child1',
            'variables': [
              'test'
            ]
          },
          {
            'children': [
              {
                'children': [],
                'disabled': false,
                'icon': 'fa fa-table',
                'id': 'gc1',
                'loading': false,
                'opened': false,
                'selected': false,
                'text': 'Grandchild1',
                'value': 'Grandchild1',
                'variables': [
                  'test'
                ]
              }
            ],
            'disabled': false,
            'icon': 'fa fa-folder-o',
            'id': 'c2',
            'loading': false,
            'opened': false,
            'selected': false,
            'text': 'Child2',
            'value': 'Child2',
            'variables': [
              'test'
            ]
          }
        ],
        'disabled': true,
        'icon': 'fa fa-folder-o',
        'id': 'p1',
        'loading': false,
        'opened': false,
        'selected': false,
        'text': 'Parent1',
        'value': 'Parent1',
        'variables': []
      }
    ]

    expect(actual).to.deep.equal(expected)
  })

  it('should return true if a tree node has no variables', () => {
    const node = {variables: []}
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
