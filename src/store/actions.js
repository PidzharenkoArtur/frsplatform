import { getToken, refreshToken, postSSOToken, getSSOToken } from '../api/auth.api'

export default {
  //Получение токена при аутентификации
  sendLoginForm ({ commit }, data) {
    getToken(data)
      .then(response => {
        if (response.status === 200) {
          commit('saveToken', response.data)
        }
      })
      .catch(error => {
        console.log(error);
      })
  },
  //Обновление токена
  updateToken ({ commit }, data) {
    refreshToken(data)
      .then(response => {
        if (response.status === 200) {
          commit('saveToken', response.data)
        }
      })
      .catch(error => {
        console.log(error);
      })
  },

  //Отправить SSO token
  sendSSOToken ({ commit }, data) {
    postSSOToken(data)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      })
  },

  //Получить SSO token
  getSSOToken1 ({ commit }) {

    getSSOToken()
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      })
  },

  sendRegistrationForm ({ commit }, data) {
    getToken(data)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          commit('saveToken', response.data)
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
}
