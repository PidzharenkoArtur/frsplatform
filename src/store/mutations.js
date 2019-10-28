export default {
  //Сохраняем токен в localStorage
  saveToken(state, data) {
    let {user, ...token} = data;
    console.log(token);
    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('refreshToken', token.refreshToken);
  },

  updateToken(state) {
    console.log("artir");
  },

  switchDialog (state, on) {
    state.dialog = on;
  }
}
