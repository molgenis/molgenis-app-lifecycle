<template>
  <div class="tree">
    <v-jstree @item-click="itemClick" :onselectstart="false" :data="treeData"></v-jstree>
  </div>
</template>

<script>
  import VJstree from 'vue-jstree'

  import { GET_TREE_DATA } from '../store/actions'

  export default {
    name: 'Tree',
    components: {
      VJstree
    },
    data () {
      return {
        treeData: this.$store.state.tree.data,
        settings: this.$store.state.tree.settings
      }
    },
    methods: {
      itemClick (node) {
        console.log(node.model.text + ' clicked !')
      }
    },
    mounted () {
      this.$store.dispatch(GET_TREE_DATA)
    }
  }
</script>
