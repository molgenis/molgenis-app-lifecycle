<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in variableColumns">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="variable in variableData">
          <td>{{ variable.variable }}</td>
          <td>{{ variable.label }}</td>
          <td>{{ variable.datatype.label }}</td>
          <td>{{ variable.values }}</td>
          <td>{{ variable.unit }}</td>
          <td>{{ variable.match.label }}</td>
          <td>{{ variable.definition }}</td>
          <td>{{ variable.comments }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'TableCoreVariables',
    computed: {
      variableColumns: function () {
        return this.$store.state.variables.columns
      },
      variableData: function () {
        return this.$store.state.variables.data
      }
    }
  }
</script>



