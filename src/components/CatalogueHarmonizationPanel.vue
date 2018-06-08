<template>
  <div class="harmonization-panel mt-3">
    <div class="table-responsive">
      <table class="table table-sm table-striped">
        <thead>
        <tr>
          <th scope="col" class="pr-5">Cohort</th>

          <th v-for="variable in selectedNodeVariables" v-if="isVariableHarmonized(variable.variable)">
            {{variable.variable }}
          </th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="cohort in cohorts" v-if="doesCohortHaveHarmonization(cohort)">
          <th scope="row" class="number-of-harmonizations-cell pr-5">
            {{ cohort }}
            <span class="badge badge-success badge-pill">
                {{ getNumberOfHarmonizations(cohort) }} / {{ selectedNodeVariables.length }}
              </span>
          </th>

          <td class="icon-cells" v-for="variable in selectedNodeVariables"
              v-if="isVariableHarmonized(variable.variable)">

            <template v-if="variableHarmonizedForCohort(cohort, variable.variable)">
              <a href="" @click.prevent="navigateToHarmonizationComparison(getHarmonizationRowId(cohort, variable.variable))">
                <i class="fa fa-check-circle text-success"></i>
              </a>
            </template>

            <template v-else>
              <i class="fa fa-times-circle text-danger"></i>
            </template>
          </td>
        </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<style>
  .icon-cells {
    font-size: 1.5rem;
  }

  .number-of-harmonizations-cell {
    width: 4rem;
  }
</style>

<script>
  export default {
    name: 'CatalogueHarmonizationPanel',
    methods: {
      getNumberOfHarmonizations (cohort) {
        if (this.harmonizationTableData[cohort] === undefined) {
          return 0
        }
        return this.harmonizationTableData[cohort].length
      },

      isVariableHarmonized (variable) {
        return this.harmonizedVariables.includes(variable)
      },

      doesCohortHaveHarmonization (cohort) {
        return this.harmonizationTableData[cohort] !== undefined
      },

      variableHarmonizedForCohort (cohort, variable) {
        return this.harmonizationTableData[cohort].includes(variable)
      },

      getHarmonizationRowId (cohort, variable) {
        return this.cohortVariableMapping[cohort][variable].id
      },

      navigateToHarmonizationComparison (harmonizationId) {
        this.$router.push(this.$route.path + '/' + harmonizationId)
      }
    },
    computed: {
      cohorts () {
        return this.$store.state.cohorts
      },

      cohortVariableMapping () {
        return this.$store.getters.getCohortVariableMapping
      },

      harmonizationTableData () {
        return this.$store.getters.getHarmonizationTable
      },

      harmonizedVariables () {
        return Object.values(this.harmonizationTableData).reduce((accumulator, value) => {
          return [...accumulator, ...value]
        }, [])
      },

      selectedNodeVariables () {
        return this.$store.state.selectedNodeVariables
      }
    }
  }
</script>
