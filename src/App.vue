<template>
  <div id="app">
    <v-app>
      <div class="new-password-modal" v-if="dialog">
        <v-sheet style="display:flex; align-items:center; justify-content:center" class="text-center" height="150px">
            <div class="py-15 red--text">{{ "ОШИБКА" }}</div>
        </v-sheet>
      </div>
      <earth/>
      <router-view/>
      <footer-page/>
    </v-app>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Earth from './components/global/earth'
import FooterPage from './components/global/FooterPage'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'dialog'
    ]),
  },
  components: {
    Earth,
    FooterPage
  }
}
</script>

<style>
  body {
    font-family: Roboto, Helvetica, Arial,sans-serif;
  }
  .registration-modal, .login-modal, 
  .new-password-modal {
    z-index: 1000;
    position: fixed;
    width: 100%;
  }
</style>
