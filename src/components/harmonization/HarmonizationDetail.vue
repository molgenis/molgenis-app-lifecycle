<template>
  <div class="card">
    <div class="card-header">
      <ul id="harmonization-detail-nav" class="nav nav-tabs card-header-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" role="tab" href="#harmonization-mapping" aria-selected="false">Description</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" role="tab" href="#harmonization-variables-used" aria-selected="false">Variables
            used</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" role="tab" href="#harmonization-script-syntax" aria-selected="false">Script
            syntax</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div id="harmonization-detail-nav-content" class="tab-content table-responsive">
        <div class="tab-pane fade show active" role="tabpanel" aria-labelledby="harmonization-mapping-tab"
             id="harmonization-mapping">
          <pre class="pre-wrap p-4">{{ harmonization.description }}</pre>
        </div>
        <div class="tab-pane fade" role="tabpanel" aria-labelledby="harmonization-variables-used-tab"
             id="harmonization-variables-used">
          <table class="table table-sm">
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
              <td>
                <pre class="pre-wrap">{{ sourceVariable.values }}</pre>
              </td>
              <td>{{ sourceVariable.unit }}</td>
              <td v-if="sourceVariable.datatype">{{ sourceVariable.datatype.label }}</td>
              <td>{{ sourceVariable.collectionType }}</td>
              <td>{{ sourceVariable.dependencies }}</td>
              <td>{{ sourceVariable.date_of_update }}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="tab-pane fade" role="tabpanel" aria-labelledby="harmonization-script-syntax-tab"
             id="harmonization-script-syntax">
          <pre class="p-4">{{ harmonization.syntax }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HarmonizationDetail',
    computed: {
      harmonization () {
        return this.$store.state.harmonizationData[0]
      },

      sourceVariables () {
        return this.$store.state.harmonizationData[0].sources
      }
    }
  }
</script>

<style>
  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .pre-wrap {
    width: 35rem;
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }
</style>
