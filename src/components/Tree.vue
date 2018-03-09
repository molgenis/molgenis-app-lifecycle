<template>
  <div class="tree">
    <v-jstree @item-click="itemClick" :onselectstart="false" :data="treeData"></v-jstree>
  </div>
</template>

<script>
  import VJstree from 'vue-jstree'

  export default {
    name: 'Tree',
    components: {
      VJstree
    },
    props: ['treeData', 'itemClick']
  }
</script>
