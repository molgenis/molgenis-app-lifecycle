<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ msg }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <Tree :treeData="treeData" :itemClick="treeClick"></Tree>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-12">
            <TableCoreVariables></TableCoreVariables>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
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
    methods: {
      treeClick (node) {
        this.$store.dispatch(GET_CORE_VARIABLES, node.model.id)
      }
    },
    mounted () {
      this.$store.dispatch(GET_TREE_DATA)
      this.$store.dispatch(GET_COHORTS)
    }
  }
</script>
