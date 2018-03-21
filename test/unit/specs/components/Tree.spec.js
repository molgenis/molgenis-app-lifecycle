import Vue from 'vue'
import Tree from '@/components/Tree'
import TreeMapperResponse from '../mock-responses/TreeMapperResponse'

describe('Tree unit tests', () => {
  it('should load "Tree" component as a name', () => {
    expect(Tree.name).to.equal('Tree')
  })

  it('should render correctly', () => {
    const mockTreeData = TreeMapperResponse.mockTreeData
    const testFunction = (node) => {
      console.log(node.model.id)
    }
    const Constructor = Vue.extend(Tree)
    const propsData = {treeData: mockTreeData, itemClick: testFunction}
    const vm = new Constructor({propsData: propsData}).$mount()
    const expectedHTML = `<div class="card"><div class="card-header"><a href="#" class="badge badge-secondary">-</a> <span>Catalogue</span></div> <div class="card-body"><form class="form-inline my-2 my-lg-0"><input type="search" placeholder="Search" aria-label="Search" class="form-control mr-sm-2"></form> <br> <span><div role="tree" class="tree tree-default"><ul role="group" class="tree-container-ul tree-children"><li role="treeitem" draggable="false" class="tree-node tree-open tree-leaf"><!----> <i role="presentation" class="tree-icon tree-ocl"></i> <div class="tree-anchor tree-disabled"><!----> <i role="presentation" class="tree-icon tree-themeicon fa fa-file-o tree-themeicon-custom"></i>
        Parent2
    </div> <!----></li><li role="treeitem" draggable="false" class="tree-node tree-open tree-last"><!----> <i role="presentation" class="tree-icon tree-ocl"></i> <div class="tree-anchor tree-disabled"><!----> <i role="presentation" class="tree-icon tree-themeicon"></i>
        Parent1
    </div> <ul role="group" class="tree-children" style="max-height: 72px;"><li role="treeitem" draggable="false" class="tree-node tree-open tree-leaf"><!----> <i role="presentation" class="tree-icon tree-ocl"></i> <div class="tree-anchor"><!----> <i role="presentation" class="tree-icon tree-themeicon fa fa-file-o tree-themeicon-custom"></i>
        Child1
    </div> <!----></li><li role="treeitem" draggable="false" class="tree-node tree-open"><!----> <i role="presentation" class="tree-icon tree-ocl"></i> <div class="tree-anchor"><!----> <i role="presentation" class="tree-icon tree-themeicon"></i>
        Child2
    </div> <ul role="group" class="tree-children" style="max-height: 24px;"><li role="treeitem" draggable="false" class="tree-node tree-open tree-leaf"><!----> <i role="presentation" class="tree-icon tree-ocl"></i> <div class="tree-anchor"><!----> <i role="presentation" class="tree-icon tree-themeicon fa fa-file-o tree-themeicon-custom"></i>
        Grandchild1
    </div> <!----></li></ul></li></ul></li></ul></div></span></div></div>`
    expect(vm.$el.outerHTML).to.equal(expectedHTML)
  })

  it('should color correct node red when searching for it', () => {
    const mockTreeData = TreeMapperResponse.mockTreeData
    const testFunction = (node) => {
      console.log(node.model.id)
    }
    const Constructor = Vue.extend(Tree)
    const propsData = {treeData: mockTreeData, itemClick: testFunction}
    const vm = new Constructor({propsData: propsData}).$mount()
    vm.searchInput = 'grandchild'
    vm.filterTree()
    document.write(vm.$el.outerHTML)
    const matchElement = document.querySelectorAll('.tree-anchor')[4].style.color
    const noMatch1 = document.querySelectorAll('.tree-anchor')[0].style.color
    const noMatch2 = document.querySelectorAll('.tree-anchor')[1].style.color
    const noMatch3 = document.querySelectorAll('.tree-anchor')[2].style.color
    const noMatch4 = document.querySelectorAll('.tree-anchor')[3].style.color
    const red = 'rgb(209, 19, 19)'
    const black = 'rgb(0, 0, 0)'
    expect(matchElement).to.equal(red)
    expect(noMatch1).to.equal(black)
    expect(noMatch2).to.equal(black)
    expect(noMatch3).to.equal(black)
    expect(noMatch4).to.equal(black)
  })
})
