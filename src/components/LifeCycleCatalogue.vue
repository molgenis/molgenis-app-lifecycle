<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-xl-4 col-lg-4 col-12 mb-2">
        <Tree :treeNodes="treeData"></Tree>
      </div>

      <div class="col-xl-8 col-lg-8 col-12 mb-2">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="core-variables-tab" data-toggle="tab" href="#core-variables" role="tab"
               aria-controls="core-variables"
               aria-selected="true">Core variables</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="harmonization-tab" data-toggle="tab" href="#harmonization" role="tab"
               aria-controls="harmonization"
               aria-selected="false">Harmonization</a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="core-variables" role="tabpanel"
               aria-labelledby="core-variables-tab">
            <CoreVariables :variable="selectedFeature"></CoreVariables>
          </div>
          <div class="tab-pane fade" id="harmonization" role="tabpanel" aria-labelledby="harmonization-tab">
            <Harmonizations :variable="selectedFeature"></Harmonizations>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tab-content {
    padding: 2rem;
  }
</style>

<script>
  import Tree from './Tree'
  import CoreVariables from './core-variables/CoreVariables'
  import Harmonizations from './harmonization/Harmonizations'
  import { GET_TREE_DATA, GET_COHORTS } from '../store/actions'
  import { mapGetters } from 'vuex'

  export default {
    name: 'LifeCycleCatalogue',
    components: {
      Tree,
      CoreVariables,
      Harmonizations
    },
    computed: {
      ...mapGetters({
        treeData: 'getTreeData',
        selectedFeature: 'getSelectedFeature'
      })
    },
    mounted () {
      this.$store.dispatch(GET_TREE_DATA)
      this.$store.dispatch(GET_COHORTS)
    }
  }
</script>
