<template>
  <a href="#" @click.prevent="click" v-if="id">
    <font-awesome-icon :icon="icon" :class="iconClass" size="lg"></font-awesome-icon>
  </a>
  <font-awesome-icon :icon="icon" :class="iconClass" size="lg" v-else></font-awesome-icon>
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
    computed: {
      icon () {
        switch (this.status) {
          case 'complete':
          case 'partial':
            return 'check-circle'
          case 'zna':
            return 'times'
          default:
            return 'question'
        }
      },
      iconClass () {
        switch (this.status) {
          case 'complete':
            return 'text-success'
          case 'partial':
            return 'text-warning'
          case 'zna':
          default:
            return 'text-secondary'
        }
      }
    },
    components: {
      FontAwesomeIcon
    }
  }
</script>