<template>
  <div v-if="variableData.length > 0" style="overflow-y: visible;height:100%;">
    <h4>{{ selectedNodeLabel }}</h4>
    <div v-for="variable in variableData" class="row">
      <div class="col-12">
        <div class="card" style="margin-bottom:1em;">
          <div class="card-header">
            {{variable['variable']}}
          </div>
          <div class="card-body">
            <h5 class="card-title">{{variable['label']}}</h5>
            <div class="card-text">
              <div v-for="column in variableColumns">
                <div class="row" v-if="column.name !== 'variable' && column.name !='label'">
                  <div class="col-2"><b v-if="variable[column.name]">{{column.label}}:</b></div>
                  <div class="col-10">
                    <span v-if="typeof variable[column.name] === 'object'">{{ variable[column.name].label }}</span>
                    <pre v-else-if="column.name === 'values'">{{ variable[column.name] }}</pre>
                    <pre class="pre-wrap" v-else-if="column.name === 'comments'">{{ variable[column.name] }}</pre>
                    <span v-else-if="variable[column.name]">{{ variable[column.name] }}</span>
                  </div>
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
  import { mapGetters } from 'vuex'

  export default {
    name: 'CoreVariables',
    computed: {
      selectedNodeLabel () {
        return this.$store.state.selectedNodeLabel
      },

      ...mapGetters({
        variableColumns: 'getCoreVariablesColumns',
        variableData: 'getCoreVariablesData'
      })
    }
  }
</script>

<style scoped>
  pre {
    font-family: inherit;
    display: block;
    padding: 1rem;
    margin: 0 0 10px;
    font-size: inherit;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .pre-wrap {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }
</style>
