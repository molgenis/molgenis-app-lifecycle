<template>
  <div class="card">
    <div class="card-header">
      {{ selectedVariable.variable }}
    </div>
    <div class="card-body">
      <table class="table table-striped">
        <tr v-for="column in variableColumns">
          <th>{{ column.label }}</th>
          <td>
            <span v-if="typeof selectedVariable[column.name] === 'object'">test {{ selectedVariable[column.name].label }}</span>
            <pre v-else-if="column.name === 'values' || column.name === 'comments'">{{ selectedVariable[column.name] }}</pre>
            <span v-else>{{ selectedVariable[column.name] }}</span>
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
    props: {
      selectedVariable: {}
    },
    computed: {
      ...mapGetters({
        variableColumns: 'getCoreVariableColumns'
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
</style>



