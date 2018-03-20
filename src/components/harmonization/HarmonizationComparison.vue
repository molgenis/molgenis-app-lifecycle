<template>
  <div class="container-fluid">

    <molgenis-menu></molgenis-menu>

    <div class="row mt-3">
      <div class="col-12">

        <div class="card">
          <div class="card-header">
            <h6>Harmonization of {{ selectedHarmonization.targetLabel }} and {{ selectedHarmonization.sourceLabel }}</h6>
          </div>

          <div class="card-body">

            <div class="container-fluid">
              <div class="row">
                <div class="col-5">
                  <HarmonizationDetail></HarmonizationDetail>
                </div>
                <div class="col-7">
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
