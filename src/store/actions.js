import { getToken, postRefreshToken, getMe, getSSOToken } from '../api/auth.api'

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
  //Инициализация обновления токена
  initUpdateToken ({ commit, state }, data) {
    getMe()
      .then(response => {
        if (response.status === 200) {
          console.log("1");
          console.log(response);
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
          postRefreshToken(state.refreshToken)
            .then(response => {
              if (response.status === 200) {
                console.log("3");
                console.log(state.refreshToken);
              }
            })
          console.log("2");
        }
        console.log(error);
      })
    //setInterval(()=> {
      //commit('updateToken');
    //}, 1000);
  },

  //Получить SSO token
  getSSOToken1 ({ commit }) {
    getSSOToken()
      .then(response => {
        if (response.status === 200) {
          console.log("art");
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
