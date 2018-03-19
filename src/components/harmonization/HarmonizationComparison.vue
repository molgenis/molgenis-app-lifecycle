<template>
  <div class="card">
    <div class="card-header">
      <h6>Harmonization of {{ harmonization.targetLabel }} and {{ harmonization.sourceLabel }}</h6>
    </div>
    <div class="card-body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-5">
            <HarmonizationDetail :selectedHarmonization="selectedHarmonization"></HarmonizationDetail>
          </div>
          <div class="col-6">
            <CoreVariable :selectedVariable="selectedVariable"></CoreVariable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CoreVariable from '../core-variables/CoreVariable'
  import HarmonizationDetail from './HarmonizationDetail'

  export default {
    name: 'HarmonizationComparison',
    props: {
      selectedHarmonization: {},
      selectedVariable: {}
    },
    components: {
      CoreVariable,
      HarmonizationDetail
    }
  }
</script>
