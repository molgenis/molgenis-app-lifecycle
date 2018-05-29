<template>
  <div class="life-cycle-app-container">
    <molgenis-menu></molgenis-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import MolgenisMenu from './components/MolgenisMenu'

  export default {
    name: 'app',
    components: {
      MolgenisMenu
    }
  }
</script>
