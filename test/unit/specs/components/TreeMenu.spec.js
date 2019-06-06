import TreeMenu from '@/components/TreeMenu'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import td from 'testdouble'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

describe('components', () => {
  describe('TreeMenu', () => {
    let mutations
    let store

    beforeEach(() => {
      mutations = {
        SET_SELECTED_NODE: td.function()
      }

      store = new Vuex.Store({mutations})
    })

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

      wrapper.vm.toggleCollapse()
      expect(wrapper.vm.isMenuCollapsed).to.equal(true)
    })

    it('should compute which tree nodes to show when query changes', () => {
      const wrapper = shallowMount(TreeMenu, {propsData})
      expect(wrapper.vm.filteredTreeMenu).to.deep.equal(propsData.treeMenu)

      wrapper.setData({query: 'test1'})
      const filteredTreeNodes = [{text: 'test1', children: []}]
      expect(wrapper.vm.filteredTreeMenu).to.deep.equal(filteredTreeNodes)
    })

    it('should toggle a node opened when a node is clicked and it is a folder', () => {
      const wrapper = shallowMount(TreeMenu, {propsData})
      const node = {data: {icon: ''}, model: {opened: false}}
      wrapper.vm.itemClick(node)
      expect(node.model.opened).to.equal(true)

      wrapper.vm.itemClick(node)
      expect(node.model.opened).to.equal(false)
    })

    it('should commit SET_SELECTED_NODE when a node is clicked and it is not a folder', () => {
      const localVue = createLocalVue()
      localVue.use(VueRouter)
      const router = new VueRouter()

      const wrapper = shallowMount(TreeMenu, {localVue, propsData, router, store})
      const node = {data: {icon: 'fas fa-table fa-sm'}, model: {opened: false}}

      wrapper.vm.itemClick(node)
      td.verify(mutations.SET_SELECTED_NODE({}, node.model))
    })
  })
})
