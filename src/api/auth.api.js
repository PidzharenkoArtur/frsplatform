import HTTP from './create.api'

const getToken = (data) => HTTP.post('/api/auth/sign_in', data)
const postRefreshToken = (data) => HTTP.post('/api/auth/refresh', data)
const getSSOToken = () => HTTP.get('/api/me/sso', {params: {redirectUrl: 'http://localhost:8080/'}})
const getMe = () => HTTP.get('/api/me')

export { getToken, postRefreshToken, getMe, getSSOToken}

