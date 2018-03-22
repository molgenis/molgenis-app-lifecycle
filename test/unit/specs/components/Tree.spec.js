import td from 'testdouble'
import Tree from '@/components/Tree'
import TreeMapperResponse from '../mock-responses/TreeMapperResponse'
import { shallow } from 'vue-test-utils'


describe('Tree unit tests', () => {
  const mockTreeData = JSON.parse(JSON.stringify(TreeMapperResponse.mockTreeData))

  const treeClick = td.function()

  const propsData = {treeData: mockTreeData, itemClick: treeClick}

  let wrapper

  beforeEach(function () {
    wrapper = shallow(Tree, {propsData: propsData} )
  })

  it('should load "Tree" component as a name', () => {
    expect(Tree.name).to.equal('Tree')
  })

  it('should color the tree leafs on filter', () => {
    wrapper.searchInput = 'test'
    const node = {
      model: {
        text: 'test'
      },
      $el: {
        querySelector: (selector) => {
          return {
            style: {
              color: ''
            }
          }
        }
      }
    }
    wrapper.vm.setTreeLeafColor(node)

  })
})
