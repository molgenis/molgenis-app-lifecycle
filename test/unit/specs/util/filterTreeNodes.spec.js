import filterTreeNodes from '@/util/filter-tree-nodes'

describe('filter-tree-nodes', () => {
  const treeNodes = [
    {
      text: 'parent 1',
      children: [
        {
          text: 'child 1',
          children: [
            {
              text: 'grandchild 1'
            },
            {
              text: 'grandchild 2'
            }
          ]
        }
      ]
    },
    {
      text: 'parent 2',
      children: [
        {
          text: 'child 3'
        }
      ]
    }
  ]

  it('should filter a tree of nodes based on the query "child 3"', () => {
    const query = 'child 3'
    const actual = filterTreeNodes(treeNodes, query)
    const expected = [
      {
        text: 'parent 2',
        children: [
          {
            text: 'child 3'
          }
        ]
      }
    ]

    expect(actual).to.deep.equal(expected)
  })

  it('should filter a tree of nodes based on the query "grandchild 1"', () => {
    const query = 'grandchild 1'
    const actual = filterTreeNodes(treeNodes, query)
    const expected = [
      {
        text: 'parent 1',
        children: [
          {
            text: 'child 1',
            children: [
              {
                text: 'grandchild 1'
              }
            ]
          }
        ]
      }
    ]

    expect(actual).to.deep.equal(expected)
  })

  it('should filter a tree of nodes based on the query "parent"', () => {
    const query = 'parent'
    const actual = filterTreeNodes(treeNodes, query)
    const expected = [
      {
        text: 'parent 1',
        children: [
          {
            text: 'child 1',
            children: [
              {
                text: 'grandchild 1'
              },
              {
                text: 'grandchild 2'
              }
            ]
          }
        ]
      },
      {
        text: 'parent 2',
        children: [
          {
            text: 'child 3'
          }
        ]
      }
    ]

    expect(actual).to.deep.equal(expected)
  })

  it('should filter a tree of nodes based on the query "child"', () => {
    const query = 'child'
    const actual = filterTreeNodes(treeNodes, query)
    const expected = [
      {
        text: 'parent 1',
        children: [
          {
            text: 'child 1',
            children: [
              {
                text: 'grandchild 1'
              },
              {
                text: 'grandchild 2'
              }
            ]
          }
        ]
      },
      {
        text: 'parent 2',
        children: [
          {
            text: 'child 3'
          }
        ]
      }
    ]

    expect(actual).to.deep.equal(expected)
  })
})
