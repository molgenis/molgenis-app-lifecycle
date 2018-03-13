<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        Here comes an awesome menu
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Tree :treeData="treeData" :itemClick="treeClick"></Tree>
        <hr/>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <h4>{{selectedFeature}}</h4>
          </div>
        </div>
        <div class="row-fluid">
          <div class="col-12">
            <TableCoreVariables></TableCoreVariables>
          </div>
        </div>
        <div class="row-fluid">
          <div class="col-12">
            <TableHarmonizations></TableHarmonizations>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Tree from './Tree'
  import TableCoreVariables from './TableCoreVariables'
  import TableHarmonizations from './TableHarmonizations'
  import { GET_TREE_DATA, GET_CORE_VARIABLES, GET_COHORTS } from '../store/actions'
  import { mapGetters } from 'vuex'

  export default {
    name: 'LifeCycleCatalogue',
    components:
      {
        Tree,
        TableCoreVariables,
        TableHarmonizations
      },
    computed: {
      ...mapGetters({
        treeData: 'getTreeData'
      })
    },
    props: {
      msg: String
    },
    data () {
      return {
        selectedFeature: ''
      }
    },
    methods: {
      treeClick (node) {
        this.selectedFeature = node.model.value
        this.$store.dispatch(GET_CORE_VARIABLES, node.model.id)
      }
    },
    mounted () {
      this.$store.dispatch(GET_TREE_DATA)
      this.$store.dispatch(GET_COHORTS)
    }
  }
</script>
