import HTTP from './create.api'

const getToken = (data) => HTTP.post('/api/auth/sign_in', data)
const refreshToken = (data) => HTTP.post('/api/auth/refresh', data)
const postSSOToken = (data) => HTTP.post('/api/auth/sso', data)
const getSSOToken = () => HTTP.get('/api/me/sso')


export { getToken, refreshToken, postSSOToken, getSSOToken}
