export default {
  //Сохраняем токен в localStorage
  saveToken(state, data) {
    let {user, ...token} = data;
    localStorage.setItem('token', JSON.stringify(token));
  },

  getRefreshTokenStore (state) {
    if (!localStorage.getItem('token')) {
      return;
    }

    let token = JSON.parse(localStorage.getItem('token'));
    state.refreshToken = token;
  },

  switchDialog (state, on) {
    state.dialog = on;
  }
}
