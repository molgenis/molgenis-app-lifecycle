<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-xl-4 col-lg-4 col-12 mb-2">
        <tree-menu :treeMenu="treeMenu"/>
      </div>

      <div class="col-xl-8 col-lg-8 col-12">
        <template v-if="selectedNodeLabel">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="core-variables-tab" data-toggle="tab" href="#core-variables" role="tab"
                 aria-controls="core-variables" aria-selected="true">
                Core variables
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" id="harmonization-tab" data-toggle="tab" href="#harmonization" role="tab"
                 aria-controls="harmonization" aria-selected="false">
                Harmonization
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane fade show active" id="core-variables" role="tabpanel"
                 aria-labelledby="core-variables-tab">
              <core-variables/>
            </div>

            <div class="tab-pane fade" id="harmonization" role="tabpanel" aria-labelledby="harmonization-tab">
              <harmonization-data-container/>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="text-center alert alert-light" role="alert">
            <h4>Select variables in the search tree to start</h4>
          </div>
        </template>
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
  import CoreVariables from './core-variables/CoreVariables'
  import HarmonizationDataContainer from './HarmonizationDataContainer'
  import TreeMenu from './TreeMenu'

  export default {
    name: 'LifeCycleCatalogue',
    computed: {
      treeMenu () {
        return this.$store.state.treeMenu
      },

      selectedNodeLabel () {
        return this.$store.state.selectedNodeLabel
      }
    },
    mounted () {
      this.$store.dispatch('FETCH_TREE_MENU')
      this.$store.dispatch('FETCH_COHORTS')
    },
    components: {
      TreeMenu,
      CoreVariables,
      HarmonizationDataContainer
    }
  }
</script>
