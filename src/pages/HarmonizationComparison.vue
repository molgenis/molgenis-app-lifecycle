<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-12">

        <template v-if="selectedHarmonization">
          <a href="" @click.prevent="backToCatalogue">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to catalogue
          </a>
          <div class="card">
            <div class="card-header">
              Harmonization of <strong>{{ selectedHarmonization.targetLabel }}</strong> and <strong>{{
              selectedHarmonization.sourceLabel }}</strong>
            </div>

            <div class="card-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-12 mb-2">
                    <HarmonizationDetail></HarmonizationDetail>
                  </div>
                  <div class="col-xl-7 col-lg-7 col-12 mb-2">
                    <core-variable :fields="coreVariableFields" :variable="selectedHarmonization.target"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
  import CoreVariable from '../components/core-variables/CoreVariable'
  import HarmonizationDetail from '../components/harmonization/HarmonizationDetail'

  export default {
    name: 'HarmonizationComparison',
    props: ['selectedNodeId', 'harmonizationId'],
    methods: {
      backToCatalogue () {
        this.$router.push('/' + this.selectedNodeId)
      }
    },
    computed: {
      coreVariableFields () {
        return this.$store.getters.getCoreVariableFields
      },

      selectedHarmonization () {
        return this.$store.getters.getSelectedHarmonization
      }
    },
    mounted () {
      this.$store.dispatch('FETCH_HARMONIZATIONS_BY_ID', this.harmonizationId)
    },
    components: {
      CoreVariable,
      HarmonizationDetail
    }
  }
</script>
