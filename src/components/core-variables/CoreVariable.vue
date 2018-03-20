<template>
  <div class="card">
    <div class="card-header">
      <h6>Core variable: {{ selectedVariable[0].label }}</h6>
    </div>
    <div class="card-body card-overflow">
      <table class="table table-striped">
        <tr v-for="column in variableColumns">
          <th>{{ column.label }}</th>
          <td>
            <span v-if="typeof selectedVariable[0][column.name] === 'object'">test {{ selectedVariable[0][column.name].label }}</span>
            <pre v-else-if="column.name === 'values'">{{ selectedVariable[0][column.name] }}</pre>
            <pre class="pre-wrap" v-else-if="column.name === 'comments'">{{ selectedVariable[0][column.name] }}</pre>
            <span v-else>{{ selectedVariable[0][column.name] }}</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CoreVariable',
    computed: {
      ...mapGetters({
        variableColumns: 'getCoreVariablesColumns',
        selectedVariable: 'getCoreVariablesData'
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
  .card-overflow {
    overflow: auto;
  }
</style>



