<template>
  <div>
    <earth/>
    <router-view/>
    <footer-page/>
  </div>
</template>

<script>
import Earth from './components/global/earth'
import FooterPage from './components/global/FooterPage'

export default {
  name: 'App',
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
</style>
