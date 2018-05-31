<template>
  <div class="core-variable-data-container m-4">

    <template v-if="coreVariables.length > 0">
      <h4>{{ selectedNodeLabel }}</h4>
      <div class="row">
        <div class="col-12">

          <template v-for="variable in coreVariables">
            <div class="card mb-3">
              <div class="card-header">
                <span class="lead">{{variable['label']}}</span>
              </div>

              <div class="card-body">
                <div class="card-text">
                  <dl class="row">

                    <template v-for="field in coreVariableFields" v-if="field.name !== 'label'">
                      <dt class="col-2">{{ field.name }}</dt>
                      <dd class="col-10">
                        <span v-if="typeof variable[field.name] === 'object'">
                          {{ variable[field.name].label }}
                        </span>

                        <span v-else-if="field.name === 'harmonizations'">
                          // TODO This is not showing for mysterious reasons....
                        </span>

                        <pre v-else-if="field.name === 'values'">{{ variable[field.name] }}</pre>
                        <pre v-else-if="field.name === 'comments'" class="pre-wrap">{{ variable[field.name] }}</pre>

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

  </div>
</template>

<script>
  export default {
    name: 'CoreVariables',
    computed: {
      coreVariables () {
        return this.$store.state.selectedNodeVariables
      },

      coreVariableFields () {
        return this.$store.getters.getCoreVariableFields
      },

      selectedNodeLabel () {
        return this.$store.state.selectedNodeLabel
      }
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
