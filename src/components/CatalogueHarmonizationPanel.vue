<template>
  <div class="harmonization-panel mt-3">
    <div class="table-responsive">
      <template>
        <table class="table table-sm table-striped">
          <thead>
          <tr>
            <th scope="col" class="pr-5">Cohort</th>
            <th v-for="variable in variables" :key="variable">
              {{variable}}
            </th>
          </tr>
          </thead>

          <tbody>
            <tr v-for="(cohort, index) in cohortsWithMappings" :key="cohort">
              <th scope="row" class="number-of-harmonizations-cell pr-5">
                {{ cohort }}
                <span class="badge badge-success badge-pill">
                    {{ getNumberOfHarmonizations(cohort) }} / {{ selectedNodeVariables.length }}
                  </span>
              </th>
              <td class="icon-cells" v-for="variable in variables" :key="variable">
                <harmonization-status v-bind="status[cohort][variable]"></harmonization-status>
              </td>
              
              <th class="align-middle" rowspan="0" v-if="showFetch && index === 0">
                <observer @intersect="fetch" :options="{threshold:0}">
                  <button @click="fetch">{{toBeFetched.length}} more...</button>
                </observer>
              </th>
            </tr>
          </tbody>
        </table>
      </template>
    </div>
  </div>
</template>

<style>
  .harmonization-panel table {
    text-align: center;
  }

  .icon-cells {
    vertical-align: middle !important;
  }

  .number-of-harmonizations-cell {
    width: 4rem;
  }
</style>

<script>
  import { mapState } from 'vuex'
  import Observer from './Observer.vue'
  import HarmonizationStatus from './HarmonizationStatus.vue'
  import statusIndexer from '@/mappers/statusIndexer'

  export default {
    name: 'CatalogueHarmonizationPanel',
    data () {
      return {
        variables: [],
        toBeFetched: [],
        status: {}
      }
    },
    created () {
      this.variables = []
      this.toBeFetched = [...this.selectedNodeVariables.map(it => it.variable)]
      this.status = statusIndexer(this.selectedNodeVariables)
      this.fetch()
    },
    watch: {
      selectedNodeVariables (value) {
        this.variables = []
        this.toBeFetched = [...value.map(it => it.variable)]
        this.status = statusIndexer(this.selectedNodeVariables)
        this.fetch()
      }
    },
    methods: {
      fetch () {
        const batch = this.toBeFetched.splice(0, 100)
        this.variables = [...this.variables, ...batch]
      },
      getNumberOfHarmonizations (cohort) {
        return Object.keys(this.status[cohort]).length
      }
    },
    computed: {
      ...mapState(['cohorts', 'selectedNodeVariables']),
      showFetch () {
        return this.toBeFetched.length > 0
      },
      cohortsWithMappings () {
        return this.cohorts.filter(cohort => this.status[cohort])
      }
    },
    components: {
      Observer,
      HarmonizationStatus
    }
  }
</script>
