import { expect } from 'chai'
import EntityToTreeMapper from '@/util/EntityToTreeMapper.js'
import EntityV2Response from '../mock-responses/EntityV2Response'
import TreeMapperResponse from '../mock-responses/TreeMapperResponse'

describe('EntityToTreeMapper', () => {
  const mockApiResponse = EntityV2Response.mockRawTreeData.items
  const settings = {
    'id': 'key',
    'label': 'title',
    'folderIcon': '',
    'leafIcon': 'fa fa-file-o',
    'isOpened': true,
    'isSelected': false,
    'isLoading': false
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
    const expected = TreeMapperResponse.mockTreeData
    expect(mappedResponse.length).to.equal(2)
    expect(mappedResponse).to.deep.equal(expected)
  })

  it('returns false when node does not have variables', () => {
    const node = {
      'id': 'test',
      'variables': []
    }
    const isDisabled = EntityToTreeMapper.disableNode(node)
    expect(isDisabled).to.equal(true)
  })

  it('returns true when node has variables', () => {
    const node = {
      'id': 'test',
      'variables': ['test']
    }
    const isDisabled = EntityToTreeMapper.disableNode(node)
    expect(isDisabled).to.equal(false)
  })
})
