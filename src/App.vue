<template>
  <div id="app">
    <v-app>
      <earth/>
      <router-view/>
      <footer-page/>
    </v-app>
  </div>
</template>

<script>
import Earth from './components/global/earth'
import FooterPage from './components/global/FooterPage'

export default {
  name: 'App',
  data () {
      return {
        dialog: false,
      }
  },
  components: {
    Earth,
    FooterPage,
  },
}
</script>

<style>
  body {
    font-family: Roboto, Helvetica, Arial,sans-serif;
  }
  .registration-modal {
    z-index: 1000;
    position: fixed;
    width: 100%;
  }
</style>
