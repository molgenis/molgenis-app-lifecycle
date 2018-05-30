<template>
  <div class="card">
    <div class="card-header">
      <a href="#" class="badge badge-secondary" @click="toggleCollapse">{{collapseText}}</a>
      <span>Catalogue</span>
    </div>
    <div class="card-body" v-if="!isMenuCollapsed">
      <section class="my-2 my-lg-0" id="search">
        <label for="search-input">
          <i class="fa fa-search" aria-hidden="true"></i>
          <span class="sr-only">Search</span>
        </label>
        <input id="search-input" class="form-control input-lg" type="search" placeholder="Search" aria-label="Search"
               v-model="searchInput" @keyup="filterTree" tabindex="1">
      </section>
      <br/>
      <span>
        <v-jstree
          ref="tree"
          :data="treeData"
          :onselectstart="false"
          @item-click="itemClick">
        </v-jstree>
      </span>
    </div>
  </div>
</template>
<style scoped>
  #search {
    position: relative;
    font-size: 18px;
  }

  #search label {
    position: absolute;
    left: 15px;
    top: 5px;
  }

  #search #search-input, #search .hint {
    padding-left: 43px;
    padding-right: 43px;
  }

  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
</style>
<script>
  import VJstree from 'vue-jstree'

  export default {
    name: 'Tree',
    components: {
      VJstree
    },
    data () {
      return {
        isMenuCollapsed: false,
        collapseText: '-',
        searchInput: ''
      }
    },
    methods: {
      toggleCollapse () {
        this.isMenuCollapsed = !this.isMenuCollapsed
        this.collapseText = this.isMenuCollapsed ? '+' : '-'
      },
      filterTree () {
        const self = this
        this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function (node) {
          self.setTreeLeafColor(node)
        })
      },
      setTreeLeafColor (node) {
        const red = '#D11313'
        const black = '#000'
        const text = this.searchInput
        const patt = new RegExp(text, 'i')

        if (text !== '') {
          const str = node.model.text
          node.$el.querySelector('.tree-anchor').style.color = patt.test(str) ? red : black
        } else {
          node.$el.querySelector('.tree-anchor').style.color = black
        }
      }
    },
    props: {
      treeData: Array,
      itemClick: Function
    }
  }
</script>
