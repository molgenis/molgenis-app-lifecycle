<template>
  <div class="tree">
    <v-jstree @item-click="itemClick" :onselectstart="false" :data="treeData"></v-jstree>
  </div>
</template>

<script>
  import VJstree from 'vue-jstree'
  import EntityTypeV2Response from '../LifeCycleDemoMockResponse'
  import EntityToTreeMapper from '../util/EntityToTreeMapper'

  export default {
    name: 'Tree',
    components: {
      VJstree
    },
    data () {
      return {
        settings: {
          'id': 'key',
          'label': 'title',
          'folderIcon': '',
          'leafIcon': 'fa fa-file-o',
          'isOpened': true,
          'isSelected': false,
          'isDisabled': false,
          'isLoading': false
        }
      }
    },
    computed: {
      treeData () {
        return EntityToTreeMapper.generateTreeData(EntityTypeV2Response.mockResponse, this.settings)
      }
    },
    methods: {
      itemClick (node) {
        console.log(node.model.text + ' clicked !')
      }
    }
  }
</script>
