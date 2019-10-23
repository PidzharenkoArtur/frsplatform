import { getToken } from '../api/auth.api'

export default {
  sendLoginForm ({ commit }, data) {
    getToken(data)
      .then(response => {
        commit('handleLoginSubmission', response)
      })
      .catch(error => {
        console.error(error.response)
      })
  },

  sendRegistrationForm ({ commit }, data) {
    getToken(data)
      .then(response => {
        commit('handleRegistrationSubmission', response)
      })
      .catch(error => {
        console.error(error.response)
      })
  }
}
