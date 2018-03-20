<template>
  <div class="card" v-if="variableData.length > 0">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
    <table class="table table-sm">
      <thead>
        <tr>
          <th v-for="column in variableColumns">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="variable in variableData">
          <td v-for="column in variableColumns">
            <span v-if="typeof variable[column.name] === 'object'">test {{ variable[column.name].label }}</span>
            <pre v-else-if="column.name === 'values'">{{ variable[column.name] }}</pre>
            <pre class="pre-wrap" v-else-if="column.name === 'comments'">{{ variable[column.name] }}</pre>
            <span v-else>{{ variable[column.name] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CoreVariables',
    props: {
      title: ''
    },
    computed: {
      ...mapGetters({
        variableColumns: 'getCoreVariablesColumns',
        variableData: 'getCoreVariablesData'
      })
    }
  }
</script>

<style scoped>
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
    white-space: pre-wrap;       /* css-3 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
</style>
