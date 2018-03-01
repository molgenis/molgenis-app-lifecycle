<template>
  <div class="tree">
    <v-jstree :data="treeData" allow-batch @item-click="itemClick" :async="mapData" :onselectstart="false"></v-jstree>
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
        treeData: [
          {
            'id': 2,
            'text': 'Meta Variables',
            'value': 'Meta Variables',
            'icon': '',
            'opened': false,
            'selected': false,
            'disabled': false,
            'loading': false,
            'children': []
          },
          {
            'id': 3,
            'text': 'Maternal Characteristics',
            'value': 'Maternal Characteristics',
            'icon': '',
            'opened': true,
            'selected': false,
            'disabled': false,
            'loading': false,
            'children': [
              {
                'id': 1,
                'text': 'Socio-demographic characteristics',
                'value': 'Socio-demographic characteristics',
                'icon': 'fa fa-file-o',
                'opened': false,
                'selected': false,
                'disabled': false,
                'loading': false,
                'children': []
              },
              {
                'id': 4,
                'text': 'Lifestyle Characteristics',
                'value': 'Lifestyle Characteristics',
                'icon': '',
                'opened': true,
                'selected': false,
                'disabled': false,
                'loading': false,
                'children': [
                  {
                    'id': 5,
                    'text': 'Smoking',
                    'value': 'Smoking',
                    'icon': 'fa fa-file-o',
                    'opened': false,
                    'selected': false,
                    'disabled': false,
                    'loading': false,
                    'children': []
                  }
                ]
              }
            ]
          }
        ]

      }
    },
    methods: {
      itemClick (node) {
        console.log(node.model.text + ' clicked !')
      },
      mapData () {
        const tree = EntityToTreeMapper.generateTreeData(EntityTypeV2Response.mockResponse)
        return tree
      }
    }
  }
</script>
