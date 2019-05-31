<template>
  <div class="core-variable-panel m-4">
    <template>
      <h4>{{ selectedNodeLabel }}</h4>
      <div class="row">
        <div class="col-12">
          <DynamicScroller
            :items="coreVariables"
            :min-item-size="54"
            key-field="variable"
            class="scroller"
          >
            <template v-slot="{ item, index, active }">
              <DynamicScrollerItem
                :item="item"
                :active="active"
                :size-dependencies="[
                  item.message,
                ]"
                :data-index="index"
              >
                <div class="card mb-3" :key="item.id">
                  <div class="card-header">
                    <span class="lead">{{ item.label }}</span>
                  </div>

                  <div class="card-body">
                    <div class="card-text">
                      <dl class="row">

                        <template v-for="field in variableMetadata.filter(it => it.name !== 'label')">
                          <dt class="col-2" :key="field.name + '-dt'">{{ field.name }}</dt>
                          <dd class="col-10" :key="field.name + '-dd'">
                            <span v-if="field.name === 'datatype' || (field.name === 'unit' && item.unit)">
                              {{ item[field.name].label }}
                            </span>
                            <pre v-else-if="field.name === 'values'">{{ item.values }}</pre>
                            <pre v-else-if="field.name === 'comments'" class="pre-wrap">{{ item.comments }}</pre>

                            <span v-else-if="field.name === 'harmonizations'">
                              {{ getHarmonizationValues(item.harmonizations) }}
                            </span>

                            <span v-else-if="item[field.name] === undefined">-</span>
                            <span v-else>{{ item[field.name] }}</span>
                          </dd>
                        </template>
                      </dl>
                    </div>
                  </div>
                </div>
              </DynamicScrollerItem>
            </template>
          </DynamicScroller>
        </div>
      </div>
    </template>
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

  .scroller {
    height: 100%;
  }
</style>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'CatalogueCoreVariablePanel',
    data () {
      return {
        coreVariables: []
      }
    },
    created () {
      this.coreVariables = [...this.selectedNodeVariables]
    },
    watch: {
      selectedNodeVariables (value) {
        this.coreVariables = [...value]
      }
    },
    methods: {
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
    }
  }
</script>
