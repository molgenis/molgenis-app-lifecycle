<template>
  <div class="container-fluid">

    <molgenis-menu></molgenis-menu>

    <div class="row mt-3">
      <div class="col-12">

        <div class="card">
          <div class="card-header">
            Harmonization of {{ selectedHarmonization.targetLabel }} and {{ selectedHarmonization.sourceLabel }}
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
  import CoreVariable from '../core-variables/CoreVariable'
  import HarmonizationDetail from './HarmonizationDetail'
  import MolgenisMenu from '../MolgenisMenu'
  import { GET_CORE_VARIABLES, GET_HARMONIZATIONS } from '../../store/actions'
  import { mapGetters } from 'vuex'

  export default {
    name: 'HarmonizationComparison',
    props: {
      variable: {
        type: String
      },
      harmonization: {
        type: String
      }
    },
    mounted () {
      this.$store.dispatch(GET_HARMONIZATIONS, this.harmonization)
      this.$store.dispatch(GET_CORE_VARIABLES, this.variable)
    },
    computed: {
      ...mapGetters({
        selectedHarmonization: 'getHarmonizations'
      })
    },
    components: {
      CoreVariable,
      HarmonizationDetail,
      MolgenisMenu
    }
  }
</script>
