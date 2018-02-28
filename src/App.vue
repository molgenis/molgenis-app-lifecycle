<template>
  <div id="app">
    <LifeCycleCatalogue msg="Welcome to the LifeCycle App"/>
  </div>
</template>

<script>
import LifeCycleCatalogue from './components/LifeCycleCatalogue.vue'

export default {
  name: 'app',
  components: {
    LifeCycleCatalogue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
