<template>
  <div class="harmonization-data-container">
    <table class="table">
      <thead>
      <tr>
        <th>Cohort</th>
        <th>Number of harmonizations</th>
        <th v-for="variable in selectedNodeVariables">{{ variable.variable }}</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="cohort in cohorts">
        <td>{{ cohort }}</td>
        <td>
          <span class="badge badge-success badge-pill">
            {{ getNumberOfHarmonizations(cohort) }} / {{ selectedNodeVariables.length }}
          </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'HarmonizationDataContainer',
    methods: {
      getNumberOfHarmonizations (cohort) {
        if (this.harmonizationTableData[cohort] === undefined) {
          return 0
        }
        return this.harmonizationTableData[cohort].length
      }
    },
    computed: {
      cohorts () {
        return this.$store.state.cohorts
      },

      harmonizationTableData () {
        return this.$store.state.harmonizationTableData
      },

      selectedNodeVariables () {
        return this.$store.state.selectedNode.variables
      }
    }
  }
</script>
