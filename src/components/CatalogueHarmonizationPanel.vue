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
            <tr v-for="(cohort, index) in cohorts" :key="cohort">
              <th scope="row" class="number-of-harmonizations-cell pr-5">
                {{ cohort }}
                <span class="badge badge-success badge-pill">
                    {{ 0 }} / {{ variables.length }}
                  </span>
              </th>
              <td class="icon-cells" v-for="variable in variables" :key="variable">
                <harmonization-status v-bind="statuses[variable][cohort]"></harmonization-status>
              </td>
              
              <th class="align-middle" rowspan="0" v-if="toBeFetched.length && index === 0">
                <observer @intersect="fetch" :options="{threshold:0.01}">
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

  export default {
    name: 'CatalogueHarmonizationPanel',
    data: function () {
      return {
        variables: [],
        statuses: {},
        toBeFetched: []
      }
    },
    created: function () {
      this.toBeFetched = [...this.selectedNodeVariables]
    },
    watch: {
      selectedNodeVariables: function (value) {
        this.variables = []
        this.statuses = {}
        this.toBeFetched = [...value]
      }
    },
    methods: {
      fetch () {
        const batch = this.toBeFetched.splice(0, 100)
        batch.forEach(({variable, harmonizations}) => {
          this.variables.push(variable)
          this.statuses[variable] = {}
          harmonizations.forEach(({cohort, status, id}) => {
            this.statuses[variable][cohort.id] = { status: status.id, id }
          })
        })
      }
    },
    computed: {
      ...mapState(['cohorts', 'selectedNodeVariables']),
      showFetch () {
        return this.toBeFetched.length > 0
      }
    },
    components: {
      Observer,
      HarmonizationStatus
    }
  }
</script>
