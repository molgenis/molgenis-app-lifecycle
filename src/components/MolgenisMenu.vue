<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img class="img-responsive" style="max-width:100%;max-height:100%;"
           :src="navbarLogo"
           height="20"
           alt="MOLGENIS">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="menuItem in menuItems">
          <a class="nav-link" :href="menuItem.link">{{menuItem.label}}</a>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
  import { GET_NAVBAR_LOGO } from '../store/actions'

  const {server, menuItems} = window.__INITIAL_STATE__

  export default{
    name: 'molgenis-menu',
    computed: {
      navbarLogo () {
        return server + this.$store.state.navbarLogo
      },
      menuItems () {
        return menuItems
      }
    },
    mounted () {
      this.$store.dispatch(GET_NAVBAR_LOGO)
    }
  }
</script>
