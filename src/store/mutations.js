export default {
  handleLoginSubmission (state, response) {
    localStorage.setItem('jwt', response)
  },

  handleRegistrationSubmission (state, response) {
    // localStorage.setItem('jwt',response);
  }
}
