<template>
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
          <div class="col-6">
            <CoreVariable></CoreVariable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CoreVariable from '../core-variables/CoreVariable'
  import HarmonizationDetail from './HarmonizationDetail'
  import { GET_HARMONIZATIONS, GET_CORE_VARIABLES } from '../../store/actions'
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
      console.log(this.variable)
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
      HarmonizationDetail
    }
  }
</script>
