import { expect } from 'chai'
import EntityToTreeMapper from '@/util/EntityToTreeMapper.js'

describe('EntityToTreeMapper', () => {
  const mockApiResponse = {
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
  const settings = {
    'id': 'key',
    'label': 'title',
    'folderIcon': '',
    'leafIcon': 'fa fa-file-o'
  }
  it('Returns the next child in the tree', () => {
    const parentNode = {
      'id': 'p1',
      'label': 'parent1',
      'children': [
        {
          'id': 'c1',
          'label': 'child1',
          'children': []
        },
        {
          'id': 'c2',
          'label': 'child2',
          'children': []
        }
      ]
    }
    const positionOfChild = 1
    const child2 = {
      'id': 'c2',
      'label': 'child2',
      'children': []
    }
    const next = EntityToTreeMapper.getNextChild(parentNode, positionOfChild)
    expect(next).to.deep.equal(child2)
  })
  it('Adds new child node to tree', () => {
    const tree = [
      {
        'id': 'p1',
        'label': 'parent1',
        'children': []
      }
    ]
    const path = [0]
    const newChild = {
      'id': 'c1',
      'label': 'child1',
      'children': []
    }
    const newTree = EntityToTreeMapper.addChildToTree(tree, path, newChild).forest
    expect(newTree[0].children).to.include(newChild)
  })
  it('Adds new grandchild node to tree', () => {
    const tree = [
      {
        'id': 'p1',
        'label': 'parent1',
        'children': [
          {
            'id': 'c1',
            'label': 'child1',
            'children': []
          },
          {
            'id': 'c2',
            'label': 'child2',
            'children': []
          }
        ]
      }
    ]
    const path = [0, 1]
    const newChild = {
      'id': 'gc1',
      'label': 'grandchild1',
      'children': []
    }
    const newTree = EntityToTreeMapper.addChildToTree(tree, path, newChild).forest
    expect(newTree[0].children[1].children[0]).to.deep.equal(newChild)
  })
  it('Has to create a node element', () => {
    const text = 'test'
    const icon = ''
    const bool = false
    const children = []
    const expected = {
      'id': text,
      'text': text,
      'value': text,
      'icon': icon,
      'opened': bool,
      'selected': bool,
      'disabled': bool,
      'loading': bool,
      'children': children
    }
    const observed = EntityToTreeMapper.createNewNode(text, text, icon, children, bool, bool, bool, bool)
    expect(observed).to.deep.equal(expected)
  })
  it('converts the api response to tree data with two root elements', () => {
    const mappedResponse = EntityToTreeMapper.generateTreeData(mockApiResponse, settings)
    const expected = [
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
    expect(mappedResponse.length).to.equal(2)
    expect(mappedResponse).to.deep.equal(expected)
  })
})
