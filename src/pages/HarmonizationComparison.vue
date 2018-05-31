<template>
  <div class="container-fluid">

    <molgenis-menu></molgenis-menu>
    <div class="row mt-3">
      <div class="col-12">
        <router-link :to="'/'"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to filter</router-link>

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
                  <CoreVariable></CoreVariable>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CoreVariable from '../components/core-variables/CoreVariable'
  import HarmonizationDetail from '../components/harmonization/HarmonizationDetail'
  import MolgenisMenu from '../components/MolgenisMenu'
  import { mapGetters } from 'vuex'

  export default {
    name: 'HarmonizationComparison',
    props: ['coreVariableId', 'harmonizationId'],
    computed: {
      selectedHarmonization ()
      ...mapGetters({
        selectedHarmonization: 'getHarmonizations'
      })
    },
    mounted () {
      this.$store.dispatch('FETCH_HARMONIZATIONS_BY_ID', this.harmonizationId)
      this.$store.dispatch('FETCH_CORE_VARIABLES', this.coreVariableId)
    },
    components: {
      CoreVariable,
      HarmonizationDetail,
      MolgenisMenu
    }
  }
</script>
