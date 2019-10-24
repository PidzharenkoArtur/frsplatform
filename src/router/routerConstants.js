const ROUTER_NAMES = {
  AUTH: {
    LOGIN: 'LoginPage',
    REGISTRATION: 'RegistrationPage',
    NEWPASSWORD: 'NewPasswordPage',
    RESET: 'ResetPage'
  },

  USER: {
    ME: 'MePage'
  }
}

const ROUTER_PATH = {
  AUTH: {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    NEWPASSWORD: '/new-password',
    RESET: '/reset'
  },

  USER: {
    ME: '/me'
  }
}

export { ROUTER_NAMES, ROUTER_PATH }
