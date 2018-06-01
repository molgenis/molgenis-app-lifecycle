import TreeMenu from '@/components/TreeMenu'
import { shallowMount } from '@vue/test-utils'

describe('components', () => {
  describe('TreeMenu', () => {
    const propsData = {
      treeMenu: [
        {text: 'test1', children: []},
        {text: 'test2', children: []}
      ]
    }

    it('should load "TreeMenu" as the component name', () => {
      const wrapper = shallowMount(TreeMenu, {propsData})
      expect(wrapper.name()).to.equal('TreeMenu')
    })

    it('should toggle collapse on click of button', () => {
      const wrapper = shallowMount(TreeMenu, {propsData})
      expect(wrapper.vm.isMenuCollapsed).to.equal(false)
      expect(wrapper.vm.collapseText).to.equal('-')

      wrapper.vm.toggleCollapse()
      expect(wrapper.vm.isMenuCollapsed).to.equal(true)
      expect(wrapper.vm.collapseText).to.equal('+')
    })

    it('should compute which tree nodes to show when query changes', () => {
      const wrapper = shallowMount(TreeMenu, {propsData})
      expect(wrapper.vm.filteredTreeMenu).to.deep.equal(propsData.treeMenu)

      wrapper.setData({query: 'test1'})
      const filteredTreeNodes = [{text: 'test1', children: []}]
      expect(wrapper.vm.filteredTreeMenu).to.deep.equal(filteredTreeNodes)
    })
  })
})
