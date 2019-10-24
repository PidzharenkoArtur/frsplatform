export default {
  handleLoginSubmission (state, response) {
    localStorage.setItem('jwt', response)
  },

  switchDialog (state, on) {
    state.dialog = on;
  }
}
