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
            <TableCoreVariables :coreVariables="coreVariables"></TableCoreVariables>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <TableHarmonizations :coreVariables="coreVariables" :cohorts="cohorts"></TableHarmonizations>
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
  import EntityTypeV2Response from '../LifeCycleDemoMockResponse'

  export default {
    name: 'LifeCycleCatalogue',
    components:
      {
        Tree,
        TableCoreVariables,
        TableHarmonizations
      },
    data () {
      return {
        cohorts: EntityTypeV2Response.mockResponseCohorts,
        coreVariables: EntityTypeV2Response.mockResponseCoreVariables
      }
    },
    props: {
      msg: String
    }
  }
</script>
