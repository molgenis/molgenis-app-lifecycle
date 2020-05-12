<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-xl-3 col-lg-3 col-12 mb-2">
        <tree-menu :treeMenu="treeMenu"/>
      </div>

      <div class="col-xl-9 col-lg-9 col-12">
        <div v-if="selectedNodeLabel !== ''">
          <b-nav tabs>
            <b-nav-item href="#variables" :active="tabIndex === 0" @click="tabIndex = 0">LifeCycle variables</b-nav-item>
            <b-nav-item href="#harmonization" :active="tabIndex === 1" @click="tabIndex = 1">Harmonization</b-nav-item>
          </b-nav>
          <catalogue-core-variable-panel v-if="tabIndex === 0"/>
          <catalogue-harmonization-panel v-if="tabIndex === 1"/>
        </div>
        <div class="text-center alert alert-light" role="alert" v-else>
          <h4>Select variables in the search tree to start</h4>
        </div>
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
    data () {
      return {
        tabIndex: 0
      }
    },
    computed: {
      ...mapState(['treeMenu', 'selectedNodeLabel'])
    },
    watch: {
      treeMenu (treeMenu) {
        if (this.selectedNodeId) {
          const selectedNode = findNodeFromTreeById(treeMenu, this.selectedNodeId)
          this.$store.dispatch('FETCH_SELECTED_NODE', selectedNode)
        }
      }
    },
    mounted () {
      this.$store.dispatch('FETCH_TREE_MENU', this.selectedNodeId)
      this.$store.dispatch('FETCH_COHORTS')
      if (this.$store.state.route.hash === '#variables') {
        this.tabIndex = 0
      }
      if (this.$store.state.route.hash === '#harmonization') {
        this.tabIndex = 1
      }
    },
    components: {
      CatalogueCoreVariablePanel,
      CatalogueHarmonizationPanel,
      TreeMenu
    }
  }
</script>
