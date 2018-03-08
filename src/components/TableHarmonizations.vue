<template>
  <div class="container">
    <table class="table" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th></th>
          <th v-for="cohort in cohorts.items">{{ cohort.label }}</th>
        </tr>
      </thead>
      <tbody v-for="variable in coreVariables.items">
        <tr>
          <td class="align-middle">{{ variable.variable }}</td>
          <td v-for="cohort in cohorts.items">
            <div v-if="variableExists(cohort.id, variable.harmonizations)" style="font-size:20px; color:Green">
              <i class="fa fa-check-circle" @click="showHarmonizationDetail = !showHarmonizationDetail; selectedVariable = variable.variable"></i>
            </div>
            <div v-else="!variableExists(cohort.id, variable.harmonizations)" style="font-size:20px; color:Tomato">
              <i class="fa fa-times-circle"></i>
            </div>
          </td>
        </tr>
        <tr v-if="showHarmonizationDetail && selectedVariable === variable.variable">
          <td :colspan="cohorts.items.length + 1">
            <HarmonizationDetail :harmonization="harmonizationDetail" :sourceVariables="sourceVariables"></HarmonizationDetail>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import EntityTypeV2Response from '../LifeCycleDemoMockResponse'
  import HarmonizationDetail from './HarmonizationDetail'

  export default {
    name: 'TableHarmonizations',
    props: {
      coreVariables: Object,
      cohorts: Object
    },
    components: {
      HarmonizationDetail
    },
    data () {
      return {
        showHarmonizationDetail: false,
        selectedVariable: '',
        harmonizationDetail: EntityTypeV2Response.mockResponseHarmonization,
        sourceVariables: EntityTypeV2Response.mockResponseSourceVariables
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
