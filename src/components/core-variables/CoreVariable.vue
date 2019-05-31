<template>
  <div class="card">
    <div class="card-header">
      LifeCycle variable: <strong>{{ variable.label }}</strong>
    </div>

    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-striped">
          <tr v-for="column in fields" :key="column.name">
            <th>{{ column.label }}</th>
            <td>
              <span v-if="typeof variable[column.name] === 'object'">{{ variable[column.name].label }}</span>
              <pre v-else-if="column.name === 'values'">{{ variable[column.name] }}</pre>
              <pre class="pre-wrap" v-else-if="column.name === 'comments'">{{ variable[column.name] }}</pre>
              <span v-else>{{ variable[column.name] }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CoreVariable',
    props: ['fields', 'variable']
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



