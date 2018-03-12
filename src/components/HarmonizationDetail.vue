<template>
  <div class="card">
    <div class="card-header">
      <h6>Harmonization of {{ harmonization.targetLabel }} and {{ harmonization.sourceLabel }}</h6>
    </div>
    <div class="card-body">
      <div class="card">
        <div class="card-header">
          <ul id="harmonization-detail-nav" class="nav nav-tabs card-header-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" role="tab" href="#general-information" aria-selected="true">General information</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" role="tab" href="#harmonization-mapping" aria-selected="false">Harmonization mapping</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" role="tab" href="#harmonization-variables-used" aria-selected="false">Variables used</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div id="harmonization-detail-nav-content" class="tab-content">
            <div class="tab-pane fade show active" role="tabpanel" aria-labelledby="general-information-tab" id="general-information">
              <div class="row">
                <div class="col-md-6">
                  <table class="table p-4">
                    <thead>
                      <tr>
                        <td>Subject</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Harmonization</td>
                        <td v-if="harmonization.status">{{ harmonization.status.label }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" role="tabpanel" aria-labelledby="harmonization-mapping-tab" id="harmonization-mapping">
              <pre class="p-4">{{ harmonization.description }}</pre>
            </div>
            <div class="tab-pane fade" role="tabpanel" aria-labelledby="harmonization-variables-used-tab" id="harmonization-variables-used">
              <table class="table">
                <thead>
                  <tr>
                    <td>Cohort</td>
                    <td>Variable</td>
                    <td>Description</td>
                    <td>Values</td>
                    <td>Unit</td>
                    <td>Data type</td>
                    <td>Collection type</td>
                    <td>Dependencies</td>
                    <td>Date of update</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="sourceVariable in sourceVariables">
                    <td v-if="sourceVariable.cohort">{{ sourceVariable.cohort.label }}</td>
                    <td>{{ sourceVariable.variable }}</td>
                    <td>{{ sourceVariable.description }}</td>
                    <td><pre>{{ sourceVariable.values }}</pre></td>
                    <td>{{ sourceVariable.unit }}</td>
                    <td v-if="sourceVariable.datatype">{{ sourceVariable.datatype.label }}</td>
                    <td>{{ sourceVariable.collectionType }}</td>
                    <td>{{ sourceVariable.dependencies }}</td>
                    <td>{{ sourceVariable.date_of_update }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'HarmonizationDetail',
    computed: {
      ...mapGetters({
        harmonization: 'getHarmonizations',
        sourceVariables: 'getSourceVariables'
      })
    }
  }
</script>
