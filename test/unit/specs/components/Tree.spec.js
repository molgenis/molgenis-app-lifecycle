import Tree from '@/components/Tree'
import { shallow } from 'vue-test-utils'
import td from 'testdouble'

describe('Tree unit tests', () => {
  const propsData = {
    treeNodes: [
      {text: 'test1', children: []},
      {text: 'test2', children: []}
    ],
    itemClick: td.function()
  }

  it('should load "Tree" as the component name', () => {
    const wrapper = shallow(Tree, {propsData})
    expect(wrapper.name()).to.equal('Tree')
  })

  it('should toggle collapse on click of button', () => {
    const wrapper = shallow(Tree, {propsData})
    expect(wrapper.vm.isMenuCollapsed).to.equal(false)
    expect(wrapper.vm.collapseText).to.equal('-')

    wrapper.vm.toggleCollapse()
    expect(wrapper.vm.isMenuCollapsed).to.equal(true)
    expect(wrapper.vm.collapseText).to.equal('+')
  })

  it('should compute which tree nodes to show when query changes', () => {
    const wrapper = shallow(Tree, {propsData})
    expect(wrapper.vm.filteredTreeNodes).to.deep.equal(propsData.treeNodes)

    wrapper.setData({query: 'test1'})
    const filteredTreeNodes = [{text: 'test1', children: []}]
    expect(wrapper.vm.filteredTreeNodes).to.deep.equal(filteredTreeNodes)
  })
})
