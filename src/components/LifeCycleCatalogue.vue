<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ msg }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <Tree></Tree>
      </div>
      <div class="col-md-10">
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

  import { GET_CORE_VARIABLES, GET_COHORTS } from '../store/actions'

  export default {
    name: 'LifeCycleCatalogue',
    components:
      {
        Tree,
        TableCoreVariables,
        TableHarmonizations
      },
    methods: {
      clickTree: function () {
        this.$store.dispatch(GET_COHORTS)
        this.$store.dispatch(GET_CORE_VARIABLES)
      }
    },
    props: {
      msg: String
    }
  }
</script>
