<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th v-for="variable in coreVariables.attributes" v-if="variable.visible !== 'false' && variable.name !== 'harmonizations'">{{ variable.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coreVariables.items">
          <td>{{ item.variable  || ''}}</td>
          <td>{{ item.label  || ''}}</td>
          <td>{{ item.datatype.label  || ''}}</td>
          <td>{{ item.values  || ''}}</td>
          <td>{{ item.unit || ''}}</td>
          <td>{{ item.match.label || ''}}</td>
          <td>{{ item.definition || ''}}</td>
          <td>{{ item.comments  || ''}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'TableCoreVariables',
    props: {
      coreVariables: Object
    }
  }
</script>



