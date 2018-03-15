<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="column in variableColumns">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="variable in variableData">
          <td v-for="column in variableColumns">
            <span v-if="typeof variable[column.name] === 'object'">test {{ variable[column.name].label }}</span>
            <pre v-else-if="column.name === 'values' || column.name === 'comments'">{{ variable[column.name] }}</pre>
            <span v-else>{{ variable[column.name] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'TableCoreVariables',
    computed: {
      ...mapGetters({
        variableColumns: 'getCoreVariableColumns',
        variableData: 'getCoreVariableData'
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



