export default {
    //Получить аксес токен с localstorage
    accessToken: state => {
        return state.accessToken;
    },
    //Получить рефреш токен с localstorage
    refreshToken: state => {
        return state.refreshToken;
  },
}
