<template>
  <div class="card">
    <div class="card-header">
      <a href="#" class="badge badge-secondary" @click="toggleCollapse">{{collapseText}}</a>
      <span>Catalogue</span>
    </div>

    <div class="card-body" v-if="!isMenuCollapsed">
      <div class="row">
        <div class="col">
          <input class="form-control mb-2" type="search" placeholder="Search" aria-label="Search" v-model="query">
        </div>
      </div>

      <div class="row">
        <div class="col">
          <template v-if="treeNodes.length === 0">
            <i class="fa fa-spinner fa-spin"></i>
          </template>

          <template v-else>
            <v-jstree
              :data="filteredTreeNodes"
              :onselectstart="false"
              @item-click="itemClick">
            </v-jstree>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VJstree from 'vue-jstree'
  import filterTreeNodes from '@/util/filter-tree-nodes'

  export default {
    name: 'Tree',
    props: {
      treeNodes: Array,
      itemClick: Function
    },
    data () {
      return {
        collapseText: '-',
        isMenuCollapsed: false,
        query: ''
      }
    },
    computed: {
      filteredTreeNodes () {
        return this.query === '' ? this.treeNodes : filterTreeNodes(this.treeNodes, this.query)
      }
    },
    methods: {
      toggleCollapse () {
        this.isMenuCollapsed = !this.isMenuCollapsed
        this.collapseText = this.isMenuCollapsed ? '+' : '-'
      }
    },
    components: {
      VJstree
    }
  }
</script>
