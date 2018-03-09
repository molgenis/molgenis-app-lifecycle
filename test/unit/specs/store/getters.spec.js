import getters from '@/store/getters'

describe('getters', () => {
  const mockedState = {
    tree: {
      data: [
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
    }
  }
  it('getTreeData returns a clone of the tree data array in the state', () => {
    const clone = getters.getTreeData(mockedState)
    expect(clone).to.not.equal(mockedState.tree.data)
    expect(clone).to.deep.equal(mockedState.tree.data)
  })
})
