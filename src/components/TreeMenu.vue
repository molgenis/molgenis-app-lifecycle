<template>
  <div class="card">
    <div class="card-header">
      <a href="#" class="badge badge-secondary" @click="toggleCollapse">
        <font-awesome-icon :icon="isMenuCollapsed ? 'plus' : 'minus'" size="xs"></font-awesome-icon>
      </a>
      <span>Catalogue</span>
    </div>

    <div class="card-body" v-if="!isMenuCollapsed">
      <div class="row">
        <div class="col">
          <section class="mb-2" id="search">
            <label for="search-input">
              <font-awesome-icon icon="search" aria-hidden="true"></font-awesome-icon>
            </label>
            <input id="search-input" class="form-control" type="search" placeholder="Search catalogue"
                   aria-label="Search"
                   v-model="query" tabindex="1">
          </section>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="text-center pt-3" v-if="treeMenu.length === 0">
            <font-awesome-icon icon="spinner" spin size="1x"></font-awesome-icon>
          </div>
          <template v-else>
            <v-jstree
              :data="filteredTreeMenu"
              :onselectstart="false"
              @item-click="itemClick">
            </v-jstree>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #search {
    position: relative;
    font-size: 16px;
  }

  #search label {
    position: absolute;
    left: 17px;
    top: 7px;
  }

  #search #search-input, #search .hint {
    padding-left: 43px;
    padding-right: 43px;
  }

  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
  }
</style>

<script>
  import { mapState } from 'vuex'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library, dom } from '@fortawesome/fontawesome-svg-core'
  import { faSpinner, faSearch, faPlus, faMinus, faTable } from '@fortawesome/free-solid-svg-icons'
  import VJstree from 'vue-jstree'
  import filterTreeMenu from '../util/filterTreeMenu'

  library.add(faSpinner, faSearch, faPlus, faMinus, faTable)
  // watch the dom to replace the tree's <i class="fas fa-table"> tags with svg
  dom.watch()

  export default {
    name: 'TreeMenu',
    props: ['treeMenu'],
    data () {
      return {
        isMenuCollapsed: false,
        query: ''
      }
    },
    computed: {
      ...mapState(['loading']),
      filteredTreeMenu () {
        // Create a local copy to prevent the tree library from mutating state
        const tree = JSON.parse(JSON.stringify(this.treeMenu))
        return this.query === '' ? tree : filterTreeMenu(tree, this.query)
      }
    },
    methods: {
      async itemClick (treeItem, node) {
        const isFolder = treeItem.data.icon === ''
        if (isFolder) {
          node.opened = !node.opened
          return
        }

        // Deny selecting a node when one is already loading.
        if (this.loading) {
          node.selected = false
          return
        }

        node.loading = true
        await this.$store.dispatch('FETCH_SELECTED_NODE', node)
        // The loaded node is force-selected.
        node.selected = true
        node.loading = false
        this.$router.push('/' + node.id + this.$route.hash)
      },
      toggleCollapse () {
        this.isMenuCollapsed = !this.isMenuCollapsed
      }
    },
    components: {
      VJstree,
      FontAwesomeIcon
    }
  }
</script>
