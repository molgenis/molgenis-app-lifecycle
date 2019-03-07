<template>
  <div class="harmonization-panel mt-3">
    <div class="table-responsive">
      <template  v-if="harmonizedVariables.length > 0">
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

              <template v-if="variableCompleteHarmonizedForCohort(cohort, variable.variable)">
                <a href="" @click.prevent="navigateToHarmonizationComparison(getHarmonizationRowId(cohort, variable.variable))">
                  <i class="fa fa-check-circle text-success"></i>
                </a>
              </template>

              <template v-else-if="variablePartialHarmonizedForCohort(cohort, variable.variable)">
                <a href="" @click.prevent="navigateToHarmonizationComparison(getHarmonizationRowId(cohort, variable.variable))">
                  <i class="fa fa-check-circle text-warning"></i>
                </a>
              </template>

              <template v-else-if="variableNAHarmonizedForCohort(cohort, variable.variable)">
                <a href="" @click.prevent="navigateToHarmonizationComparison(getHarmonizationRowId(cohort, variable.variable))">
                  <i class="fa fa-times " style="font-size: .70em; color: grey"></i>
                </a>
              </template>

              <template v-else>
                <i class="fa fa-question" style="font-size: .70em; color: grey"></i>
              </template>
            </td>
          </tr>
          </tbody>
        </table>
      </template>

      <template v-else>
        <table>
          <tr>
            <td scope="col" class="pr-1">No harmonized variables available</td>
          </tr>
        </table>
      </template>


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
        return this.harmonizationTableData[cohort].filter(harmonization => harmonization.status !== 'zna').length
      },

      isVariableHarmonized (variable) {
        return this.harmonizedVariables.some((harmonization) => {
          return harmonization.variable === variable
        })
      },

      doesCohortHaveHarmonization (cohort) {
        return this.harmonizationTableData[cohort] !== undefined
      },

      variableCompleteHarmonizedForCohort (cohort, variable) {
        return this.harmonizationTableData[cohort].some(harmonization => harmonization.variable === variable && harmonization.status === 'complete')
      },

      variablePartialHarmonizedForCohort (cohort, variable) {
        return this.harmonizationTableData[cohort].some(harmonization => harmonization.variable === variable && harmonization.status === 'partial')
      },

      variableNAHarmonizedForCohort (cohort, variable) {
        return this.harmonizationTableData[cohort].some(harmonization => harmonization.variable === variable && harmonization.status === 'zna')
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
