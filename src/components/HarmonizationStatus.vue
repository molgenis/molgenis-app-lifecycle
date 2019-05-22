<template>
  <a href="#" @click.prevent="click" v-if="id">
    <font-awesome-icon icon="check-circle" class="text-success" v-if="status === 'complete'"></font-awesome-icon>
    <font-awesome-icon icon="check-circle" class="text-warning" v-else-if="status === 'partial'"></font-awesome-icon>
    <font-awesome-icon icon="times" class="text-secondary" v-else-if="status === 'zna'"></font-awesome-icon>
  </a>
  <font-awesome-icon icon="question" class="text-secondary" v-else></font-awesome-icon>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCheckCircle, faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'

  library.add(faCheckCircle, faQuestion, faTimes)

  export default {
    props: {
      status: String,
      id: String
    },
    methods: {
      click () {
        this.$router.push(this.$route.path + '/' + this.id)
      }
    },
    components: {
      FontAwesomeIcon
    }
  }
</script>