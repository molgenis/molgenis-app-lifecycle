<template>
  <div class="core-variable-panel m-4">
    <template>
      <h4>{{ selectedNodeLabel }}</h4>
      <div class="row">
        <div class="col-12">

          <template v-for="variable in coreVariables">
            <div class="card mb-3" :key="variable.id">
              <div class="card-header">
                <span class="lead">{{ variable.label }}</span>
              </div>

              <div class="card-body">
                <div class="card-text">
                  <dl class="row">

                    <template v-for="field in variableMetadata.filter(it => it.name !== 'label')">
                      <dt class="col-2" :key="field.name + '-dt'">{{ field.name }}</dt>
                      <dd class="col-10" :key="field.name + '-dd'">
                        <span v-if="field.name === 'datatype' || (field.name === 'unit' && variable.unit)">
                          {{ variable[field.name].label }}
                        </span>
                        <pre v-else-if="field.name === 'values'">{{ variable.values }}</pre>
                        <pre v-else-if="field.name === 'comments'" class="pre-wrap">{{ variable.comments }}</pre>

                        <span v-else-if="field.name === 'harmonizations'">
                          {{ getHarmonizationValues(variable.harmonizations) }}
                        </span>

                        <span v-else-if="variable[field.name] === undefined">-</span>
                        <span v-else>{{ variable[field.name] }}</span>
                      </dd>
                    </template>

                  </dl>
                </div>
              </div>
            </div>
          </template>

        </div>
      </div>
    </template>
    <observer @intersect="fetch" v-if="toBeFetched.length">
      <button @click="fetch">{{toBeFetched.length}} more...</button>
    </observer>
  </div>
</template>

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

<script>
  import { mapState } from 'vuex'
  import Observer from './Observer.vue'

  export default {
    name: 'CatalogueCoreVariablePanel',
    props: {
      batchSize: {
        type: Number,
        default: 100
      }
    },
    data () {
      return {
        toBeFetched: [],
        coreVariables: []
      }
    },
    created () {
      this.toBeFetched = [...this.selectedNodeVariables]
      this.fetch()
    },
    watch: {
      selectedNodeVariables (value) {
        this.coreVariables = []
        this.toBeFetched = [...value]
        this.fetch()
      }
    },
    methods: {
      fetch () {
        this.coreVariables = [...this.coreVariables, ...this.toBeFetched.splice(0, this.batchSize)]
      },
      getHarmonizationValues (harmonizations) {
        if (harmonizations.length > 0) {
          return harmonizations.map(harmonization => harmonization.id.substring(0, harmonization.id.indexOf('_'))).join(', ')
        } else {
          return '-'
        }
      }
    },
    computed: {
      ...mapState(['variableMetadata', 'selectedNodeLabel', 'selectedNodeVariables'])
    },
    components: {
      Observer
    }
  }
</script>
