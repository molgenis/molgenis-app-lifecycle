<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-xl-3 col-lg-3 col-12 mb-2">
        <tree-menu :treeMenu="treeMenu"/>
      </div>

      <div class="col-xl-9 col-lg-9 col-12">
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
              <catalogue-harmonization-panel/>
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

<script>
  import CatalogueHarmonizationPanel from '../components/CatalogueHarmonizationPanel'
  import CoreVariables from '../components/core-variables/CoreVariables'
  import TreeMenu from '../components/TreeMenu'

  import findNodeFromTreeById from '../util/findNodeFromTreeById'

  export default {
    name: 'LifeCycleCatalogue',
    props: ['selectedNodeId'],
    computed: {
      treeMenu () {
        return this.$store.state.treeMenu
      },

      selectedNodeLabel () {
        return this.$store.state.selectedNodeLabel
      }
    },
    watch: {
      treeMenu (treeMenu) {
        if (this.selectedNodeId) {
          const selectedNode = findNodeFromTreeById(treeMenu, this.selectedNodeId)
          this.$store.dispatch('FETCH_DATA_FOR_SELECTED_NODE', selectedNode)
        }
      }
    },
    mounted () {
      this.$store.dispatch('FETCH_TREE_MENU', this.selectedNodeId)
      this.$store.dispatch('FETCH_COHORTS')
    },
    components: {
      CatalogueHarmonizationPanel,
      CoreVariables,
      TreeMenu
    }
  }
</script>
