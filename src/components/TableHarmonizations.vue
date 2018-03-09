<template>
  <div class="container">
    <table class="table" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th></th>
          <th v-for="cohort in cohorts">{{ cohort.label }}</th>
        </tr>
      </thead>
      <tbody v-for="variable in variablesData">
        <tr>
          <td class="align-middle">{{ variable.variable }}</td>
          <td v-for="cohort in cohorts">
            <div v-if="variableExists(cohort.id, variable.harmonizations)" style="font-size:20px; color:Green">
              <i class="fa fa-check-circle" @click="showHarmonizationDetail = !showHarmonizationDetail; selectedVariable = variable.variable"></i>
            </div>
            <div v-else="!variableExists(cohort.id, variable.harmonizations)" style="font-size:20px; color:Tomato">
              <i class="fa fa-times-circle"></i>
            </div>
          </td>
        </tr>
        <tr v-if="showHarmonizationDetail && selectedVariable === variable.variable">
          <td :colspan="cohorts.length + 1">
            <HarmonizationDetail></HarmonizationDetail>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import HarmonizationDetail from './HarmonizationDetail'

  export default {
    name: 'TableHarmonizations',
    computed: {
      variablesData: function () {
        return this.$store.state.variables.data
      },
      cohorts: function () {
        return this.$store.state.cohorts
      }
    },
    components: {
      HarmonizationDetail
    },
    data () {
      return {
        showHarmonizationDetail: false,
        selectedVariable: ''
      }
    },
    methods: {
      variableExists: function (cohort, harmonizations) {
        return harmonizations.some(function (harmonization) {
          return harmonization.sourceLabel === cohort
        })
      }
    }
  }
</script>
