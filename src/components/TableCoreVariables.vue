<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in variableColumns">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="variable in variableData">
          <td v-for="column in variableColumns">
            <span v-if="typeof variable[column.name] === 'object'">{{ variable[column.name].label }}</span>
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



