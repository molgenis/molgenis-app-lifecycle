<template>
  <div v-if="variableData.length > 0">
    <table class="table" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th></th>
          <th v-for="cohort in cohorts">{{ cohort.label }}</th>
        </tr>
      </thead>
      <tbody v-for="variable in variableData">
        <tr>
          <td class="align-middle">{{ variable.variable }}</td>
          <td v-for="cohort in cohorts">
            <div v-if="variableExists(cohort.id, variable.harmonizations)" style="font-size:20px; color:Green">
              <i class="fa fa-check-circle" @click="getHarmonizationDetail(variable.harmonizations, cohort.id);showDetail(variable.variable)"></i>
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
  import { mapGetters } from 'vuex'
  import { GET_HARMONIZATIONS } from '../store/actions'

  export default {
    name: 'TableHarmonizations',
    computed: {
      ...mapGetters({
        variableData: 'getCoreVariableData',
        cohorts: 'getCohorts'
      })
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
      },
      getHarmonizationDetail (harmonizations, selectedCohort) {
        const selectedHarmonization = harmonizations.find(harmonization => harmonization.sourceLabel === selectedCohort)
        this.$store.dispatch(GET_HARMONIZATIONS, selectedHarmonization.id)
      },
      showDetail (selectedVariable) {
        this.showHarmonizationDetail = !this.showHarmonizationDetail
        this.selectedVariable = selectedVariable
      }
    }
  }
</script>
