import TreeMenu from '@/components/TreeMenu'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import td from 'testdouble'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

describe('components', () => {
  describe('TreeMenu', () => {
    let actions
    let mutations
    let store

    beforeEach(() => {
      actions = {
        FETCH_SELECTED_NODE: td.function()
      }
      mutations = {
        SET_SELECTED_NODE: td.function()
      }

      const state = {
        loading: null
      }

      store = new Vuex.Store({actions, mutations, state})
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
      const wrapper = shallowMount(TreeMenu, {propsData, store})
      const node = {opened: false}
      const treeItem = {data: {icon: ''}, model: node}
      wrapper.vm.itemClick(treeItem, node)
      expect(node.opened).to.equal(true)

      wrapper.vm.itemClick(treeItem, node)
      expect(node.opened).to.equal(false)
    })

    it('should commit FETCH_SELECTED_NODE when a node is clicked and it is not a folder', () => {
      const localVue = createLocalVue()
      localVue.use(VueRouter)
      const router = new VueRouter()
      const wrapper = shallowMount(TreeMenu, {localVue, propsData, router, store})

      const node = {opened: false}
      const treeItem = {data: {icon: 'fas fa-table fa-sm'}, model: node}

      wrapper.vm.itemClick(treeItem, node)
      td.verify(actions.FETCH_SELECTED_NODE(td.matchers.anything(), node, undefined))
    })

    it('should not try to select another node if another node is already loading', async () => {
      const localVue = createLocalVue()
      localVue.use(VueRouter)
      const router = new VueRouter()
      const wrapper = shallowMount(TreeMenu, {localVue, propsData, router, store})

      const node1 = {id: 1, opened: false, selected: false}
      const node2 = {id: 2, opened: false, selected: false}
      store.state.loading = false
      const treeItem = {data: {icon: 'notafolder'}, model: node1}
      await wrapper.vm.itemClick(treeItem, node1)
      expect(node1.selected).to.equal(true)

      store.state.loading = true
      await wrapper.vm.itemClick(treeItem, node2)
      expect(node2.selected).to.equal(false)
    })
  })
})
