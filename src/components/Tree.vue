<template>
<div class="card">
      <div class="card-header">
        <a href="#" class="badge badge-secondary" @click="toggleCollapse">{{collapseText}}</a>
        <span>Catalogue</span>
      </div>
      <div class="card-body" v-if="!collapse">
        <span><v-jstree @item-click="itemClick" :onselectstart="false" :data="treeData"></v-jstree></span>
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
        collapseText: '-'
      }
    },
    methods: {
      toggleCollapse () {
        this.collapse = !this.collapse
        this.collapseText = this.collapse ? '+' : '-'
      }
    },
    props: ['treeData', 'itemClick']
  }
</script>
