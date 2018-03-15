<template>
  <div class="card">
    <div class="card-header">
      <a href="#" class="badge badge-secondary" @click="toggleCollapse">{{collapseText}}</a>
      <span>Catalogue</span>
    </div>
    <div class="card-body" v-if="!collapse">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchInput" @keyup="filterTree">
      </form>
      <br/>
      <span><v-jstree @item-click="itemClick" :onselectstart="false" :data="treeData" ref="tree"></v-jstree></span>
    </div>
  </div>
</template>

<script>
  import VJstree from 'vue-jstree'

  export default {
    name: 'Tree',
    components: {
      VJstree
    },
    data () {
      return {
        collapse: false,
        collapseText: '-',
        searchInput: ''
      }
    },
    methods: {
      toggleCollapse () {
        this.collapse = !this.collapse
        this.collapseText = this.collapse ? '+' : '-'
      },
      filterTree () {
        var text = this.searchInput
        const patt = new RegExp(text, 'i')
        this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function (node) {
          if (text !== '') {
            const str = node.model.text
            if (patt.test(str)) {
              node.$el.querySelector('.tree-anchor').style.color = '#D11313'
            } else {
              node.$el.querySelector('.tree-anchor').style.color = '#000'
            } // or other operations
          } else {
            node.$el.querySelector('.tree-anchor').style.color = '#000'
          }
        })
      }
    },
    props: ['treeData', 'itemClick']
  }
</script>
