<template>
  <div class="card" v-if="variableData.length > 0">
    <div class="card-header">
      Harmonizations of {{ title }}
    </div>
    <div class="card-body">
      <table class="table borderless" cellspacing="0">
        <thead>
          <tr>
            <th></th>
            <th v-for="variable in variableData" @click="selectedVariable = variable;showCoreVariable = !showCoreVariable">{{ variable.variable }}</th>
          </tr>
          <tr v-if="selectedVariable.variable && showCoreVariable">
            <td></td>
            <td>
              <CoreVariableRow :variable="selectedVariable"></CoreVariableRow>
            </td>
          </tr>
        </thead>
        <tbody v-for="cohort in cohorts">
          <tr>
            <td>{{ cohort.label }}</td>
            <td v-for="variable in variableData">
              <div v-if="variableExists(cohort.id, variable.harmonizations)" style="font-size:20px; color:Green">
                <i class="fa fa-check-circle"><router-link :to="{ name: 'harmonization', params: { variable: variable, harmonization: getSelectedHarmonization(variable, cohort.id) }}"></router-link></i>
              </div>
              <div v-else="!variableExists(cohort.id, variable.harmonizations)" style="font-size:20px; color:#970404">
                <i class="fa fa-times-circle"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import HarmonizationDetail from './HarmonizationDetail'
  import CoreVariable from '../core-variables/CoreVariable'
  import CoreVariableRow from '../core-variables/CoreVariableRow'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Harmonizations',
    props: {
      title: ''
    },
    computed: {
      ...mapGetters({
        variableData: 'getCoreVariableData',
        variableColumns: 'getCoreVariableColumns',
        cohorts: 'getCohorts'
      })
    },
    components: {
      HarmonizationDetail,
      CoreVariable,
      CoreVariableRow
    },
    data () {
      return {
        showCoreVariable: false,
        selectedVariable: {}
      }
    },
    methods: {
      variableExists: function (cohort, harmonizations) {
        return harmonizations.some(function (harmonization) {
          return harmonization.sourceLabel === cohort
        })
      },
      getSelectedHarmonization (selectedVariable, selectedCohort) {
        return selectedVariable.harmonizations.find(harmonization => harmonization.sourceLabel === selectedCohort)
      }
    }
  }
</script>
