<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-xl-3 col-lg-3 col-12 mb-2">
        <tree-menu :treeMenu="treeMenu"/>
      </div>

      <div class="col-xl-9 col-lg-9 col-12">
        <template v-if="selectedNodeLabel !== ''">
          <b-tabs content-class="mt-3">
            <b-tab title="LifeCycle variables" active key="variables"><catalogue-core-variable-panel/></b-tab>
            <b-tab title="Harmonization" key="harmonization"><catalogue-harmonization-panel/></b-tab>
          </b-tabs>
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
  import CatalogueCoreVariablePanel from '../components/CatalogueCoreVariablePanel'
  import CatalogueHarmonizationPanel from '../components/CatalogueHarmonizationPanel'
  import TreeMenu from '../components/TreeMenu'
  import { mapState } from 'vuex'

  import findNodeFromTreeById from '../util/findNodeFromTreeById'

  export default {
    name: 'LifeCycleCatalogue',
    props: ['selectedNodeId'],
    computed: {
      ...mapState(['treeMenu', 'selectedNodeLabel'])
    },
    watch: {
      treeMenu (treeMenu) {
        if (this.selectedNodeId) {
          const selectedNode = findNodeFromTreeById(treeMenu, this.selectedNodeId)
          this.$store.commit('SET_SELECTED_NODE', selectedNode)
        }
      }
    },
    mounted () {
      this.$store.dispatch('FETCH_TREE_MENU', this.selectedNodeId)
      this.$store.dispatch('FETCH_COHORTS')
    },
    components: {
      CatalogueCoreVariablePanel,
      CatalogueHarmonizationPanel,
      TreeMenu
    }
  }
</script>
